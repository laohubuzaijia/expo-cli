import { ProjectTarget } from '@expo/config';
import program, { Command } from 'commander';
import crypto from 'crypto';
import fs from 'fs-extra';
import path from 'path';
import { UrlUtils } from 'xdl';

import CommandError, { SilentError } from '../CommandError';
import Log from '../log';
import prompt from '../prompts';
import { exportAppAsync } from './export/exportAppAsync';
import { mergeAppDistributions } from './export/mergeAppDistributions';
import * as CreateApp from './utils/CreateApp';
import { downloadAndDecompressAsync } from './utils/Tar';

type Options = {
  outputDir: string;
  assetUrl: string;
  publicUrl?: string;
  mergeSrcUrl: string[];
  mergeSrcDir: string[];
  dev: boolean;
  clear: boolean;
  quiet: boolean;
  target?: ProjectTarget;
  dumpAssetmap: boolean;
  dumpSourcemap: boolean;
  maxWorkers?: number;
  force: boolean;
  experimentalBundle: boolean;
};

export async function promptPublicUrlAsync(): Promise<string> {
  try {
    const { value } = await prompt({
      type: 'text',
      name: 'value',
      validate: UrlUtils.isHttps,
      message: `What is the public url that will host the static files?`,
    });
    return value;
  } catch {
    throw new CommandError('MISSING_PUBLIC_URL', 'Missing required option: --public-url');
  }
}

export async function ensurePublicUrlAsync(url: any, isDev?: boolean): Promise<string> {
  if (!url) {
    if (program.nonInteractive) {
      throw new CommandError('MISSING_PUBLIC_URL', 'Missing required option: --public-url');
    }
    url = await promptPublicUrlAsync();
  }

  // If we are not in dev mode, ensure that url is https
  if (!isDev && !UrlUtils.isHttps(url)) {
    throw new CommandError('INVALID_PUBLIC_URL', '--public-url must be a valid HTTPS URL.');
  } else if (!UrlUtils.isURL(url, { protocols: ['http', 'https'] })) {
    Log.nestedWarn(
      `Dev Mode: --public-url ${url} does not conform to the required HTTP(S) protocol.`
    );
  }

  return url;
}

// TODO: We shouldn't need to wrap a method that is only used for one purpose.
async function exportFilesAsync(
  projectRoot: string,
  options: Pick<
    Options,
    | 'dumpAssetmap'
    | 'dumpSourcemap'
    | 'dev'
    | 'clear'
    | 'target'
    | 'outputDir'
    | 'publicUrl'
    | 'assetUrl'
    | 'experimentalBundle'
  >
) {
  // Make outputDir an absolute path if it isnt already
  const exportOptions = {
    dumpAssetmap: options.dumpAssetmap,
    dumpSourcemap: options.dumpSourcemap,
    isDev: options.dev,
    publishOptions: {
      resetCache: !!options.clear,
      target: options.target,
    },
  };
  return await exportAppAsync(
    projectRoot,
    options.publicUrl!,
    options.assetUrl,
    options.outputDir,
    exportOptions,
    options.experimentalBundle
  );
}

async function mergeSourceDirectoriresAsync(
  projectRoot: string,
  mergeSrcDirs: string[],
  options: Pick<Options, 'mergeSrcUrl' | 'mergeSrcDir' | 'outputDir'>
): Promise<void> {
  if (!mergeSrcDirs.length) {
    return;
  }
  const srcDirs = options.mergeSrcDir.concat(options.mergeSrcUrl).join(' ');
  Log.nested(`Starting project merge of ${srcDirs} into ${options.outputDir}`);

  // Merge app distributions
  await mergeAppDistributions(
    projectRoot,
    [...mergeSrcDirs, options.outputDir], // merge stuff in srcDirs and outputDir together
    options.outputDir
  );
  Log.nested(
    `Project merge was successful. Your merged files can be found in ${options.outputDir}`
  );
}

export async function collectMergeSourceUrlsAsync(
  projectRoot: string,
  mergeSrcUrl: string[]
): Promise<string[]> {
  // Merge src dirs/urls into a multimanifest if specified
  const mergeSrcDirs: string[] = [];

  // src urls were specified to merge in, so download and decompress them
  if (mergeSrcUrl.length > 0) {
    // delete .tmp if it exists and recreate it anew
    const tmpFolder = path.resolve(projectRoot, '.tmp');
    await fs.remove(tmpFolder);
    await fs.ensureDir(tmpFolder);

    // Download the urls into a tmp dir
    const downloadDecompressPromises = mergeSrcUrl.map(
      async (url: string): Promise<void> => {
        // Add the absolute paths to srcDir
        const uniqFilename = `${path.basename(url, '.tar.gz')}_${crypto
          .randomBytes(16)
          .toString('hex')}`;

        const tmpFolderUncompressed = path.resolve(tmpFolder, uniqFilename);
        await fs.ensureDir(tmpFolderUncompressed);
        await downloadAndDecompressAsync(url, tmpFolderUncompressed);
        // add the decompressed folder to be merged
        mergeSrcDirs.push(tmpFolderUncompressed);
      }
    );

    await Promise.all(downloadDecompressPromises);
  }
  return mergeSrcDirs;
}

function collect<T>(val: T, memo: T[]): T[] {
  memo.push(val);
  return memo;
}

export async function action(projectRoot: string, options: Options) {
  if (!options.experimentalBundle) {
    // Ensure URL
    options.publicUrl = await ensurePublicUrlAsync(options.publicUrl, options.dev);
  }

  // Ensure the output directory is created
  const outputPath = path.resolve(projectRoot, options.outputDir);
  await fs.ensureDir(outputPath);

  // Assert if the folder has contents
  if (
    !(await CreateApp.assertFolderEmptyAsync({
      projectRoot: outputPath,
      folderName: options.outputDir,
      overwrite: options.force,
    }))
  ) {
    const message = `Try using a new directory name with ${Log.chalk.bold(
      '--output-dir'
    )}, moving these files, or using ${Log.chalk.bold('--force')} to overwrite them.`;
    Log.newLine();
    Log.nested(message);
    Log.newLine();
    throw new SilentError(message);
  }

  // Wrap the XDL method for exporting assets
  await exportFilesAsync(projectRoot, options);

  // Merge src dirs/urls into a multimanifest if specified
  const mergeSrcDirs: string[] = await collectMergeSourceUrlsAsync(
    projectRoot,
    options.mergeSrcUrl
  );
  // add any local src dirs to be merged
  mergeSrcDirs.push(...options.mergeSrcDir);

  await mergeSourceDirectoriresAsync(projectRoot, mergeSrcDirs, options);

  Log.log(`Export was successful. Your exported files can be found in ${options.outputDir}`);
}

export default function (program: Command) {
  program
    .command('export [path]')
    .description('Export the static files of the app for hosting it on a web server')
    .helpGroup('core')
    .option('-p, --public-url <url>', 'The public url that will host the static files. (Required)')
    .option('-c, --clear', 'Clear the Metro bundler cache')
    .option(
      '--output-dir <dir>',
      'The directory to export the static files to. Default directory is `dist`',
      'dist'
    )
    .option(
      '-a, --asset-url <url>',
      "The absolute or relative url that will host the asset files. Default is './assets', which will be resolved against the public-url.",
      './assets'
    )
    .option('-d, --dump-assetmap', 'Dump the asset map for further processing.')
    .option('--dev', 'Configure static files for developing locally using a non-https server')
    .option('-f, --force', 'Overwrite files in output directory without prompting for confirmation')
    .option('-s, --dump-sourcemap', 'Dump the source map for debugging the JS bundle.')
    .option('-q, --quiet', 'Suppress verbose output.')
    .option(
      '-t, --target [env]',
      'Target environment for which this export is intended. Options are `managed` or `bare`.'
    )
    .option('--merge-src-dir [dir]', 'A repeatable source dir to merge in.', collect, [])
    .option(
      '--merge-src-url [url]',
      'A repeatable source tar.gz file URL to merge in.',
      collect,
      []
    )
    .option('--max-workers [num]', 'Maximum number of tasks to allow Metro to spawn.')
    .option('--experimental-bundle', 'export bundles for use with EAS updates.')
    .asyncActionProjectDir(action, { checkConfig: true });
}

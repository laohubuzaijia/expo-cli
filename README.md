<!-- Title -->

<p align="center">
  <a href="https://expo.io/">
    <img alt="expo cli" height="128" src="./.gh-assets/banner.png">
    <h1 align="center">Expo CLI</h1>
  </a>
</p>

<p align="center">Tools for creating, running, and deploying Universal Expo and React Native apps</p>

<p align="center">

  <a aria-label="Join our forums" href="https://forums.expo.io" target="_blank">
    <img alt="" src="https://img.shields.io/badge/Ask%20Questions%20-blue.svg?style=flat-square&logo=discourse&logoWidth=15&labelColor=000000&color=4630EB">
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
<a aria-label="expo-cli downloads" href="http://www.npmtrends.com/expo-cli" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo-cli.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
</a>
    <br>
    <a aria-label="Circle CI" href="https://circleci.com/gh/expo/expo-cli/tree/master">
    <img alt="Circle CI" src="https://flat.badgen.net/circleci/github/expo/expo-cli?label=Circle%20CI&labelColor=555555&icon=circleci">
  </a>

</p>

<p align="center">
  <a aria-label="expo documentation" href="https://docs.expo.io/workflow/expo-cli/">📚 Read the Documentation</a>
  |
  <a aria-label="contribute to expo cli" href="https://github.com/expo/expo-cli/blob/master/CONTRIBUTING.md"><b>Contributing to Expo CLI</b></a>
</p>

<p>
  <a aria-label="Follow @expo on Twitter" href="https://twitter.com/intent/follow?screen_name=expo" target="_blank">
    <img  alt="Twitter: expo" src="https://img.shields.io/twitter/follow/expo.svg?style=flat-square&label=Follow%20%40expo&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray" target="_blank" />
  </a>
  <a aria-label="Follow Expo on Medium" href="https://blog.expo.io">
    <img align="right" alt="Medium: exposition" src="https://img.shields.io/badge/Learn%20more%20on%20our%20blog-lightgray.svg?style=flat-square" target="_blank" />
  </a>
</p>

---

- [📚 Documentation](#-documentation)
- [🗺 Project Layout](#-project-layout)
- [🏅 Badges](#-badges)
- [👏 Contributing](#-contributing)
- [❓ FAQ](#-faq)
- [💙 The Team](#-the-team)
- [License](#license)

## 📚 Documentation

<p>Learn about building and deploying universal apps <a aria-label="expo documentation" href="https://docs.expo.io">in our official docs!</a></p>

- [Using the CLI](https://docs.expo.io/workflow/expo-cli/)
- [App.json Configuration](https://docs.expo.io/workflow/configuration/)
- [Building and Deploying apps](https://docs.expo.io/introduction/walkthrough/#building-and-deploying)

## 🗺 Project Layout

<!-- Begin auto-generation -->

| Package                                                                            | Version                                                                                                                                                             |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**`@expo/babel-preset-cli`**](./packages/babel-preset-cli)                        | [![badges](https://img.shields.io/npm/v/@expo/babel-preset-cli?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/babel-preset-cli)               |
| [**`@expo/config`**](./packages/config)                                            | [![badges](https://img.shields.io/npm/v/@expo/config?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/config)                                   |
| [**`@expo/config-types`**](./packages/config-types)                                | [![badges](https://img.shields.io/npm/v/@expo/config-types?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/config-types)                       |
| [**`@expo/configure-splash-screen`**](./unlinked-packages/configure-splash-screen) | [![badges](https://img.shields.io/npm/v/@expo/configure-splash-screen?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/configure-splash-screen) |
| [**`@expo/dev-server`**](./packages/dev-server)                                    | [![badges](https://img.shields.io/npm/v/@expo/dev-server?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/dev-server)                           |
| [**`@expo/dev-tools`**](./packages/dev-tools)                                      | [![badges](https://img.shields.io/npm/v/@expo/dev-tools?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/dev-tools)                             |
| [**`@expo/electron-adapter`**](./packages/electron-adapter)                        | [![badges](https://img.shields.io/npm/v/@expo/electron-adapter?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/electron-adapter)               |
| [**`expo-cli`**](./packages/expo-cli)                                              | [![badges](https://img.shields.io/npm/v/expo-cli?color=32cd32&style=flat-square)](https://www.npmjs.com/package/expo-cli)                                           |
| [**`expo-codemod`**](./packages/expo-codemod)                                      | [![badges](https://img.shields.io/npm/v/expo-codemod?color=32cd32&style=flat-square)](https://www.npmjs.com/package/expo-codemod)                                   |
| [**`expo-optimize`**](./packages/expo-optimize)                                    | [![badges](https://img.shields.io/npm/v/expo-optimize?color=32cd32&style=flat-square)](https://www.npmjs.com/package/expo-optimize)                                 |
| [**`@expo/image-utils`**](./packages/image-utils)                                  | [![badges](https://img.shields.io/npm/v/@expo/image-utils?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/image-utils)                         |
| [**`@expo/json-file`**](./packages/json-file)                                      | [![badges](https://img.shields.io/npm/v/@expo/json-file?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/json-file)                             |
| [**`@expo/metro-config`**](./packages/metro-config)                                | [![badges](https://img.shields.io/npm/v/@expo/metro-config?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/metro-config)                       |
| [**`@expo/next-adapter`**](./packages/next-adapter)                                | [![badges](https://img.shields.io/npm/v/@expo/next-adapter?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/next-adapter)                       |
| [**`@expo/osascript`**](./packages/osascript)                                      | [![badges](https://img.shields.io/npm/v/@expo/osascript?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/osascript)                             |
| [**`@expo/package-manager`**](./packages/package-manager)                          | [![badges](https://img.shields.io/npm/v/@expo/package-manager?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/package-manager)                 |
| [**`@expo/pkcs12`**](./packages/pkcs12)                                            | [![badges](https://img.shields.io/npm/v/@expo/pkcs12?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/pkcs12)                                   |
| [**`@expo/plist`**](./packages/plist)                                              | [![badges](https://img.shields.io/npm/v/@expo/plist?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/plist)                                     |
| [**`pod-install`**](./packages/pod-install)                                        | [![badges](https://img.shields.io/npm/v/pod-install?color=32cd32&style=flat-square)](https://www.npmjs.com/package/pod-install)                                     |
| [**`expo-pwa`**](./packages/pwa)                                                   | [![badges](https://img.shields.io/npm/v/expo-pwa?color=32cd32&style=flat-square)](https://www.npmjs.com/package/expo-pwa)                                           |
| [**`@expo/schemer`**](./packages/schemer)                                          | [![badges](https://img.shields.io/npm/v/@expo/schemer?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/schemer)                                 |
| [**`uri-scheme`**](./packages/uri-scheme)                                          | [![badges](https://img.shields.io/npm/v/uri-scheme?color=32cd32&style=flat-square)](https://www.npmjs.com/package/uri-scheme)                                       |
| [**`@expo/webpack-config`**](./packages/webpack-config)                            | [![badges](https://img.shields.io/npm/v/@expo/webpack-config?color=32cd32&style=flat-square)](https://www.npmjs.com/package/@expo/webpack-config)                   |
| [**`xdl`**](./packages/xdl)                                                        | [![badges](https://img.shields.io/npm/v/xdl?color=32cd32&style=flat-square)](https://www.npmjs.com/package/xdl)                                                     |

<!-- Generated with $ node scripts/build-packages-toc.js -->

## 🏅 Badges

Let everyone know your app is universal with _Expo_!
<br/>

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

```md
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
```

## 👏 Contributing

If you like the Expo CLI and want to help make it better then check out our [contributing guide](/CONTRIBUTING.md)! Also check out the [Expo repo](http://github.com/expo/expo) to work on the Expo docs, modules, and components in the Expo SDK.

## ❓ FAQ

If you have questions about Expo and want answers, then check out our [Frequently Asked Questions](https://docs.expo.io/introduction/faq/)!

If you still have questions you can ask them on our [forums](https://forums.expo.io) or on Twitter [@Expo](https://twitter.com/expo).

## 💙 The Team

Curious about who makes Expo? Here are our [team members](https://expo.io/about)!

## License

The Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.
# 1

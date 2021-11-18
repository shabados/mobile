# Contributing to Mobile

Thank you for your interest in participating!

There are many ways to contribute, beyond writing code or programming, by: logging bugs, reporting issues, and creating suggestions. To do so, please [create a ticket](https://github.com/shabados/mobile/issues/new) in our issue tracker. See other ways to [Contribute](README.md#Contributing) or give [Feedback](README.md#Feedback).

This document is for developers or programmers contributing to the source code of Mobile.

**Table of Contents**

- [Contributing to Mobile](#contributing-to-mobile)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Build](#build)
    - [Run](#run)
  - [Fastlane](#fastlane)
  - [Workflow](#workflow)
    - [Coding Guidelines](#coding-guidelines)
    - [Scope](#scope)
  - [Thank you](#thank-you)

## Getting Started

If you wish to better understand how Mobile works or want to debug an issue: get the source, build it, and run it locally.

### Prerequisites

In order to download necessary tools, clone the repository, and install dependencies, you'll need network access.

You'll need the following:

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org) (If you need to manage multiple Node.JS versions, [use a node version manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install)

Get the source code of `mobile` repo:

```shell
gh repo fork shabados/mobile --clone=true
```

**PROTIP**: Use the [`gh` cli tool from GitHub](https://cli.github.com/) to fork the repo to your GitHub account (if not already), clone it to your local machine, and set the appropriate remotes for origin and upstream with the above command.

For Android or iOS, you'll need the following:

- [Flipper](https://fbflipper.com/) (Debugging)
- [Watchman](https://facebook.github.io/watchman/docs/install.html) (Live-reloading support)

Then according to your platform and target OS, follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) to setup your dev environment.

**NOTE**: The React Native CLI is already bundled with the `mobile` repo. If you need to manage multiple Node.JS versions, use a node version manager to install [Node.JS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instead of chocolatey like the Quickstart suggests. **_Use only jdk 8 and python2_**.

**NOTE**: If you're running Windows 10 and running Hyper-V, then you cannot be running HAXM at the same time. See [Google's docs on emulator acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-windows).

### Build

Run `npm i` in the root directory. This will also install any macOS Cocoapods.

**NOTE**: For macOS a possible `xcrun` error `SDK "iphoneos" cannot be located` or `unable to lookup item 'Path' in SDK 'iphoneos'` might be fixed with [this github comment's solution](https://github.com/facebook/react-native/issues/18408#issuecomment-386696744).

### Run

Usage:

```shell
npm run <command>
```

The commands are:

```shell
start:android     # Start the app on the Android emulator with tests in watch mode
start:ios         # Start the app on iOS emulator with tests in watch mode

emulator:android  # Start the Android emulator
emulator:ios      # Start the iOS emulator

clean:android     # Clean Android build files
clean:ios         # Clean iOS build files

install-assets    # Install any changed files in the "assets/" directory
lint              # ESLint and checks code style
test              # Typechecks + Unit + integration tests
```

**NOTE**: You will need to [connect a device via USB](https://developer.android.com/studio/run/device#connect) or [create an AVD](https://developer.android.com/studio/run/managing-avds#createavd) to start the [Android Emulator](https://developer.android.com/studio/run/emulator).

**NOTE**: If having issues starting the emulator, try cleaning your build files and running `npm i`.

## Fastlane

`fastlane` is automation tool for deployments for iOS and Android. We use this to sign code and bump versions for releases. To setup `fastlane` locally you need to have [`ruby`](https://www.ruby-lang.org/en/documentation/installation/)installed.

1. Install [`Bundler`](https://bundler.io): `gem install bundler`
2. Now install `fastlane`: `bundle install`

## Workflow

The workflow of development (or Git Flow) is to [choose/create an issue](https://github.com/shabados/mobile/issues) to work on, [create a feature branch](https://github.com/shabados/.github/wiki/How-to-Contribute#branches), and [submit a pull request](https://github.com/shabados/.github/wiki/How-to-Contribute#pull-requests).

**PROTIP**: Read more about our workflow (issue tracking, branching, and pull requests) in the [How To Contribute wiki article](https://github.com/shabados/.github/wiki/How-to-Contribute).

### Coding Guidelines

Please see the [wiki](https://github.com/shabados/.github/wiki/How-to-Contribute#coding-guidelines) for Coding Guidelines ([Names](https://github.com/shabados/.github/wiki/How-to-Contribute#41-names), [Comments](https://github.com/shabados/.github/wiki/How-to-Contribute#42-comments), [Style](https://github.com/shabados/.github/wiki/How-to-Contribute#43-style), [Linting](https://github.com/shabados/.github/wiki/How-to-Contribute#44-linting), and [Commit Messages](https://github.com/shabados/.github/wiki/How-to-Contribute#45-commit-messages)).

### Scope

To be used in [commit messages](https://github.com/shabados/.github/wiki/How-to-Contribute#45-commit-messages).

Usage:

```shell
<type>(<scope>): <subject>
```

Until the project matures further, commit messages require no scopes.

<!-- ```shell
backend
frontend
``` -->

## Thank you

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to participate in this project.

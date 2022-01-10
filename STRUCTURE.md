# Project Structure

Welcome to our app's codebase! Shabad OS Mobile is a [React Native](https://reactnative.dev/) app for both iOS and Android.

This is a living document to capture and share the stucture of the app to make it easier to understand where existing code lives and where new code should go.

## Project Root

The following is a reduced, annotated listing of the project's root directory (generated with `tree -L 1 -F --dirsfirst -a`) to provide a high-level overview of purpose.

```
.
├── android/        Native Android project
├── assets/         All custom fonts & global images
├── config/         Environmnent specific configuration variables
├── docs/           Supporting documentation & corresponding assets
├── fastlane/       App-specific build & release code driven by Fastlane
├── ios/            Native iOS project
├── metadata/       Cross-platform app store metadata (e.g. app icon)
├── release-notes/  Version release notes
├── src/            Source code for app
├── test/           Shared test utilities
└── index.js        App entrypoint for React Native code
```

As a contributor, you'll likely spend the majority of your time inside the [src](#source-code) folder.

## Configuration

Dotenv configuration files are stored inside the `config` folder, with a file per environment. More information can be found inside the [Configuration README document](./config/README.md).

## Source Code

The `src` directory contains all source code and is split into the following high-level folders:

```
src
├── components/
├── helpers/
├── screens/
├── services/
├── themes/
├── types/
├── App.spec.tsx
└── App.tsx
```

### Components

Components are the fundamental visual building blocks of the app and can be composed to form more complex components.

Styles and internationalisation strings should be colocated or inlined with the corresponding components.

Tests should be colocated as `[Component].spec.tsx` file.

### Screens

Screens are the views ultimately presented to a user, comprised of templates and other components. If components used by the screen are not shareable across the app, they should be colocated with the screen.

Integration tests for screen should be colocated and written as `index.int.spec.tsx` in the screen's folder.

### Helpers

Helpers are generic, reusable, cross-cutting utilities. These should be small, lean, and composable.

### Services

Services are cross-cutting providers of specific functionality to the app. This can contain business logic, data accessors, and other providers that the app will use. Services can compose other services.

### Styles

Styles should typically be inlined with the concerned component, however in cases where shared or cross-cutting styling is required, the `themes` folder exists.

### Types

Types should typically be inlined or colocated with their concerns, however some types may be required globally (e.g. data definitions or utility types). These types should sit in the `types` folder.

## Tests

Tests should always be colocated with their concerns, and follow the [Arrange-Act-Assert](https://jefflau.dev/arrange-act-assert-how-to-test-react-components/) model. Test utilities may sit in the `test` folder.

#### Document TBC

### Unit Tests

### Integration Tests

### E2E Tests

End-to-end tests are tbd!

## Native Code

## Assets

## Building & Fastlane

## Pipelines

## Release Notes

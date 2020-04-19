# Shabad OS Mobile

## Development

### Prerequisites

- node >= 12
- npm >= 6
- [Android Studio >= 3.6 (Android)](https://developer.android.com/studio)
- [Xcode >= 11 (iOS)](https://developer.apple.com/xcode/)
- [Cocoapods (iOS)](https://cocoapods.org/)

#### Command Reference

| Command       | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| start:android | Run on Android emulator                                                   |
| start:ios     | Run on iOS emulator                                                       |
| clean:ios     | Clean iOS build files                                                     |
| clean:android | Clean android build files                                                 |
| lint          | Run ESLint and check code style                                           |
| install-assets          | Install any changed files in the `assets/` folder to iOS & Android. |
| test          | Run unit + integration tests in watcher mode                              |

Running `npm i` will automatically install any Cocoapods (on Mac).

## Releases

This project follows [Semantic Versioning](https://semver.org/) for version labelling.

Simply merge `dev` into `master`, ensuring that there is a commit with the appropriate semver bump.
This will build and publish Shabad OS of that version to GitHub releases.

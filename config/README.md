# App Configuration

This app follows the [12 factor app](https://12factor.net/config) approach to configuration where code is kept separately to configuration, centralised, and configurable through `.env.[environment]` files.

_Currently, build configuration in [`fastlane/`](../fastlane) is not configurable through these files._

## Environments

There are currently 3 environments:

- `.env.local`: _local_ development - modify this but do not include as part of PRs **unless** adding a new configuration option
- `.env.next`: next environment (prereleases)
- `.env.latest`: latest environment (production releases)

## Options

**Each environment-specific dotenv file should contain all keys marked as required.**

| Name     | Data Type | Required | Default | Description                                              |
| -------- | --------- | -------- | ------- | -------------------------------------------------------- |
| ENV_NAME | string    | No       | `local` | The name of the environmnent that the app is running in. |

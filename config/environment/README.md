# Environment config

This directory contains the configuration files for the different environments.

When an environment is not specified, `local` is default.

## Local environment

You should copy `config.example.ts` to `config.local.ts` and modify the values to your needs. This file is gitignored, so do as you wish.

Changing an environment value will require a restart of the dev server and rebuild of the app as these values are passed through Expo at build time. Close any running dev instances and run `bun run dev` again for each running simulator.

## Platform specific values

To pass through a value for an environment that is platform-specific, you can use the `selectable` function. Both values are passed through to the app, but the app will select the correct value at runtime.

## Consumption

The [configuration service](/src/services/configuration/index.ts) is responsible for pulling out these build time values, parsing them, and supplying them to the rest of the app.

Any values that have been added here should be consumed through the service first.

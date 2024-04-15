// Copy this as local.ts and customize it to your needs for local development
import { EnvironmentConfig } from './types'

export default {
  runtime: {
    postHog: {
      enabled: false,
    },
    sentry: {
      enabled: false,
    },
  },
  build: {},
} satisfies EnvironmentConfig

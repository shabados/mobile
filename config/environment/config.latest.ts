import { selectable } from './selectable'
import { EnvironmentConfig } from './types'

export default {
  runtime: {
    logger: {
      enabled: true,
      level: 'info',
    },
    sentry: {
      enabled: true,
      dsn: selectable( {
        ios: 'https://76e271c3b10342be9e5b104b1f9dc9cb@o199558.ingest.sentry.io/6267461',
        android: 'https://8be61273effa41878ef21ba877c3b19f@o199558.ingest.sentry.io/6306577',
      } ),
    },
    postHog: {
      enabled: true,
      apiKey: 'phc_CCvfliJQ5y1ShnWt9TaAz6lZj9dHmJCer8e5hj59SPc',
      host: 'https://eu.i.posthog.com',
    },
  },
  build: {
    bundleId: 'com.shabados.app',
  },
} satisfies EnvironmentConfig

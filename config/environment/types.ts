import { Selectable } from './selectable'

type WithEnabled<Config> = { enabled: false } | ( { enabled: true } & Config )

export type RuntimeConfig = {
  logger: WithEnabled<{
    level: 'debug' | 'info' | 'warn' | 'error',
  }>,
  sentry: WithEnabled<{
    dsn: Selectable<string>,
  }>,
  postHog: WithEnabled<{
    apiKey: string,
    host: string,
  }>,
}

export type BuildConfig = {
  bundleId: string,
  banner?: string,
}

export type EnvironmentConfig = {
  runtime: RuntimeConfig,
  build: BuildConfig,
}

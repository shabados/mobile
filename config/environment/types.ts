type WithEnabled<Config> = { enabled: false } | ( { enabled: true } & Config )

export type RuntimeConfig = {
  sentry: WithEnabled<{
    dsn: string,
  }>,
  postHog: WithEnabled<{
    apiKey: string,
  }>,
}

export type BuildConfig = Record<never, never>

export type EnvironmentConfig = {
  runtime: RuntimeConfig,
  build: BuildConfig,
}

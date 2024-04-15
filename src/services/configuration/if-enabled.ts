type ConditionalConfig<Config> = { enabled: boolean } & Config

const ifEnabled = <Config>( config: ConditionalConfig<Config> ) => ( config.enabled
  ? { ...config, enabled: true } as const
  : { enabled: false } as const )

export default ifEnabled

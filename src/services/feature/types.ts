export type Feature = ''

export type Attributes = {
  [key in string]: any
}

export type FeatureFlagClient = {
  isEnabled: ( key: string, attributes?: Attributes ) => boolean,
  getStatus: <Status extends string>( key: Feature, attributes?: Attributes ) => Status,
  setDefaultAttributes: ( attributes: Attributes ) => void,
  onUpdate: ( callback: () => void ) => void,
  onReady: ( callback: () => void ) => void,
  isReady: () => boolean,
}

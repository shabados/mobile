export type FeatureFlagClient<Features, Attributes> = {
  isEnabled: ( key: keyof Features, attributes?: Attributes ) => boolean,
  getStatus: <Key extends keyof Features>( key: Key, attributes?: Attributes ) => Features[Key],
  onUpdate: ( callback: () => void ) => void,
  onReady: ( callback: () => void ) => void,
  isReady: () => boolean,
}

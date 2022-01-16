import UseFeatureFlagFactory from './hooks'
import splitAdapter from './split'
import { FeatureFlagClient } from './types'

export const {
  useFeatureEnabled,
  useFeatureStatus,
} = UseFeatureFlagFactory( splitAdapter )

type Adapter = typeof splitAdapter

export type Features = Adapter extends FeatureFlagClient<infer Features, never> ? Features : never
export type Attributes = Adapter extends FeatureFlagClient<Features, infer Attributes>
  ? Attributes
  : never

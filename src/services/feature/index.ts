import UseFeatureFlagFactory from './hooks'
import splitAdapter from './split'

export const {
  useFeatureEnabled,
  useFeatureStatus,
} = UseFeatureFlagFactory( splitAdapter )

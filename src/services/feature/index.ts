import UseFeatureFlagFactory from './hooks'
import splitAdapter from './split.adapter'

export const {
  useFeatureEnabled,
  useFeatureStatus,
} = UseFeatureFlagFactory( splitAdapter )

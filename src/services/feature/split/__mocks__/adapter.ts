import { FeatureFlagClient } from '../../types'
import { getDefaultStatus } from '../defaults'
import { OffTreatment, SplitAttributes, SplitFeatures } from '../types'

// Returns default feature value
const mockAdapterFactory = (): FeatureFlagClient<SplitFeatures, SplitAttributes> => {
  const getStatus = <Key extends keyof SplitFeatures>(
    key: Key,
    _attributes?: SplitAttributes,
  ) => getDefaultStatus( key )

  const isEnabled = (
    key: keyof SplitFeatures,
    attributes?: SplitAttributes,
  ) => getStatus( key, attributes ) as OffTreatment !== 'off'

  return {
    getStatus,
    isEnabled,
    onUpdate: () => {},
    onReady: () => {},
    isReady: () => true,
  }
}

export default mockAdapterFactory

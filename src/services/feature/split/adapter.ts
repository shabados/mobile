import { SplitFactory } from '@splitsoftware/splitio-react-native'
import { Attributes } from '@splitsoftware/splitio-react-native/types/splitio'
import { getUniqueId } from 'react-native-device-info'

import { mutableValue } from '../../../helpers/mutable-value'
import configuration from '../../configuration'
import { FeatureFlagClient } from '../types'
import { getDefaultAttributes, getDefaultStatus } from './defaults'
import { ControlTreatment, OffTreatment, SplitAttributes, SplitFeatures } from './types'

const splitAdapterFactory = (): FeatureFlagClient<SplitFeatures, SplitAttributes> => {
  const client = SplitFactory( {
    core: {
      authorizationKey: configuration.split.apiKey,
      key: getUniqueId(),
    },
  } ).client()

  const { get: isReady, set: setReady } = mutableValue( false )
  client.once( client.Event.SDK_READY, () => setReady( true ) )

  const onUpdate = ( callback: () => void ) => client.on( client.Event.SDK_UPDATE, callback )
  const onReady = ( callback: () => void ) => client.once( client.Event.SDK_READY, callback )

  const getStatus = <Key extends keyof SplitFeatures>( key: Key, attributes?: Attributes ) => {
    const status = client.getTreatment(
      key,
      { ...getDefaultAttributes(), ...attributes },
    ) as SplitFeatures[Key] | ControlTreatment

    return status === 'control'
      ? getDefaultStatus( key )
      : status
  }

  const isEnabled = (
    key: keyof SplitFeatures,
    attributes?: Attributes,
  ) => getStatus( key, attributes ) as OffTreatment !== 'off'

  return {
    getStatus,
    isEnabled,
    onUpdate,
    onReady,
    isReady,
  }
}

export default splitAdapterFactory

import { SplitFactory } from '@splitsoftware/splitio-react-native'
import { Attributes } from '@splitsoftware/splitio-react-native/types/splitio'
import { getUniqueId } from 'react-native-device-info'

import mutableValue from '../../helpers/mutable-value'
import configuration from '../configuration'
import { FeatureFlagClient } from './types'

type DefaultTreatment = 'on' | 'off'

const splitAdapterFactory = (): FeatureFlagClient => {
  const client = SplitFactory( {
    core: {
      authorizationKey: configuration.split.apiKey,
      key: getUniqueId(),
    },
  } ).client()

  const { get: isReady, set: setReady } = mutableValue( false )

  const onUpdate = ( callback: () => void ) => client.on( client.Event.SDK_UPDATE, callback )
  const onReady = ( callback: () => void ) => client.once( client.Event.SDK_READY, () => {
    setReady( true )
    callback()
  } )

  const { get: getDefaultAttributes, set: setDefaultAttributes } = mutableValue<Attributes>( {} )

  const getStatus = <Status extends string>(
    key: string,
    attributes?: Attributes,
  ) => client.getTreatment( key, { ...getDefaultAttributes(), ...attributes } ) as Status

  const isEnabled = (
    ...params: Parameters<typeof getStatus>
  ) => getStatus<DefaultTreatment>( ...params ) !== 'off'

  return {
    getStatus,
    isEnabled,
    setDefaultAttributes,
    onUpdate,
    onReady,
    isReady,
  }
}

export default splitAdapterFactory()

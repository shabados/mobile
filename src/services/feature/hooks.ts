import { useEffect, useState } from 'react'

import { Attributes, Feature, FeatureFlagClient } from './types'

const UseFeatureFlagFactory = ( client: FeatureFlagClient ) => {
  const useClientReady = () => {
    const [ isReady, setReady ] = useState( client.isReady() )

    useEffect( () => { client.onReady( () => setReady( true ) ) }, [] )

    return isReady
  }

  const useFeatureClientFn = <Value>( getter: () => Value ) => {
    const [ value, setValue ] = useState( getter() )

    const isReady = useClientReady()

    useEffect( () => setValue( getter() ), [ isReady, getter ] )

    return value
  }

  const useFeatureStatus = <Status extends string>(
    key: Feature,
    attributes?: Attributes,
  ) => useFeatureClientFn( () => client.getStatus<Status>( key, attributes ) )

  const useFeatureEnabled = (
    key: Feature,
    attributes?: Attributes,
  ) => useFeatureClientFn( () => client.isEnabled( key, attributes ) )

  return { useFeatureStatus, useFeatureEnabled }
}

export default UseFeatureFlagFactory

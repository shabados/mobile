import { useEffect, useState } from 'react'

import { FeatureFlagClient } from './types'

const UseFeatureFlagFactory = <Features, Attributes>(
  client: FeatureFlagClient<Features, Attributes>,
) => {
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

  const useFeatureStatus = <Key extends keyof Features>(
    key: Key,
    attributes?: Attributes,
  ): Features[Key] => useFeatureClientFn( () => client.getStatus( key, attributes ) )

  const useFeatureEnabled = (
    key: keyof Features,
    attributes?: Attributes,
  ) => useFeatureClientFn( () => client.isEnabled( key, attributes ) )

  return { useFeatureStatus, useFeatureEnabled }
}

export default UseFeatureFlagFactory

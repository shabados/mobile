import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'

import { mmkv } from '~/services/kv-storage'

const key = 'last-content-params'

export const getLastContentPath = () => {
  const params = mmkv.getJSON( key )

  return params
    ? { pathname: '/content/[type]/[id]', params } as const
    : undefined
}

export const useSaveContentPath = () => {
  const params = useLocalSearchParams<{ lineId?: string }>()

  useEffect( () => {
    mmkv.set( key, params )
  }, [ params ] )
}

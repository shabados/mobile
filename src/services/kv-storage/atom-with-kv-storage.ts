import { atom } from 'jotai'

import { createLogger } from '~/services/logger'

import storage from './mmkv'

const log = createLogger( 'kv-storage' )

//! Add some reactiveness here with useMMKV hook or addOnCHangeListener similar
const atomWithKvStorage = <Data extends object | undefined>(
  key: string,
  initialValue: Data,
) => {
  const previousData = ( () => {
    log.info( `Loading data for key "${key}"` )

    try {
      const data = storage.getJSON<Data>( key )

      log.info( `Loaded data for key "${key}"`, { data } )
      return data
    } catch {
      log.error( `Failed to load data for key "${key}"` )
      return undefined
    }
  } )()

  const baseAtom = atom( previousData )

  const storageAtom = atom(
    ( get ) => get( baseAtom ) ?? initialValue,
    ( _, set, value: Data ) => {
      set( baseAtom, value )

      if ( value === undefined ) storage.delete( key )
      else storage.set( key, value )
    }
  )

  storageAtom.onMount = ( set ) => {
    if ( !!previousData || !initialValue ) return

    log.info( `Initializing key "${key}"`, { initialValue } )
    set( initialValue )
  }

  return storageAtom
}

export default atomWithKvStorage

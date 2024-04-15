import { atom } from 'jotai'

import { createLogger } from '~/services/logger'

import storage from './mmkv'

const log = createLogger( 'kv-storage' )

//! Add some reactiveness here with useMMKV hook or addOnCHangeListener similar
const atomWithKvStorage = <Data extends object>(
  key: string,
  initialValue: Data,
) => {
  const previousData = storage.getJSON<Data>( key )
  log.info( `Loaded data for key "${key}"`, { previousData } )

  const baseAtom = atom( previousData )

  const storageAtom = atom(
    ( get ) => get( baseAtom ),
    ( _, set, value: Data ) => {
      set( baseAtom, value )
      storage.set( key, value )
    }
  )

  storageAtom.onMount = ( set ) => {
    if ( storage.contains( key ) ) return

    log.info( `Initializing key "${key}"`, { initialValue } )
    set( initialValue )
  }

  return storageAtom
}

export default atomWithKvStorage

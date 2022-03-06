import { atom } from 'jotai'

import storage from './mmkv'

const atomWithMMKVStorage = <Data extends object>(
  key: string,
  initialValue: Data,
) => {
  const previousData = storage.getJSON<Data>( key )
  console.log( `[mmkv-storage] Loaded data for key "${key}": ${JSON.stringify( previousData )}` )

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

    console.log( `[mmkv-storage] Initializing key "${key}": ${JSON.stringify( initialValue )}` )
    set( initialValue )
  }

  return storageAtom
}

export default atomWithMMKVStorage

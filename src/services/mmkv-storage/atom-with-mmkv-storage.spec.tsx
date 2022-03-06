import { render } from '@testing-library/react-native'
import { Atom, useAtom } from 'jotai'
import { Text } from 'react-native'

import storage from '.'
import atomWithMMKVStorage from './atom-with-mmkv-storage'

const defaultValue = { value1: 'settings value', darkMode: true }

const setup = <Data extends object | null,>( atom: Atom<Data> ) => {
  const Component = () => {
    const [ value ] = useAtom( atom )

    return <Text>{JSON.stringify( value )}</Text>
  }

  return render( <Component /> )
}

describe( 'atomWithMMKVStorage(key, initialValue)', () => {
  describe( 'given the key does not exist yet', () => {
    it( 'should save the initial value into MMKV storage', () => {
      const key = 'key-name-1'
      const atom = atomWithMMKVStorage( key, defaultValue )

      setup( atom )

      expect( storage.getString( key ) ).toEqual( JSON.stringify( defaultValue ) )
    } )

    it( 'should set the atom value to initial value', () => {
      const atom = atomWithMMKVStorage( 'another-key', defaultValue )

      const { queryByText } = setup( atom )

      expect( queryByText( JSON.stringify( defaultValue ) ) ).toBeTruthy()
    } )
  } )

  describe( 'given the key does exist', () => {
    it( 'should return the value from MMKV storage', () => {
      const key = 'key-2'
      const value = JSON.stringify( { test2: 'hey', value: 5, name: 'H' } )
      storage.set( key, value )

      const { queryByText } = setup( atomWithMMKVStorage( key, defaultValue ) )

      expect( queryByText( value ) ).toBeTruthy()
    } )
  } )
} )

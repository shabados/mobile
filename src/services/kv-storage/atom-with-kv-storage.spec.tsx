import { render, screen } from '@testing-library/react-native'
import { Atom, useAtom } from 'jotai'
import { Text } from 'react-native'

import atomWithKvStorage from './atom-with-kv-storage'
import mmkv from './mmkv'

const defaultValue = { value1: 'settings value', darkMode: true }

const setup = ( atom: Atom<unknown> ) => {
  const Component = () => {
    const [ value ] = useAtom( atom )

    return <Text>{JSON.stringify( value )}</Text>
  }

  return render( <Component /> )
}

describe( 'atomWithMMKVStorage(key, initialValue)', () => {
  describe( 'given the key does not exist yet', () => {
    describe( 'given an initial value', () => {
      it( 'should save the initial value into MMKV storage', () => {
        const key = 'key-name-1'
        const atom = atomWithKvStorage( key, defaultValue )

        setup( atom )

        expect( mmkv.getString( key ) ).toEqual( JSON.stringify( defaultValue ) )
      } )

      it( 'should set the atom value to initial value', () => {
        const atom = atomWithKvStorage( 'another-key', defaultValue )

        setup( atom )

        expect( screen.queryByText( JSON.stringify( defaultValue ) ) ).toBeTruthy()
      } )
    } )

    describe( 'given no initial value', () => {
      it( 'should not save anything to MMKV storage', () => {
        const key = 'key-name-2'
        const atom = atomWithKvStorage( key, undefined )

        setup( atom )

        expect( mmkv.getString( key ) ).toBeUndefined()
      } )
    } )
  } )

  describe( 'given the key does exist', () => {
    it( 'should return the value from MMKV storage', () => {
      const key = 'key-2'
      const value = JSON.stringify( { test2: 'hey', value: 5, name: 'H' } )
      mmkv.set( key, value )

      setup( atomWithKvStorage( key, defaultValue ) )

      expect( screen.queryByText( value ) ).toBeTruthy()
    } )
  } )
} )

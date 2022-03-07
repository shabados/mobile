import { fireEvent, render } from '@testing-library/react-native'
import { Atom, useAtom } from 'jotai'
import { Text, View } from 'react-native'

import Button from '../../components/Button'
import storage from '../mmkv-storage'
import atomWithSetting, { SettingSchema } from './atom-with-setting'

const saveSetting = <Data,>( key: string, data: SettingSchema<Data> ) => storage.set( `setting.${key}`, data )

const setup = ( atom: Atom<number | string | boolean | undefined> ) => {
  const Component = () => {
    const [
      value,
      setValue,
    ] = useAtom( atom ) as [ number | string | boolean, ( update: any ) => void ]

    return (
      <View>
        <Text>{value?.toString()}</Text>
        <Button onPress={() => setValue( value )}>Save</Button>
      </View>
    )
  }

  return render( <Component /> )
}

describe( 'atomWithSetting(key, initialValue, metadata)', () => {
  describe( 'when the setting does not exist', () => {
    it( 'should store the supplied initial value', () => {
      const key = 'non-existent-setting'
      const atom = atomWithSetting( key, false )

      const { queryByText } = setup( atom )

      expect( queryByText( 'false' ) ).toBeTruthy()
    } )
  } )

  describe( 'when the setting exists', () => {
    it( 'should return the setting value', () => {
      const key = 'existent-setting-1'
      const value = 200
      saveSetting( key, { updatedAt: null, value, version: 1 } )

      const atom = atomWithSetting( key, 1 )
      const { queryByText } = setup( atom )

      expect( queryByText( value.toString() ) ).toBeTruthy()
    } )

    it( 'should return the last updated date', () => {
      const key = 'existent-setting-2'
      const updatedAt = new Date().toJSON()
      saveSetting( key, { updatedAt, value: 111, version: 1 } )

      const atom = atomWithSetting( key, 1 )
      setup( atom )

      const result = storage.getJSON<SettingSchema<number>>( `setting.${key}` )!
      expect( result.updatedAt ).toEqual( updatedAt )
    } )
  } )

  describe( 'when the setting has been updated', () => {
    it( 'should set updatedAt to the current date', () => {
      const key = 'existent-setting-4'
      const earlier = Date.now()
      const atom = atomWithSetting( key, 1 )
      saveSetting( key, { updatedAt: null, value: 111, version: 1 } )

      const { getByText } = setup( atom )
      fireEvent.press( getByText( 'Save' ) )

      const result = storage.getJSON<SettingSchema<number>>( `setting.${key}` )!
      expect( new Date( result.updatedAt! ).getTime() ).toBeGreaterThan( earlier )
    } )
  } )
} )

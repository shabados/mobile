import Split from '@splitsoftware/splitio-react-native'

import nextTick from '../../../../test/utils/next-tick'
import adapterFactory from './adapter'
import * as defaults from './defaults'

const featureStatuses = {
  test_key: 'real_value',
  another_key: 'another_real_value',
  some_key: 'on',
  off_feature: 'off',
}

const featureDefaults = {
  test_key: 'default_value',
  another_key: 'some default',
  some_key: 'off',
  off_feature: 'on',
}

const setDefaults = ( overrides: { [key in string]: string } ) => jest
  .spyOn( defaults, 'getDefaultStatus' )
  .mockImplementation( ( key: string ) => overrides[ key ] )

jest.unmock( './adapter' )
jest.mock( '@splitsoftware/splitio-react-native', () => {
  const splitActual: typeof Split = jest.requireActual( '@splitsoftware/splitio-react-native' )

  return {
    ...splitActual,
    SplitFactory: () => splitActual.SplitFactory( {
      core: { authorizationKey: 'localhost', key: 'some_key' },
      sync: { localhostMode: splitActual.LocalhostFromObject() },
      // Mock splits and treatments "online" values
      features: featureStatuses,
    } ),
  }
} )

type RelaxedGetter = ( key: keyof typeof featureStatuses ) => string

const setup = () => {
  setDefaults( featureDefaults )

  const adapter = adapterFactory()

  return {
    ...adapter,
    getStatus: adapter.getStatus as RelaxedGetter,
    isEnabled: adapter.isEnabled as unknown as RelaxedGetter,
  }
}

describe( 'Feature service split adapter', () => {
  describe( 'when the SDK is not ready', () => {
    describe( 'getStatus', () => {
      it( 'should return the default value for a feature key', () => {
        const adapter = setup()

        const status = adapter.getStatus( 'test_key' )

        expect( status ).toEqual( featureDefaults.test_key )
      } )
    } )

    describe( 'isEnabled(key)', () => {
      it( 'should return true for any default status that is not off', () => {
        const adapter = setup()

        const isEnabled = adapter.isEnabled( 'test_key' )

        expect( isEnabled ).toBeTruthy()
      } )

      it( 'should return false for any default status that is off', () => {
        const adapter = setup()

        const isEnabled = adapter.isEnabled( 'some_key' )

        expect( isEnabled ).toBeFalsy()
      } )
    } )
  } )

  describe( 'when the SDK is ready', () => {
    it( 'should fire onReady()', async () => {
      const onReady = jest.fn()
      const adapter = setup()

      adapter.onReady( onReady )
      await nextTick()

      expect( onReady ).toHaveBeenCalledTimes( 1 )
      expect( adapter.isReady() ).toBeTruthy()
    } )

    describe( 'getStatus(key)', () => {
      it( 'should return the true value for a feature key', async () => {
        const adapter = setup()
        await nextTick()

        const status = adapter.getStatus( 'test_key' )

        expect( status ).toEqual( featureStatuses.test_key )
      } )
    } )

    describe( 'isEnabled(key)', () => {
      it( 'should return true for any status that is not off', async () => {
        const adapter = setup()
        await nextTick()

        const isEnabled = adapter.isEnabled( 'test_key' )

        expect( isEnabled ).toBeTruthy()
      } )

      it( 'should return false for any status that is off', async () => {
        const adapter = setup()
        await nextTick()

        const isEnabled = adapter.isEnabled( 'off_feature' )

        expect( isEnabled ).toBeFalsy()
      } )
    } )
  } )
} )

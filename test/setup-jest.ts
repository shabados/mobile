// Mock out native animations
import 'react-native-gesture-handler/jestSetup'

import Constants from 'expo-constants'
import * as expoLocalization from 'expo-localization'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

import getEnvironmentConfig from '~/../config/environment'
import * as i18n from '~/services/i18n'

jest.mock( '~/services/logger', () => {
  const logger = {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  }

  return {
    createLogger: () => logger,
    default: logger,
  }
} )

require( '@shopify/flash-list/jestSetup' )

process.env.ENV = 'example'

jest.spyOn( expoLocalization, 'getLocales' ).mockReturnValue( [ {
  languageCode: 'en',
  currencyCode: 'USD',
  currencySymbol: '$',
  decimalSeparator: '.',
  digitGroupingSeparator: ',',
  languageTag: 'en-US',
  measurementSystem: 'us',
  regionCode: 'US',
  temperatureUnit: 'fahrenheit',
  textDirection: 'ltr',
} ] )

Constants.expoConfig!.extra = getEnvironmentConfig().runtime

i18n.initialize()

jest.mock( 'expo-font' )
jest.mock( 'expo-asset' )

jest.mock( 'react-native-safe-area-context', () => mockSafeAreaContext )

jest.mock( '@gorhom/bottom-sheet', () => ( {
  __esModule: true,
  ...require( '@gorhom/bottom-sheet/mock' ),
} ) )

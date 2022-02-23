// Mock out native animations
import 'react-native-gesture-handler/jestSetup'

import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock'
import mockRNLocalize from 'react-native-localize/mock'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock( 'react-native-reanimated', () => {
  const Reanimated = require( 'react-native-reanimated/mock' )

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}
  return Reanimated
} )

// Silence the warning:
// Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock( 'react-native/Libraries/Animated/NativeAnimatedHelper' )

jest.mock( 'react-native/Libraries/EventEmitter/NativeEventEmitter' )

jest.mock( 'react-native-device-info', () => mockRNDeviceInfo )

jest.mock( '../src/services/feature/split/adapter' )

jest.mock( 'react-native-localize', () => mockRNLocalize )

jest.mock( 'react-native-safe-area-context', () => mockSafeAreaContext )

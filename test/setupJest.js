// Mock out native animations
jest.mock(
  'react-native-reanimated',
  () => jest.requireActual( 'react-native-reanimated/mock' ),
)

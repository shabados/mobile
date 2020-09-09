// Mock out native animations
jest.mock( 'react-native-reanimated', () => jest.requireActual( 'react-native-reanimated/mock' ) )

// Use LokiJS DB adapter since can't use native SQLite adapter
jest.mock( '@nozbe/watermelondb/adapters/sqlite', () => jest.requireActual( '@nozbe/watermelondb/adapters/lokijs' ) )

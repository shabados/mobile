const expoPreset = require( 'jest-expo/jest-preset' )

const whitelistedModules = [
  '@?react-native',
  '@?expo',
  '@react-navigation',
  'ky',
]

const config = {
  ...expoPreset,
  collectCoverage: true,
  coveragePathIgnorePatterns: [ '<rootDir>/(?!src)' ],
  watchPathIgnorePatterns: [ '<rootDir>/(?!src|test)' ],
  transformIgnorePatterns: [ `node_modules/(?!${whitelistedModules.join( '|' )})` ],
  setupFiles: [
    ...expoPreset.setupFiles,
    '<rootDir>/test/setup-jest.ts',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/after-env.ts',
  ],
  resetMocks: true,
}

module.exports = config

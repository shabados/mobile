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
  globalSetup: '<rootDir>/test/setup-global.ts',
  setupFiles: [
    ...expoPreset.setupFiles,
    '<rootDir>/test/setup.ts',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup-after-env.ts',
  ],
  resetMocks: true,
}

module.exports = config

const { defaults: tsjPreset } = require( 'ts-jest/presets' )
// Unpack preset to deal with https://github.com/callstack/react-native-testing-library/issues/379
const reactNativePreset = require( 'react-native/jest-preset' )

// List of modules that do not transpile their code
const whitelistedModules = [ 'react-native' ]

module.exports = {
  ...reactNativePreset,
  ...tsjPreset,
  collectCoverage: true,
  transform: {
    ...reactNativePreset.transform,
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  coveragePathIgnorePatterns: [ '<rootDir>/(?!src)' ],
  watchPathIgnorePatterns: [ '<rootDir>/(?!src|test)' ],
  transformIgnorePatterns: [ `node_modules/(?!${whitelistedModules.join( '|' )})` ],
  setupFiles: [
    '<rootDir>/test/save-promise.js',
    ...reactNativePreset.setupFiles,
    '<rootDir>/test/restore-promise.js',
    'react-native-gesture-handler/jestSetup.js',
    '<rootDir>/test/setup-jest.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/test/after-env.js',
  ],
  resetMocks: true,
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  // https://github.com/react-navigation/react-navigation/issues/7950#issuecomment-615220412
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
}

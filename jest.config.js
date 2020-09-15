const { defaults: tsjPreset } = require( 'ts-jest/presets' )

// List of modules that do not transpile their code
const whitelistedModules = [
  'react-native',
]

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  collectCoverage: true,
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  watchPathIgnorePatterns: [
    '<rootDir>/(?!src|test)',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!${whitelistedModules.join( '|' )})`,
  ],
  setupFiles: [
    'react-native-gesture-handler/jestSetup.js',
    '<rootDir>/test/setupJest.js',
  ],
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
}

const { defaults: tsjPreset } = require( 'ts-jest/presets' )

// List of modules that do not transpile their code
const whitelistedModules = [ 'react-native' ]

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
  coveragePathIgnorePatterns: [ '<rootDir>/(?!src)' ],
  watchPathIgnorePatterns: [ '<rootDir>/(?!src|test)' ],
  transformIgnorePatterns: [ `node_modules/(?!${whitelistedModules.join( '|' )})` ],
  setupFiles: [
    'react-native-gesture-handler/jestSetup.js',
    '<rootDir>/test/setupJest.js',
  ],
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  // https://github.com/react-navigation/react-navigation/issues/7950#issuecomment-615220412
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
}

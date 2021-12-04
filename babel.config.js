module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
  env: {
    production: {
      plugins: [ 'transform-remove-console' ],
    },
    test: {
      plugins: [ 'transform-remove-console' ],
    },
  },
}

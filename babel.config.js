module.exports = {
  presets: [
    [ 'module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true } ],
  ],
  plugins: [
    // metro-react-native-babel-preset includes this plugin, but with runtime: 'classic' by default
    // https://github.com/facebook/metro/issues/646#issuecomment-799174473
    [ '@babel/plugin-transform-react-jsx', { runtime: 'automatic' } ],
  ],
  env: {
    production: {
      plugins: [ 'transform-remove-console' ],
    },
  },
}

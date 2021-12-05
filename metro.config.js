module.exports = {
  transformer: {
    getTransformOptions: async () => ( {
      transform: {
        // Removes necessity for React imports - https://stackoverflow.com/a/68143152
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    } ),
  },
}

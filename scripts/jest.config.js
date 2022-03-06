module.exports = {
  ...require( '../jest.config' ),
  testMatch: [
    '<rootDir>/scripts/*.ts',
  ],
  rootDir: '..',
  collectCoverage: false,
  reporters: [],
}

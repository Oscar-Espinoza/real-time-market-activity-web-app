module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};

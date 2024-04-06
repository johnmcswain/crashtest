export default {
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}

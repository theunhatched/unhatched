module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['pages/**/*.js', 'components/**/*.js'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'setup-tests.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

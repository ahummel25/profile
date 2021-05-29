module.exports = {
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: null,
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/__mocks__/setup-mocks.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  verbose: true
};

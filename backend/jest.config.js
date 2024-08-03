module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  modulePaths: ['./src/'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
};

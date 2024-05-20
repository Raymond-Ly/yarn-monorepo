module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'cobertura'],
    coveragePathIgnorePatterns: ['index.ts'],
    testPathIgnorePatterns: ['/dist/'],
    transform: {
      '.(ts|tsx)': 'ts-jest',
    },
  };
  
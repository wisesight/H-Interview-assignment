module.exports = {
    preset: 'ts-jest',
    reporters: ['default'],
    testMatch: [
      '*.test.ts',
      '**/*.test.ts',
    ],
    verbose: true,
    detectOpenHandles: true,
  };
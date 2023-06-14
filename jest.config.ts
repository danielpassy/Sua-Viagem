import type { Config } from 'jest';

const config: Config = {
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  watchPathIgnorePatterns: ['globalConfig'],
  // Prevent Jest from resetting modules used for mocking between each test
  maxWorkers: 1
};

export default config;

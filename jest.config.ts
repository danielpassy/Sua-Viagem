import type { Config } from 'jest';

const config: Config = {
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  watchPathIgnorePatterns: ['globalConfig']
};

export default config;

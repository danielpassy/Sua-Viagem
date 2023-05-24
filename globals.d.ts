// TS complains about globalThis in testing. This is a workaround.

/* eslint-disable no-var */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface globalThis {}
declare namespace globalThis {
  // eslint-disable-next-line no-var
  var __MONGO_URI__: string;
  var __MONGO_DB_NAME__: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface global {}
declare global {
  var __MONGO_URI__: string;
  var __MONGO_DB_NAME__: string;
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: 'test' | 'development' | ' production';
      PORT?: string;
    }
  }
}

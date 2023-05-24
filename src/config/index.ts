export default {
  dbUri: process.env.DB_URI || 'mongodb://root:example@localhost:27017/main?authSource=admin',
  port: 27017,
  saltWorkFactor: 10,
  PORT: 8000,
  JWT_KEY: process.env.JWT_KEY || 'foda-se1235qskdjaslkdjaslkdj12093',
  ENVIRONMENT: process.env.ENVIRONMENT || 'development'
};

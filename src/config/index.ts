export default {
  dbUri:
    process.env.DB_URI ||
    'mongodb://root:example@localhost:27017/main?authSource=admin',
  port: 27017,
  saltWorkFactor: 10,
  PORT: 8000
};

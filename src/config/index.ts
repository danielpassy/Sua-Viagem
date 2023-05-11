export default {
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/express-typescript',
  port: 27017,
  saltWorkFactor: 10
}
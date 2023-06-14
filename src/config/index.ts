const dbUri = process.env.DB_URI || 'mongodb://root:example@localhost:27017/main?authSource=admin'
const port = 27017
const saltWorkFactor = 10
const PORT = 8000
const JWT_TTL = (process.env.JWT_TTL || 60 * 60 * 24 * 7) as number // 7 days 
const JWT_KEY = process.env.JWT_KEY || 'foda-se1235qskdjaslkdjaslkdj12093'
const ENVIRONMENT = process.env.ENVIRONMENT || 'development'
const BASE_URL = `http://localhost:${PORT}`
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

export default {
  dbUri,
  port,
  saltWorkFactor,
  PORT,
  JWT_KEY,
  JWT_TTL,
  ENVIRONMENT,
  BASE_URL,
  FRONTEND_URL,
};

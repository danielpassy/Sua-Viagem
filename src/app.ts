import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import db from './libs/db';
import logger from './libs/logger';

const port = process.env.PORT;


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(port, async () => {
  logger.info(`Server running at http://localhost:${port}`);
  await db.connect();
})
export default app
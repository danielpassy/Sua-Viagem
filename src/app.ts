import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import db from './libs/db';
import logger from './libs/logger';
import AuthRouter from './routes/auth';
import HealthRouter from './routes/health_check';
import config from './config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', AuthRouter);
app.use('', HealthRouter);

app.listen(8000, async () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);
  await db.connect();
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
  db.disconnect();
  process.exit(0);
}

export default app;

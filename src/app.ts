import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './auth/routes/auth';
import HealthRouter from './auth/routes/health_check';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', AuthRouter);
app.use('', HealthRouter);

export default app;

import dotenv from 'dotenv';
// Dotenv needs to set env variable before module initialization
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './auth/routes/auth';
import passport from 'passport';
import HealthRouter from '@/health_check/routes/healthcheck';
import cors from 'cors';
import config from '@/config';

const app = express();

const corsOptions = {
  origin: config.BASE_URL,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', AuthRouter);
app.use('', HealthRouter);
app.use(passport.initialize());
app.use(passport.session());
export default app;

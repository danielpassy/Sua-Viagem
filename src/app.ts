import dotenv from 'dotenv';
// Dotenv needs to set env variable before module initialization
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './auth/routes/auth';
import HealthRouter from './auth/routes/healthcheck';
import passport from 'passport';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', AuthRouter);
app.use('', HealthRouter);
app.use(passport.initialize());
app.use(passport.session());

export default app;

import dotenv from 'dotenv';
// Dotenv needs to set env variable before module initialization
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './auth/routes/auth';
import HealthRouter from '@/health_check/routes/healthcheck';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
}



app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/auth/', AuthRouter);
app.use('/api/', HealthRouter);
// app.use(passport.initialize());
// app.use(passport.session());
export default app;

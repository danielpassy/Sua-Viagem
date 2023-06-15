import dotenv from 'dotenv';
// Dotenv needs to set env variable before module initialization
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import ErrorHandlerMiddleware from '@/middlewares/error-handler.middleware';
import TripsRouter from '@/features/trips/routes/trips';
import express from 'express';
import HealthRouter from '@/features/health_check/routes/healthcheck';
import AuthRouter from '@/features/auth/routes/auth';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/auth/', AuthRouter);
app.use('/api/trips/', TripsRouter);
app.use('/api/', HealthRouter);
// app.use(passport.initialize());
// app.use(passport.session());
app.use(ErrorHandlerMiddleware);
export default app;

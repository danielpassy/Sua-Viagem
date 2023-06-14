import { healthCheck } from '@/health_check/controllers/healthcheck.controller';
import express from 'express';

const HealthRouter = express.Router();

HealthRouter.get('/healthcheck', healthCheck);

export default HealthRouter;

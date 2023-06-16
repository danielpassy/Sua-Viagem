import { healthCheck } from '@/features/health_check/controllers/healthcheck.controller';
import express from 'express';

const HealthRouter = express.Router();

HealthRouter.get('/healthcheck', healthCheck);

export default HealthRouter;

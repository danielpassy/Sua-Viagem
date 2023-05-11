import register from '@/controllers/auth';
import validateBody from '@/middlewares/validate_middleware';
import express from 'express';
import { RegisterDTO } from './auth/dto';

const AuthRouter = express.Router();

AuthRouter.post('/signup', validateBody(RegisterDTO), register);

export default AuthRouter;

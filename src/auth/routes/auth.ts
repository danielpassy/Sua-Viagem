import register from '@/controllers/auth';
import { RegisterDTO } from '@/controllers/auth/auth.dto';
import validateBody from '@/middlewares/validate_middleware';
import express from 'express';

const AuthRouter = express.Router();

AuthRouter.post('/signup', validateBody(RegisterDTO), register);

export default AuthRouter;

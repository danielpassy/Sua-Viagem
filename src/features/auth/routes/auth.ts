import { register, login } from '@/features/auth/controllers/auth/auth';
import { RegisterDTO, LoginDTO } from '@/features/auth/controllers/auth/auth.dto';
import validateBody from '@/middlewares/validate.middleware';
import express from 'express';

const AuthRouter = express.Router();

AuthRouter.post('/register', validateBody(RegisterDTO), register);
AuthRouter.post('/login', validateBody(LoginDTO), login);

export default AuthRouter;

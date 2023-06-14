import { login, register } from '@/auth/controllers/auth/auth';
import { LoginDTO, RegisterDTO } from '@/auth/controllers/auth/auth.dto';
import validateBody from '@/middlewares/validate.middleware';
import express from 'express';

const AuthRouter = express.Router();

AuthRouter.post('/register', validateBody(RegisterDTO), register);
AuthRouter.post('/login', validateBody(LoginDTO), login);

export default AuthRouter;

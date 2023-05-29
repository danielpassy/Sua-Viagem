import { Request, Response } from 'express';
import { LoginDTO, RegisterDTO } from './auth.dto';
import authService from '@/auth/services/auth';
import { UserDocument } from '@/models';
import config from '@/config';

export const register = async (req: Request<object, object, RegisterDTO>, res: Response) => {
  try {
    const user = await authService.register(req.body);
    return res.status(201).json(serializeUser(user));
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};


const serializeUser = (user: UserDocument) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}

export const login = async (req: Request<object, {}, LoginDTO>, res: Response) => {
  const token = await authService.login(req.body);
  return res.cookie('token', token, {
    httpOnly: true,
    maxAge: config.JWT_TTL
  }).send('sent');
};

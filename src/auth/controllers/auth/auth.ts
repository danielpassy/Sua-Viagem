import { Request, Response } from 'express';
import { LoginDTO, RegisterDTO } from './auth.dto';
import authService from '@/auth/services/auth';
import { UserDocument } from '@/models';
import config from '@/config';
import { ThrowError } from '@/libs/error-helper';

export const register = async (req: Request<{}, {}, RegisterDTO>, res: Response) => {
  try {
    const user = await authService.register(req.body);
    return res.status(201).json(serializeUser(user));
  } catch (error: any) {
    return res.status(403).json({ message: error.message });
  }
};


const serializeUser = (user: UserDocument) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}

export const login = async (req: Request<object, {}, LoginDTO>, res: Response, next: any) => {
  try {
    const token = await authService.login(req.body);
    return res.cookie('token', token, {
      httpOnly: true,
      maxAge: config.JWT_TTL
    }).send('sent');
  } catch (error: any) {
    ThrowError(next, error.message, 403);
  }
};

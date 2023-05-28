import { Request, Response } from 'express';
import { LoginDTO, RegisterDTO } from './auth.dto';
import jwt from 'jsonwebtoken';
import authService from '@/auth/services/auth';

export const register = (req: Request<object, object, RegisterDTO>, res: Response) => {
  try {
    const user = authService.register(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = (req: Request<object, {}, LoginDTO>, res: Response) => {
  // jwt.sign(payload, secretOrPrivateKey, { expiresIn: '1h' });
  console.log('tried to login')
  return res.status(200)
};

import AuthService from '@/services/auth/auth.service';
import { Request, Response } from 'express';
import { RegisterDTO } from './auth/auth.dto';

const register = (req: Request<{}, {}, RegisterDTO>, res: Response) => {
  try {
    const authSvc = new AuthService({}) 
    const user = authSvc.register(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export default register;

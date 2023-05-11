import { RegisterDTO } from '@/routes/auth/dto';
import AuthService from '@/services/auth/auth.service';
import { Request, Response } from 'express';

const register = (req: Request<{}, {}, RegisterDTO>, res: Response) => {
  try {
    const user = AuthService.register(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export default register;

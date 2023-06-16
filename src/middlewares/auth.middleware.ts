import config from '@/config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token']?.[0];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded: any = jwt.verify(token, config.JWT_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

export default AuthMiddleware;

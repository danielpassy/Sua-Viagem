import config from '@/config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cookies = req.headers['cookie'];
    const token = cookie.parse(cookies as string)['token'];
    const { _id } = jwt.verify(token, config.JWT_KEY) as JwtPayload;
    req.user = _id;
    return next();
  } catch (err) {
    return res.status(401).send('A token is required for authentication');
  }
};

interface JwtPayload {
  _id: string;
}
export default AuthMiddleware;

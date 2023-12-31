import config from '@/config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import logger from '@/libs/logger';
import { IJwtPayload } from '@/features/auth/services/auth/auth.service';

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cookies = req.headers['cookie'];
    const token = cookie.parse(cookies as string)['token'];
    const { _id } = jwt.verify(token, config.JWT_KEY) as IJwtPayload;
    req.user = _id;
    return next();
  } catch (err: any) {
    logger.info(`error, ${err.message}`);
    return res.status(401).send('A token is required for authentication');
  }
};

export default AuthMiddleware;

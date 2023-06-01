import { NextFunction, Request, Response } from 'express';

const ErrorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.statusCode).json({ message: err.message });
}

export default ErrorHandlerMiddleware;

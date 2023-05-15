import { NextFunction, Request, Response } from 'express';

const validateBody =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema(req.body);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

export default validateBody;

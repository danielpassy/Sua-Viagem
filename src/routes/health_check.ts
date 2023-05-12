import UserModel from '@/models/user.model';
import express, { Request, Response } from 'express';

const HealthRouter = express.Router();



HealthRouter.get('/healthcheck', async (req: Request, res: Response) => {
  await UserModel.create({a: 'a'})
  res.status(200).send('ok');
})

export default HealthRouter;
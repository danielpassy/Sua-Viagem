import UserModel from '@/models/user.model';
import express, { Request, Response } from 'express';

const HealthRouter = express.Router();

HealthRouter.get('/healthcheck', async (req: Request, res: Response) => {
  await UserModel.create({
    password: '12',
    email: '123',
    name: '123'
  });
  const all = await UserModel.find();
  console.log(all);
  res.status(200).send('ok');
});

export default HealthRouter;

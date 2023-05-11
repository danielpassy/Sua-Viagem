import app from '@/app';
import { Request, Response } from 'express';


app.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('ok');
})

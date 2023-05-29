import request from 'supertest';
import app from '@/app';
import UserModel from '@/models/user.model';
import db from '@/libs/db';
import { LoginDTO, RegisterDTO } from '@/auth/controllers/auth/auth.dto';


beforeAll(async () => {
  await db.connect(`${globalThis.__MONGO_URI__}${globalThis.__MONGO_DB_NAME__}`);
});

afterAll(async () => {
  await db.disconnect()
});

it('it should create and retrieve a user', async () => {
  const registerData = new RegisterDTO({
    name: 'ASDOKJSADKASDK',
    email: 'ASDOKJSADKASDK',
    password: 'ASDOKJSADKASDK',
  })
  const response = await request(app).post('/api/auth/register',).send(registerData);
  expect(response.status).toBe(201);

  const users = await UserModel.find().exec();
  expect(users.length).toBe(1);
  expect(users[0].email).toBe(registerData.email);
});

it('it should login', async () => {
  const loginData = new LoginDTO({
    email: 'ASDOKJSADKASDK',
    password: 'ASDOKJSADKASDK',
  })
  const response = await request(app).post('/api/auth/login',).send(loginData);
  expect(response.status).toBe(201);

  const users = await UserModel.find().exec();
  expect(users.length).toBe(1);
  expect(users[0].email).toBe(loginData.email);
});


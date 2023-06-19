import request from 'supertest';
import app from '@/app';
import mongoose from 'mongoose';
import { RegisterDTO, LoginDTO } from '@/features/auth/controllers/auth/auth.dto';
import authService from '@/features/auth/services/auth';
import UserModel from '@/features/models/user.model';
import db from '@/libs/db';

beforeAll(async () => {
  await db.connect(`${globalThis.__MONGO_URI__}${globalThis.__MONGO_DB_NAME__}`);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  let collection;
  for (collection of collections) {
    await collection.drop();
  }
});

afterAll(async () => {
  await db.disconnect();
});

it('it should create and retrieve a user', async () => {
  const registerData = new RegisterDTO({
    email: 'ASDOKJSADKASDK',
    password: 'ASDOKJSADKASDK'
  });
  const response = await request(app).post('/api/auth/register').send(registerData);
  expect(response.status).toBe(201);

  const users = await UserModel.find().exec();
  expect(users.length).toBe(1);
  expect(users[0].email).toBe(registerData.email);
});

it('it should return token if correct login ', async () => {
  const registerData = new RegisterDTO({
    email: 'ASDOKJSADKASDK',
    password: 'ASDOKJSADKASDK'
  });
  await authService.register(registerData);

  const loginData = new LoginDTO({ ...registerData });
  const response = await request(app).post('/api/auth/login').send(loginData);
  expect(response.status).toBe(200);
  expect(response.headers['set-cookie']).toBeDefined();
});

it('get the user by the jwt token ', async () => {
  const registerData = new RegisterDTO({
    email: 'ASDOKJSADKASDK',
    password: 'ASDOKJSADKASDK'
  });
  await authService.register(registerData);

  const loginData = new LoginDTO({ ...registerData });
  const response = await request(app).post('/api/auth/login').send(loginData);
  expect(response.status).toBe(200);
  expect(response.headers['set-cookie']).toBeDefined();
});

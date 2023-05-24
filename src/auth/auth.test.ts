import UserModel from '@/models/user.model';
import request from 'supertest';
import app from '@/app';
import dbService from '@/libs/db';

beforeAll(async () => {
  await dbService.connect(globalThis.__MONGO_URI__);
});

afterEach(async () => {
  await dbService.disconnect;
});

it('it should create and retrieve a user', async () => {
  const response = await request(app).get('/signup');
  expect(response.status).toBe(200);
  expect(response.text).toBe('ok');

  const users = await UserModel.find();
  expect(users.length).toBe(1);
  expect(users[0].email).toBe('123');
});

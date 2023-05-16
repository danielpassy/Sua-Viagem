import UserModel from '@/models/user.model';
import request from 'supertest';
import { MongoClient } from 'mongodb';
let connection: any;
let db: any;

beforeAll(async () => {
  connection = await MongoClient.connect(globalThis.__MONGO_URI__, {});
  db = await connection.db(globalThis.__MONGO_DB_NAME__);
});

it('it should create and retrieve a user', async () => {
  const response = await request(app).get('/healthcheck');
  expect(response.status).toBe(200);
  expect(response.text).toBe('ok');

  const users = await UserModel.find();
  expect(users.length).toBe(1);
  expect(users[0].email).toBe('123');
});

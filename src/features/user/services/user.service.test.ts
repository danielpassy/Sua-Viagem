import { UserRepository } from '@/features/models';
import UserService from '@/features/user/services';
import mongoose from 'mongoose';
import db from '@/libs/db';

beforeAll(async () => {
  await db.connect(`${globalThis.__MONGO_URI__}${globalThis.__MONGO_DB_NAME__} `);
});

afterAll(async () => {
  await db.disconnect();
});
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  let collection;
  for (collection of collections) {
    await collection.drop();
  }
});

test('getEditorsIfRegistered should retrieve users if they`re registered in the platform', async () => {
  const userRepo = new UserRepository();
  const createdUser = await userRepo.create({
    name: 'test',
    password: 'random',
    email: 'teste@gmail.com'
  });
  const usersFromDb = await UserService.findUsersByEmail([createdUser.email]);
  expect(createdUser._id).toEqual(usersFromDb![0]._id);
});

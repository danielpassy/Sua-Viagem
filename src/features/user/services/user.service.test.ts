import { UserRepository } from '@/features/models';
import UserService from '@/features/user/services';
import db from '@/libs/db';
import mongoose from 'mongoose';

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

import db from '@/libs/db';

describe('insert', () => {
  beforeAll(async () => {
    await db.connect(`${globalThis.__MONGO_URI__}${globalThis.__MONGO_DB_NAME__} `);
  });

  afterAll(async () => {
    await db.disconnect();
  });

  it('should insert a doc into collection', async () => {
    // const users = db.collection('users');
    // const mockUser = { _id: 'some-user-id', name: 'John' };
    // await users.insertOne(mockUser);
    // const insertedUser = await users.findOne({ _id: 'some-user-id' });
    // expect(insertedUser).toEqual(mockUser);
  });
});

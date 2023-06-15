// import UserModel from '@/models/user.model';
import request from 'supertest';
// import app from '@/app';
import db from '@/libs/db';
import app from '@/app';


beforeAll(async () => {
  await db.connect(`${globalThis.__MONGO_URI__}${globalThis.__MONGO_DB_NAME__}`);
});

afterAll(async () => {
  await db.disconnect()
});


it('it should create and retrieve a user', async () => {
  const response = await request(app).get('/api/healthcheck');
  expect(response.status).toBe(200);
  expect(response.text).toBe('ok');

});

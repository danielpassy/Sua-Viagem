import request from 'supertest';
import app from '@/app';

it('it should create and retrieve a user', async () => {
  const response = await request(app).get('/api/healthcheck');
  expect(response.status).toBe(200);
  expect(response.text).toBe('ok');
});

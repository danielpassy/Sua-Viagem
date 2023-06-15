import request from 'supertest';
import app from '@/app';
import { CreateTripDto, Layouts } from '@/features/trips/controllers/trips/trips.dto';
import db from '@/libs/db';
import dayjs from 'dayjs';
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

describe('should create a trip', async () => {
  const tripPayload = new CreateTripDto({
    initialDate: dayjs(),
    destination: 'Silvanio',
    layout: Layouts.OneStop
  });
  const response = await request(app).post('/api/auth/login').send(tripPayload);
  expect(response.status).toBe(200);
});
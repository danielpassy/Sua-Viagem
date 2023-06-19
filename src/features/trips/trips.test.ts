import request from 'supertest';
import app from '@/app';
import { CreateTripDto, Layouts, UpdateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import db from '@/libs/db';
import dayjs from 'dayjs';
import mongoose from 'mongoose';
import TripModel from '@/features/models/trip.model';
import config from '@/config';
import jwt from 'jsonwebtoken';
import UserModel from '@/features/models/user.model';
import { faker } from '@faker-js/faker';

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

it('should create a trip', async () => {
  const user = await createUser();
  const token = await getJwt(user);

  const tripPayload = new CreateTripDto({
    initialDate: dayjs(),
    destination: 'Rio de Janeiro',
    data: Layouts.OneStop
  });

  const response = await request(app)
    .post('/api/trips')
    .set('Cookie', [`token=${token}`])
    .send(tripPayload);

  expect(response.status).toBe(201);
  const trip = await TripModel.find();
  expect(trip[0]).not.toBeNull();
});

it('update the trip with an editor', async () => {
  const user = await createUser();
  const secondUser = await createUser();
  const token = await getJwt(user);

  const trip = await TripModel.create({
    initialDate: dayjs(),
    destination: 'Rio de Janeiro',
    data: Layouts.OneStop,
    owner: user._id
  });

  const response = await request(app)
    .post(`/api/trips/${trip._id}`)
    .set('Cookie', [`token=${token}`])
    .send(
      new UpdateTripDto({
        editors: [String(secondUser._id)]
      })
    );

  expect(response.status).toBe(200);
  try {
    const retrievedTrip = await TripModel.findById(trip._id);
    expect(retrievedTrip!.editors[0]).toEqual(secondUser._id);
  } catch (error) {
    console.log(error);
  }
});

const createUser = async () => {
  return await UserModel.create({
    email: faker.internet.email(),
    password: faker.internet.password()
  });
};

async function getJwt(user: any) {
  return jwt.sign({ _id: user._id }, config.JWT_KEY, { expiresIn: '1d' });
}

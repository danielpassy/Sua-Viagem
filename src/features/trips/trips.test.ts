import request from 'supertest';
import app from '@/app';
import { CreateTripDto, UpdateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import dayjs from 'dayjs';
import mongoose from 'mongoose';
import TripModel from '@/features/models/trip.model';
import fixtures from '@/test/fixtures';
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

it('should create a trip', async () => {
  const user = await fixtures.createUser();
  const token = await fixtures.getJwt(user);

  const tripPayload = new CreateTripDto({
    initialDate: dayjs(),
    destination: 'Rio de Janeiro'
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
  const user = await fixtures.createUser();
  const secondUser = await fixtures.createUser();
  const token = await fixtures.getJwt(user);

  const trip = await TripModel.create({
    initialDate: dayjs(),
    destination: 'Rio de Janeiro',
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
  const retrievedTrip = await TripModel.findById(trip._id);
  expect(retrievedTrip!.editors[0]).toEqual(secondUser._id);
});

it('return user trips', async () => {
  const user = await fixtures.createUser();
  const token = await fixtures.getJwt(user);
  const trip = await fixtures.createTrip(user._id);

  const response = await request(app)
    .get('/api/trips')
    .set('Cookie', [`token=${token}`]);

  expect(response.status).toBe(200);
  expect(response.body.trips.length).toBe(1);
  expect(response.body.trips[0]._id).toBe(String(trip._id));
});

it('return specific travel', async () => {
  const user = await fixtures.createUser();
  const token = await fixtures.getJwt(user);
  const trip = await fixtures.createTrip(user._id);
  const _secondTrip = await fixtures.createTrip(user._id);

  const response = await request(app)
    .get('/api/trips')
    .set('Cookie', [`token=${token}`])
    .query({ _id: String(trip._id) });

  expect(response.status).toBe(200);
  expect(response.body.trips.length).toBe(1);
  expect(response.body.trips[0]._id).toBe(String(trip._id));
});

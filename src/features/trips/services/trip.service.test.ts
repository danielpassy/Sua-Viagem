import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import tripService from '@/features/trips/services';
import db from '@/libs/db';
import time from '@/libs/time';
import fixtures from '@/test/fixtures';
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

it('associate a trip with the user when editor already registered', async () => {
  const email = 'test@test.com';
  const userWhoCreatedTrip = await fixtures.createUser();
  const userInvitedToTrip = await fixtures.createUser(email);

  const trip = await tripService.create(
    new CreateTripDto({
      duration: time.duration(10, 'days'),
      destination: 'Paris',
      editorsEmail: [email]
    }),
    userWhoCreatedTrip._id
  );
  expect(trip.editors[0]).toStrictEqual(userInvitedToTrip._id);
});

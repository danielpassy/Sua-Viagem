import config from '@/config';
import TripModel from '@/features/models/trip.model';
import UserModel from '@/features/models/user.model';
import time from '@/libs/time';
import { faker } from '@faker-js/faker';
import jwt from 'jsonwebtoken';

const createUser = async (email?: string) => {
  return await UserModel.create({
    email: email || faker.internet.email(),
    password: faker.internet.password()
  });
};

async function getJwt(user: any) {
  return jwt.sign({ _id: user._id }, config.JWT_KEY, { expiresIn: '1d' });
}

async function createTrip(user: any) {
  return await TripModel.create({
    initialDate: time(),
    endDate: time().add(10, 'days'),
    destination: faker.location.city(),
    owner: user._id
  });
}

export default {
  createUser,
  getJwt,
  createTrip
};

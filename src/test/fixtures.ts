import config from '@/config';
import UserModel from '@/features/models/user.model';
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

export default {
  createUser,
  getJwt
};

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import logger from '../logger';

let server: MongoMemoryServer;

const connectMongo = async () => {
  server = await MongoMemoryServer.create();
  const uri = server.getUri();
  try {
    await mongoose.connect(uri, {
      connectTimeoutMS: 1000,
      socketTimeoutMS: 1000
    });
    logger.info('DB connection success');
  } catch (error) {
    logger.error(`DB connection failed, ${error}`);
    process.exit(1);
  }
};

const disconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await server.stop();
};

const eraseDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
export default {
  connect: connectMongo,
  disconnect,
  eraseDatabase
};

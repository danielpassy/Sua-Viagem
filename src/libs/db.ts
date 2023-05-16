import mongoose from 'mongoose';
import logger from './logger';

const ConnectService = async (provider: any, dbUri: string) => {
  try {
    await provider.connect(dbUri);
    logger.info('DB connection success');
  } catch (error) {
    logger.error(`DB connection failed, ${error}`);
    process.exit(1);
  }
};

const disconnect = async () => await mongoose.connection.close();

const connectMongo = (dbUri: string) => ConnectService(mongoose, dbUri);

export default { connect: connectMongo, disconnect };

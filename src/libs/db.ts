import mongoose from 'mongoose';
import config from '../config';
import logger from './logger';

 const ConnectService = async (provider: any) => {
  const dbUri: string = config.dbUri;
  try {
    await provider.connect(dbUri);
    logger.info('DB connection success');
  } catch (error) {
    logger.error(`DB connection failed, ${error}`);
    process.exit(1);
  } 
}

const connectMongo = () => ConnectService(mongoose)

export default {connect: connectMongo}
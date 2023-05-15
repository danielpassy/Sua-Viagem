import dbService from './db';
import inMemoryDbService from './in_memory_db';

export default process.env.ENVIRONMENT === 'test' ? inMemoryDbService : dbService;

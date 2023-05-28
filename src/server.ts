import app from './app';
import config from './config';
import db from './libs/db';
import logger from './libs/logger';

app.listen(config.PORT, async () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);
  await db.connect(config.dbUri);
});

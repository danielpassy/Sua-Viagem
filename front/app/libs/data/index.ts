import auth from './auth';
import trip from './trip';
import misc from './misc';
import authFake from '@/app/libs/data/fake-data/authFake';
import tripFake from '@/app/libs/data/fake-data/tripFake';
import miscFake from '@/app/libs/data/fake-data/miscFake';

// eslint-disable-next-line no-constant-condition
export default true
  ? {
      auth: authFake,
      trip: tripFake,
      misc: miscFake,
    }
  : {
      auth,
      trip,
      misc,
    };

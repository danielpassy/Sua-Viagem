import { roteiro } from '@/app/libs/data/fake-data/trips';
import { mockasync } from '@/app/libs/data/http';

export default {
  suggestions: () => mockasync(roteiro).then((response: any) => response.data),
};

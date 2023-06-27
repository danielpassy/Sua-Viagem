import httpClient from '@/app/libs/data/http';

export default {
  suggestions: () => httpClient.get('/suggestions'),
};

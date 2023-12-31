import httpClient from '@/app/libs/data/http';

export default {
  login: (email: string, password: string) =>
    httpClient.post('/auth/login', { email, password }),
  register: (email: string, password: string) =>
    httpClient.post('/auth/register', { email, password }),
};

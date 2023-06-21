import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  xsrfHeaderName: 'x-csrftoken',
  xsrfCookieName: 'csrftoken',
  withCredentials: true,
});

AxiosClient.defaults.headers.common['Content-Type'] = 'application/json';

export function mockasync(data: any) {
  data = JSON.parse(JSON.stringify(data));
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }), 600);
  });
}

export default AxiosClient;

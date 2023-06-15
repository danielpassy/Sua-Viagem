import httpClient from '@/app/libs/data/http';
import { formInterface } from '@/app/page';

export default {
  createTrip: (trip: formInterface) => httpClient.post('/trips', trip),
  updateTrip: (trip: any) => httpClient.post(`/trips/${trip.id}`, trip),
  deleteTrip: (trip: any) => httpClient.delete(`/trips/${trip.id}`),
  getTrips: () => httpClient.get('/trips'),
};

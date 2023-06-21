import httpClient from '@/app/libs/data/http';
import { formInterface } from '@/app/new-trip/page';

export default {
  createTrip: (trip: formInterface) =>
    httpClient.post('/trips', trip).then((response) => response.data),
  updateTrip: (trip: any) =>
    httpClient.post(`/trips/${trip.id}`, trip).then((response) => response.data),
  deleteTrip: (trip: any) =>
    httpClient.delete(`/trips/${trip.id}`).then((response) => response.data),
  getTrips: () => httpClient.get('/trips').then((response) => response.data),
};

import { TripRepository } from '@/features/models';
import TripService from '@/features/trips/services/trip.service';

const tripService = new TripService(new TripRepository());
export default tripService;

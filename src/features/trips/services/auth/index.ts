import { TripRepository } from '@/models';
import { TripService } from '@/trips/services/auth/trip.service';

const tripService = new TripService(new TripRepository());
export default tripService;

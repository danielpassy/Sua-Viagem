import { TripRepository } from '@/features/models';
import { TripService } from '@/features/trips/services/auth/trip.service';

const tripService = new TripService(new TripRepository());
export default tripService;

import { ITrip } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';

export interface TripServiceInterface {
  createTrip(createTripDto: CreateTripDto): Promise<ITrip>;
  updateTrip(tripDto: any): Promise<string>;
  deleteTrip(): Promise<void>;
  getTrips(): Promise<void>;
}

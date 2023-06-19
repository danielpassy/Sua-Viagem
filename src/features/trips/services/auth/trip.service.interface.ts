import { TripDocument } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';

export interface TripServiceInterface {
  create(createTripDto: CreateTripDto, userId: string): Promise<TripDocument>;
  update(tripDto: any, tripId: any, userId: string): Promise<TripDocument | null>;
  delete(tripId: any, userId: string): Promise<void>;
  list(userId: string): Promise<void>;
}

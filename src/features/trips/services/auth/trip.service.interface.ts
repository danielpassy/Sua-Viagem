import { UserDocument } from '@/features/models';
import { ITrip } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';

export interface TripServiceInterface {
  create(createTripDto: CreateTripDto, user: UserDocument): Promise<ITrip>;
  update(tripDto: any, tripId: any, user: UserDocument): Promise<string>;
  delete(tripId: any, user: UserDocument): Promise<void>;
  list(user: UserDocument): Promise<void>;
}

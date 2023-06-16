import { TripRepository, IUser, UserDocument } from '@/features/models';
import { ITrip } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { TripServiceInterface } from '@/features/trips/services/auth/trip.service.interface';

export class TripService implements TripServiceInterface {
  public constructor(private _repository: TripRepository) {}
  create(createTripDto: CreateTripDto, user: UserDocument): Promise<ITrip> {
    throw new Error('Method not implemented.');
  }
  update(tripDto: any, tripId: any, user: UserDocument): Promise<string> {
    throw new Error('Method not implemented.');
  }
  delete(tripId: any, user: UserDocument): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(user: UserDocument): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default TripService;

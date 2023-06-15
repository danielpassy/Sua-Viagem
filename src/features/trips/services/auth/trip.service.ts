import { IUser, TripRepository } from '@/models';
import { CreateTripDto } from '@/trips/controllers/auth/trips.dto';
import { TripServiceInterface } from '@/trips/services/auth/trip.service.interface';

export class TripService implements TripServiceInterface {
  public constructor(private _repository: TripRepository) {}
  createTrip(createTripDto: CreateTripDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  updateTrip(tripDto: any): Promise<string> {
    throw new Error('Method not implemented.');
  }
  deleteTrip(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getTrips(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default TripService;

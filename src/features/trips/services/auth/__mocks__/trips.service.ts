import { ITrip } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { TripServiceInterface } from '@/features/trips/services/auth/trip.service.interface';

class MockTripsService implements TripServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor() {}
  update(tripDto: any, tripId: any): Promise<string> {
    throw new Error('Method not implemented.');
  }
  create(createTripDto: CreateTripDto): Promise<ITrip> {
    throw new Error('Method not implemented.');
  }

  delete(tripId: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
const authService = new MockTripsService();
export default { authService };

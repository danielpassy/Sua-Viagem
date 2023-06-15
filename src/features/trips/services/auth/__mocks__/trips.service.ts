import { IUser } from '@/models';
import { CreateTripDto } from '@/trips/controllers/auth/trips.dto';
import { TripServiceInterface } from '@/trips/services/auth/trip.service.interface';

class MockTripsService implements TripServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor() {}
  updateTrip(tripDto: any): Promise<string> {
    throw new Error('Method not implemented.');
  }
  createTrip(createTripDto: CreateTripDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  deleteTrip(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getTrips(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
const authService = new MockTripsService();
export default { authService };

import { ITrip } from '@/features/models/trip.model';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { TripServiceInterface } from '@/features/trips/services/trip.service.interface';
import { Document, Types } from 'mongoose';

class MockTripsService implements TripServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor() {}
  create(
    createTripDto: CreateTripDto,
    userId: string
  ): Promise<Document<unknown, {}, ITrip> & Omit<ITrip & { _id: Types.ObjectId }, never>> {
    throw new Error('Method not implemented.');
  }
  update(
    tripDto: any,
    tripId: any,
    userId: string
  ): Promise<(Document<unknown, {}, ITrip> & Omit<ITrip & { _id: Types.ObjectId }, never>) | null> {
    throw new Error('Method not implemented.');
  }
  delete(tripId: any, userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
const authService = new MockTripsService();
export default { authService };

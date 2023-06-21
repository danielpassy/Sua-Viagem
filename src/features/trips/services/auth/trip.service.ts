import { TripRepository } from '@/features/models';
import { TripDocument } from '@/features/models/trip.model';
import { CreateTripDto, UpdateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { TripServiceInterface } from '@/features/trips/services/auth/trip.service.interface';

export class TripService implements TripServiceInterface {
  public constructor(private _repository: TripRepository) {}
  create(createTripDto: CreateTripDto, userId: string): Promise<TripDocument> {
    const trip = this._repository.create({
      ...createTripDto,
      owner: userId,
      editors: []
    });
    return trip;
  }
  async update(tripDto: UpdateTripDto, tripId: any, userId: string): Promise<TripDocument | null> {
    const trip = await this._repository.get(tripId);

    if (!trip) throw new Error('Trip not found');

    if (trip.owner != userId && !trip.editors.some((e) => e == userId)) {
      throw new Error('The user has no permission to edit this trip');
    }

    return this._repository.update(tripId, tripDto);
  }
  delete(tripId: any, userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default TripService;

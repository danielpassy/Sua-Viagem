import communicationService from '@/features/communications/services';
import { TripRepository } from '@/features/models';
import { TripDocument } from '@/features/models/trip.model';
import { CreateTripDto, ListTripDto, UpdateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { TripServiceInterface } from '@/features/trips/services/trip.service.interface';
import userService from '@/features/user/services';
import { removeNullFields } from '@/libs/object';
import { userIdType } from '@/types';

export class TripService implements TripServiceInterface {
  public constructor(private _repository: TripRepository) {}
  async create(createTripDto: CreateTripDto, userId: userIdType): Promise<TripDocument> {
    const editors = await userService.findUsersByEmail(createTripDto.editorsEmail);
    communicationService.sendEmail(createTripDto.editorsEmail, 'trip-invitation');

    const trip = this._repository.create({
      ...createTripDto,
      owner: userId,
      editors: editors?.map((e) => e._id) || []
    });
    return trip;
  }
  async update(tripDto: UpdateTripDto, tripId: any, userId: string): Promise<TripDocument | null> {
    const trip = await this._repository.getById(tripId);

    if (!trip) throw new Error('Trip not found');

    if (trip.owner != userId && !trip.editors.some((e) => e == userId)) {
      throw new Error('The user has no permission to edit this trip');
    }

    return this._repository.update(tripId, tripDto);
  }
  delete(tripId: any, userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async list(userId: string, listTripDto: ListTripDto): Promise<TripDocument[]> {
    return await this._repository.find({ ...removeNullFields(listTripDto), owner: userId });
  }
}

export default TripService;

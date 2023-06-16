import { MongoBaseRepository } from '@/libs/base.repository';
import UserModel, { IUser, UserDocument } from './user.model';
import TripModel, { ITrip, TripDocument } from '@/features/models/trip.model';

export class UserRepository extends MongoBaseRepository<UserDocument, IUser> {
  constructor() {
    super();
    this._mongoModel = UserModel;
  }
}

export class TripRepository extends MongoBaseRepository<TripDocument, ITrip> {
  constructor() {
    super();
    this._mongoModel = TripModel;
  }
}

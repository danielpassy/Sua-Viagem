import { MongoBaseRepository } from '@/libs/base.repository';
import UserModel, { IUser, UserDocument } from './user.model';

export class UserRepository extends MongoBaseRepository<UserDocument, IUser> {
  constructor() {
    super();
    this._mongoModel = UserModel
  }

}

import { MongoBaseRepository } from "@/libs/base.repository";
import { IUser } from "./user.model";
import { Model } from 'mongoose';

export class UserRepository extends MongoBaseRepository<IUser> {
    _mongoDocument: Model<any & Document>;

}
import { Model, Document } from 'mongoose';

export abstract class MongoBaseRepository<T extends Document, V> {
  _mongoModel: Model<T>;

  // DOcument -> 1 thing
  // Model -> ORM

  async getAll(): Promise<T[]> {
    return await this._mongoModel.find().exec();
  }

  async get(id: any): Promise<T | null> {
    return await this._mongoModel.findById(id).exec();
  }

  async getByField(field: any, value: any): Promise<T | null> {
    return await this._mongoModel.findOne({ [field]: value }).exec();
  }

  async create(item: V): Promise<T> {
    return await this._mongoModel.create(item);
  }

  update(id: string, item: any): Promise<T | null> {
    return this._mongoModel.findByIdAndUpdate(id, item);
  }
}

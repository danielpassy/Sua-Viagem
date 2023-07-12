import { Model, Document } from 'mongoose';

export abstract class MongoBaseRepository<T extends Document, I> {
  _mongoModel: Model<T>;

  // DOcument -> 1 thing
  // Model -> ORM

  async getAll(): Promise<T[]> {
    return await this._mongoModel.find().exec();
  }

  async getById(id: any): Promise<T | null> {
    return await this._mongoModel.findById(id).exec();
  }

  async getByField(field: any, value: any): Promise<T | null> {
    return await this._mongoModel.findOne({ [field]: value }).exec();
  }

  async find(query: any): Promise<T[]> {
    return await this._mongoModel.find(query).exec();
  }

  async create(item: I): Promise<T> {
    return await this._mongoModel.create(item);
  }

  update(id: string, item: any): Promise<T | null> {
    return this._mongoModel.findByIdAndUpdate(id, item);
  }
}

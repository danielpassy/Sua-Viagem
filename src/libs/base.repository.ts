import { Model, Query, Document } from 'mongoose';

export abstract class MongoBaseRepository<T> {
  _mongoDocument: Model<Document & any>;

  constructor() {}
  
  async getAll() {
    return await this._mongoDocument.find().exec();
  }

  async get(id: any) {
    return await this._mongoDocument.findById(id).exec();
  }

  async create(item: T) {
    return await this._mongoDocument.create(item);
  }

  update(id: string, item: any) {
    return this._mongoDocument.findByIdAndUpdate(id, item);
  }
}

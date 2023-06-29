import { Schema, model, HydratedDocument } from 'mongoose';
export interface IUser {
  name?: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);

export type UserDocument = HydratedDocument<IUser>;
const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;

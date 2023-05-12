import { Schema, model } from 'mongoose';

export interface IUser {
  name?: string;
  email: string;
  password?: string;
}

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 6},
}, {timestamps: true});

const UserModel = model<IUser>('User', userSchema);

export default UserModel
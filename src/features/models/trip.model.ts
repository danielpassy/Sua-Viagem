import { UserDocument } from '@/features/models/user.model';
import { Dayjs } from 'dayjs';
import mongoose, { Schema, model, HydratedDocument } from 'mongoose';

type Trip = Object;

export interface ITrip {
  name?: String;
  destination: String;
  initialDate?: Dayjs;
  data: Trip;
  editors: Array<UserDocument | string>;
  owner: UserDocument | string;
}

const TripsSchema = new Schema<ITrip>(
  {
    name: { type: String },
    destination: { type: String },
    initialDate: { type: Date },
    data: { type: Object },
    editors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export type TripDocument = HydratedDocument<ITrip>;
const TripModel = model<TripDocument>('Trip', TripsSchema);

export default TripModel;

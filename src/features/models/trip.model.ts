import { UserDocument } from '@/features/models/user.model';
import { Dayjs } from 'dayjs';
import mongoose, { Schema, model, HydratedDocument } from 'mongoose';

type Trip = Object;

export interface ITrip {
  destination: String;
  initialDate: Dayjs;
  data: Trip;
  editors: Array<UserDocument>;
  owner: UserDocument;
}

const TripsSchema = new Schema<ITrip>(
  {
    destination: { type: String },
    initialDate: { type: Dayjs },
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
const TripModel = model<TripDocument>('User', TripsSchema);

export default TripModel;

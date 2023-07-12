import { UserDocument } from '@/features/models/user.model';
import { Trip, userIdType } from '@/types';
import { Dayjs } from 'dayjs';
import mongoose, { Schema, model, HydratedDocument } from 'mongoose';

export interface ITrip {
  name?: String;
  destination: String;
  Duration?: Dayjs;
  initialDate?: Dayjs;
  endDate?: Dayjs;
  data?: Trip;
  editors: UserDocument[] | userIdType[];
  owner: UserDocument | userIdType;
}

const TripsSchema = new Schema<ITrip>(
  {
    name: { type: String },
    destination: { type: String },
    initialDate: { type: Date },
    endDate: { type: Date },
    Duration: { type: Date },
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

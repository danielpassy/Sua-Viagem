import { Dayjs } from 'dayjs';
import mongoose from 'mongoose';
import plugin from 'dayjs/plugin/duration';
import { Trip, userIdType } from '@/types';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international'
}
export class CreateTripDto {
  public constructor(init: Partial<CreateTripDto>) {
    Object.assign(this, init);
  }
  initialDate?: Dayjs;
  duration?: plugin.Duration;
  destination: string;
  data?: Trip; // TODO: is this mandatory?
  name: string;
  editorsEmail: string[];
}

export class UpdateTripDto {
  public constructor(init: Partial<UpdateTripDto>) {
    Object.assign(this, init);
  }
  initialDate?: Dayjs;
  destination?: string;
  data?: object;
  name?: string;
  editors?: userIdType[];
}

export class ListTripDto {
  public constructor(init: Partial<ListTripDto>) {
    Object.assign(this, init);
  }
  _id: userIdType;
  initialDate?: Dayjs;
  destination?: string;
  data?: object;
  name?: string;
  editors?: string[] | mongoose.Types.ObjectId[];
}

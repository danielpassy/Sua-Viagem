import { Dayjs } from 'dayjs';
import mongoose from 'mongoose';

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
  data: Layouts;
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
  editors?: string[] | mongoose.Types.ObjectId[];
}

import { Dayjs } from 'dayjs';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international'
}
export class CreateTripDto {
  public constructor(init: Partial<CreateTripDto>) {
    Object.assign(this, init);
  }
  initialDate?: Dayjs;
  destination: string;
  data: Layouts;
  name: string;
}

export class UpdateTripDto {
  public constructor(init: Partial<UpdateTripDto>) {
    Object.assign(this, init);
  }
  initialDate?: Dayjs;
  destination?: string;
  data?: object;
  name?: string;
  editors?: string[];
}

import { Dayjs } from 'dayjs';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international'
}
export class CreateTripDto {
  public constructor(init: Partial<CreateTripDto>) {
    Object.assign(this, init);
  }
  initialDate: null | Dayjs;
  destination: string;
  layout: Layouts;
}

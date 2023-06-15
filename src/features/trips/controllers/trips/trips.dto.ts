import { Dayjs } from 'dayjs';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international'
}
export class CreateTripDto {
  initialDate: null | Dayjs;
  destination: '';
  layout: Layouts;
}

export class RegisterDTO {
  public constructor(init: Partial<RegisterDTO>) {
    Object.assign(this, init);
  }
  name: string;
  email: string;
  password: string;
}

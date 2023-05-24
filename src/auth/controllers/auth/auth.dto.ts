export class RegisterDTO {
  public constructor(init: Partial<RegisterDTO>) {
    Object.assign(this, init);
  }
  name: string;
  email: string;
  password: string;
}

export class LoginDTO {
  public constructor(init: Partial<LoginDTO>) {
    Object.assign(this, init);
  }
  email: string;
  password: string;
}

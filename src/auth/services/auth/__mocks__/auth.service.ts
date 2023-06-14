import { RegisterDTO, LoginDTO } from '@/auth/controllers/auth/auth.dto';
import { AuthServiceInterface } from '@/auth/services/auth/auth.service.interface';
import { IUser } from '@/models';
import UserModel from '@/models/user.model';

class MockAuthService implements AuthServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor() {}

  async register(registerDTO: RegisterDTO): Promise<IUser> {
    return new UserModel({
      username: registerDTO.name,
      email: registerDTO.email,
      password: registerDTO.password
    });
  }
  async login(loginDTO: LoginDTO): Promise<IUser> {
    return new UserModel({
      email: loginDTO.email,
      _id: 'random_hash'
    });
  }
  async logout(): Promise<void> {
    return undefined;
  }
}
const authService = new MockAuthService();
export default { authService };

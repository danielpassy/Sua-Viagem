import { RegisterDTO, LoginDTO } from '@/auth/controllers/auth/auth.dto';
import { IUser } from '@/models';

export interface AuthServiceInterface {
  register(registerDTO: RegisterDTO): Promise<IUser>;
  login(loginDTO: LoginDTO): Promise<string>;
  logout(): Promise<void>;
}

import { RegisterDTO, LoginDTO } from '@/auth/controllers/auth/auth.dto';
import { IUser } from '@/models';

export interface AuthServiceInterface {
  register(registerDTO: RegisterDTO): Promise<IUser>;
  login(loginDTO: LoginDTO): Promise<IUser>;
  logout(): Promise<void>;
}

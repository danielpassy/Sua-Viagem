import { LoginDTO, RegisterDTO } from '@/auth/controllers/auth/auth.dto';
import { AuthServiceInterface } from '@/auth/services/auth/auth.service.interface';
import { IUser, UserRepository } from '@/models';

export class AuthService implements AuthServiceInterface {
  repository: UserRepository;

  public constructor(_repository: UserRepository) {
    this.repository = _repository;
  }

  async login(loginDTO: LoginDTO): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  async logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async register(registerDTO: RegisterDTO): Promise<IUser> {
    const user = this.repository.create(registerDTO);
    return user;
  }
}

export default AuthService;

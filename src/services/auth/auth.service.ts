import { RegisterDTO } from '@/controllers/auth/auth.dto';
import { UserRepository } from '@/models';

export class AuthService {
  repository: UserRepository;

  public constructor(_repository: any) {
    const repository = new _repository();
  }

  register(registerDTO: RegisterDTO) {
    const user = this.repository.create(registerDTO);
    return user;
  }
}

export default AuthService;

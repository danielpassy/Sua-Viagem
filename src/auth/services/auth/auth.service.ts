import { LoginDTO, RegisterDTO } from '@/auth/controllers/auth/auth.dto';
import { AuthServiceInterface } from '@/auth/services/auth/auth.service.interface';
import { EncryptService } from '@/libs/encryption';
import { IUser, UserDocument, UserRepository } from '@/models';

export class AuthService implements AuthServiceInterface {
  public constructor(private _repository: UserRepository) { }

  async login(loginDTO: LoginDTO): Promise<UserDocument> {
    throw new Error('Method not implemented.');
  }

  async logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async register(registerDTO: RegisterDTO): Promise<UserDocument> {
    const user = await this._repository.getByField('email', registerDTO.email);
    if (user) {
      throw Error('User already exists');
    }

    const encryptedPassword = await EncryptService.hashPassword(registerDTO.password);
    const registeredUser = await this._repository.create({
      ...registerDTO,
      password: encryptedPassword,
    });
    return registeredUser;
  }
}

export default AuthService;

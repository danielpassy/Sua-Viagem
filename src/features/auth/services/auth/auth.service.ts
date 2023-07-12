import config from '@/config';
import { LoginDTO, RegisterDTO } from '@/features/auth/controllers/auth/auth.dto';
import { AuthServiceInterface } from '@/features/auth/services/auth/auth.service.interface';
import { UserRepository, UserDocument } from '@/features/models';
import { EncryptService } from '@/libs/encryption';
import { userIdType } from '@/types';
import jwt from 'jsonwebtoken';

export class AuthService implements AuthServiceInterface {
  public constructor(private _repository: UserRepository) {}

  async login(loginDTO: LoginDTO): Promise<string> {
    const user = await this._repository.getByField('email', loginDTO.email);
    if (!user) {
      throw Error('User not found');
    }

    const isCorrectPassword = await EncryptService.verifyPassword(loginDTO.password, user.password);
    if (!isCorrectPassword) {
      throw Error('Incorrect password');
    }

    return jwt.sign({ _id: user._id } as IJwtPayload, config.JWT_KEY, { expiresIn: `${60 * 60 * 24 * 7}` });
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
      password: encryptedPassword
    });

    return registeredUser;
  }
}
export interface IJwtPayload {
  _id: userIdType;
}
export default AuthService;

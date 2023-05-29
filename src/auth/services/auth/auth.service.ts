import { LoginDTO, RegisterDTO } from '@/auth/controllers/auth/auth.dto';
import { AuthServiceInterface } from '@/auth/services/auth/auth.service.interface';
import config from '@/config';
import { EncryptService } from '@/libs/encryption';
import { IUser, UserDocument, UserRepository } from '@/models';
import jwt from 'jsonwebtoken';


export class AuthService implements AuthServiceInterface {
  public constructor(private _repository: UserRepository) { }

  async login(loginDTO: LoginDTO): Promise<string> {
    const user = await this._repository.getByField('email', loginDTO.email);
    if (!user) {
      throw Error('User not found');
    }

    const isCorrectPassword = EncryptService.verifyPassword(loginDTO.password, user.password);
    if (!isCorrectPassword) {
      throw Error('Incorrect password');
    }

    return jwt.sign({ _id: user._id }, config.JWT_KEY, { expiresIn: `${60 * 60 * 24 * 7}` });
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

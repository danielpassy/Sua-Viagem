import config from '@/config';
import bcrypt from 'bcrypt';

export class EncryptService {
  public static async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, config.saltWorkFactor);
    return hashedPassword;
  }

  public static async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  }
}
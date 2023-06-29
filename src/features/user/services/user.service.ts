import { UserDocument, UserRepository } from '@/features/models';

export class UserService {
  public constructor(private _repository: UserRepository) {}
  async findUsersByEmail(emailList: string[]): Promise<UserDocument[] | null> {
    return this._repository.find({ email: { $in: emailList } });
  }
}
export default UserService;

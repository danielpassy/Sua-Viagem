import { UserRepository } from '@/features/models';
import UserService from './user.service';

const userService = new UserService(new UserRepository());
export default userService;

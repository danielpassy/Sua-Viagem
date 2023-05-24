import AuthService from '@/auth/services/auth/auth.service';
import { UserRepository } from '@/models';

const authService = new AuthService(new UserRepository());
export default authService;

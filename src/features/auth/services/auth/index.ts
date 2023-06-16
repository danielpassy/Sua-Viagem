import { AuthService } from '@/features/auth/services/auth/auth.service';
import { UserRepository } from '@/features/models';

const authService = new AuthService(new UserRepository());
export default authService;

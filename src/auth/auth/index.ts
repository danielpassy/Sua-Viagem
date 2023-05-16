import { AuthService } from './auth.service';
import { mockAuthService } from './mock.auth.service';

export default process.env.ENVIRONMENT === 'test'
  ? mockAuthService
  : AuthService;

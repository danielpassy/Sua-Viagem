import { RegisterDTO } from '@/routes/auth/dto';

export const AuthService = {
  register(registerDTO: RegisterDTO) {
    return {
      email: registerDTO.email,
      password: registerDTO.password,
      name: registerDTO.name,
    };
  },
};
export default AuthService;

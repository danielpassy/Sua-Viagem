import { RegisterDTO } from '@/controllers/auth/auth.dto';
import AuthService from './auth.service';
import { UserRepository } from '@/models';

class FakeUserRepository extends UserRepository {
  create(item: any) {
    return item;
  }
}

it('should insert a new user into the database', async () => {
  const dto = new RegisterDTO({
    password: 'password',
    email: 'email',
    name: 'hi'
  });
  const service = new AuthService(FakeUserRepository);

  const user = await service.register(dto);

  expect(user).toBeTruthy();
});

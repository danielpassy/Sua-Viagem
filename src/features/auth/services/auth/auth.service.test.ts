import { RegisterDTO } from '@/auth/controllers/auth/auth.dto';
import AuthService from './auth.service';
import { UserRepository } from '@/models';

class FakeUserRepository extends UserRepository {
  create(item: any) {
    return item;
  }
  async getByField(field: any, value: any) {
    return await null
  }

}

it('should insert a new user into the database', async () => {
  const dto = new RegisterDTO({
    password: 'password',
    email: 'email',
  });
  const service = new AuthService(new FakeUserRepository());

  const user = await service.register(dto);

  expect(user).toBeTruthy();
});

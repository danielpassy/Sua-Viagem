import AuthService from '@/services/auth';

it('should insert a new user into the database', async () => {
  const user = await AuthService.register(
    'fulano',
    'fulano@email.com',
    'password',
  );

  expect(user).toBeTruthy();
});

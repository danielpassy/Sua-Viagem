export const mockAuthService = {
  createUser(userName: string, email: string, password: string) {
    return {
      name: userName,
      email: email,
      password: password
    }
  },

}
export default mockAuthService;
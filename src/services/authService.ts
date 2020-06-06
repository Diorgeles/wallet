import storageService from './storageService';

interface ILogin {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function login(): Promise<ILogin> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdklajsdajslkdjalksjdlkajslkdjlkjkasjdlkja',
        user: {
          name: 'Admin',
          email: 'admin@admin.com',
        },
      });
    }, 2000);
  });
}

export async function logout() {
  return await storageService.userToken.remove();
}

export async function setToken(token: string) {
  return await storageService.userToken.set(token);
}

export async function setCurrentUser(data: Partial<ILogin>) {
  return await storageService.user.set(data.user);
}

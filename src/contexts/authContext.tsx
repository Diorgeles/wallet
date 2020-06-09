import React, { createContext, useState, useEffect, useContext } from 'react';
import storageService from 'services/storageService';
import { login, setToken, logout, setCurrentUser } from 'services/authService';

interface UserProps {
  name: string;
  email: string;
}

interface AuthContextProps {
  signed: boolean;
  user: UserProps | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageToken = await storageService.userToken.load();
      const storageCurrentUser = await storageService.user.load();

      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
      if (storageToken && storageCurrentUser) {
        setUser(storageCurrentUser);
      }
    }

    loadStorage();
  }, []);

  async function signIn() {
    try {
      const response = await login();

      setUser(response.user);

      setCurrentUser({ user: response.user });
      setToken(response.token);
    } catch (error) {
      console.log('signIn -> error', error);
    }
  }

  async function signOut() {
    await logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: true, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

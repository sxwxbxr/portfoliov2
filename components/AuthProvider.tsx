'use client';

import { ReactNode, createContext, useContext } from 'react';
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  isAdmin: false,
  login: async () => false,
  logout: async () => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const isAdmin = session?.user?.role === 'admin';

  const login = async (email: string, password: string) => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    return !!res && res.ok && !res.error;
  };

  const logout = async () => {
    await signOut({ redirect: false });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SessionProvider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


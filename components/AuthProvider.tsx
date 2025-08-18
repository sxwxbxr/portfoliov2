'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface User {
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  isAdmin: false,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    const usersRaw = localStorage.getItem('users');
    const users: Array<{ email: string; password: string; role: 'admin' | 'user' }> = usersRaw
      ? JSON.parse(usersRaw)
      : [];
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      const authUser = { email: found.email, role: found.role } as const;
      setUser(authUser);
      localStorage.setItem('user', JSON.stringify(authUser));
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


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
    if (email === 'demo@example.com' && password === 'demo123') {
      const demo = { email, role: 'user' as const };
      setUser(demo);
      localStorage.setItem('user', JSON.stringify(demo));
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    if (email === 'admin@example.com' && password === 'admin123') {
      const admin = { email, role: 'admin' as const };
      setUser(admin);
      localStorage.setItem('user', JSON.stringify(admin));
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


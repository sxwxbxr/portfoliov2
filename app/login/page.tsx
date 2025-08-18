'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FadeInSection from '../../components/FadeInSection';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', { redirect: false, email, password });
    if (res?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <FadeInSection>
        <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}


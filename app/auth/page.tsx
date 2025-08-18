'use client';

import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-6">Welcome</h1>
      <p className="mb-8">Please log in or create an account to continue.</p>
      <div className="flex justify-center space-x-4">
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

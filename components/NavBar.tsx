'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { navLinks } from '../src/config';
import { useAuth } from './AuthProvider';

export default function NavBar() {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const router = useRouter();
  return (
    <nav className="bg-gradient-to-r from-white/60 to-white/20 dark:from-gray-900/60 dark:to-gray-800/20 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <span className="font-semibold text-lg">Seya Weber</span>
        <ul className="flex space-x-6 text-sm md:text-base items-center">
          {navLinks.filter((n) => n.visible).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <Link
                href="/hub"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                Private Hub
              </Link>
            </li>
          )}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                Admin
              </Link>
            </li>
          )}
          <li>
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
            >
              CV
            </a>
          </li>
          {!isAuthenticated ? (
            <li>
              <Link
                href="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={async () => {
                  await logout();
                  router.push('/');
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}


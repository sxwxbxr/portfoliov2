'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaUser } from 'react-icons/fa';
import { navLinks } from '../src/config';

export default function NavBar() {
  const { data: session } = useSession();
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
          {!session ? (
            <li>
              <Link
                href="/login"
                aria-label="Account"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transition-transform hover:scale-105"
              >
                <FaUser className="w-5 h-5" />
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => signOut()}
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

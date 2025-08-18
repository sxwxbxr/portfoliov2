
'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaUser } from 'react-icons/fa';


const navItems = [
  { href: '/', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {

  const { data: session } = useSession();
  return (
    <nav className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <span className="font-semibold text-lg">Seya Weber</span>
        <ul className="flex space-x-6 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >

                {item.label}
              </Link>
            </li>
          ))}
          {!session ? (
            <li>
              <Link
                href="/auth"
                aria-label="Account"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaUser className="w-5 h-5" />
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => signOut()}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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

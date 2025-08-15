import './globals.css';
import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Seya Weber | Software Developer',
  description: 'Seya Weber, Project Engineer Software / Digitalisation',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur text-center">
        <h1 className="text-4xl font-bold mb-4">404 – This page could not be found</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">The page you are looking for does not exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors transition-transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

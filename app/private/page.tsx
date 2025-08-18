'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';

export default function PrivatePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <FadeInSection>
      <div className="max-w-5xl mx-auto py-20 space-y-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Private Area</h1>
        <p>Private file sharing area</p>
        <p>Game project notes</p>
        <p>Personal project experiments</p>
      </div>
    </FadeInSection>
  );
}


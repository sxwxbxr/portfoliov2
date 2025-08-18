'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';
import HubPostForm, { Post } from '../../components/HubPostForm';
import HubPostCard from '../../components/HubPostCard';

export default function HubPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const stored = localStorage.getItem('hubPosts');
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      const initial: Post[] = [
        {
          id: 1,
          type: 'news',
          title: 'Welcome to the hub',
          text: 'Share your updates with the crew.',
        },
        {
          id: 2,
          type: 'event',
          title: 'When should the next LAN-Party be?',
          options: [
            { text: 'Friday', votes: 0 },
            { text: 'Saturday', votes: 0 },
          ],
          endDate: '',
        },
        {
          id: 3,
          type: 'server',
          name: 'Survival World',
          ip: 'mc.example.com',
          modpack: 'Modpack',
          version: 'v2.1',
        },
      ];
      setPosts(initial);
      localStorage.setItem('hubPosts', JSON.stringify(initial));
    }
  }, []);

  const addPost = (post: Post) => {
    const updated = [post, ...posts];
    setPosts(updated);
    localStorage.setItem('hubPosts', JSON.stringify(updated));
  };

  const vote = (postId: number, optionIndex: number) => {
    const updated = posts.map((p) => {
      if (p.id === postId && p.type === 'event') {
        const options = p.options.map((o, idx) =>
          idx === optionIndex ? { ...o, votes: o.votes + 1 } : o
        );
        return { ...p, options };
      }
      return p;
    });
    setPosts(updated);
    localStorage.setItem('hubPosts', JSON.stringify(updated));
  };

  if (!isAuthenticated) return null;

  return (
    <FadeInSection>
      <div className="max-w-3xl mx-auto py-10 space-y-8">
        <section className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-lg backdrop-blur">
          <h1 className="text-3xl font-bold mb-2 text-center">Private Hub</h1>
          <p className="text-center">Welcome to the crew zone!</p>
        </section>

        <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur">
          <h2 className="text-xl font-semibold mb-2">Pinned</h2>
          <p>Pinned: LAN-Party on June 15 – bring your own snacks 🍕🎮</p>
        </section>

        <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-4">
          <h2 className="text-xl font-semibold">Feed</h2>
          <HubPostForm onAdd={addPost} />
          <ul className="space-y-2">
            {posts.map((p) => (
              <HubPostCard key={p.id} post={p} onVote={vote} />
            ))}
          </ul>
        </section>
      </div>
    </FadeInSection>
  );
}


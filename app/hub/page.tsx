'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';
import Poll from '../../components/Poll';

interface Post {
  id: number;
  text: string;
}

export default function HubPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('hubPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      const initial = [
        { id: 1, text: 'New Minecraft Server: mc.example.com (Modpack v2.1)' },
        { id: 2, text: 'LAN-Party planned for June – vote below!' },
      ];
      setPosts(initial);
      localStorage.setItem('hubPosts', JSON.stringify(initial));
    }
  }, []);

  const addPost = () => {
    if (!newPost.trim()) return;
    const updated = [{ id: Date.now(), text: newPost }, ...posts];
    setPosts(updated);
    localStorage.setItem('hubPosts', JSON.stringify(updated));
    setNewPost('');
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

        <Poll />

        <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-4">
          <h2 className="text-xl font-semibold">Feed</h2>
          <div className="flex space-x-2">
            <input
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share something..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addPost}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
            >
              Post
            </button>
          </div>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg shadow">
                <h3 className="font-semibold">Post</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </FadeInSection>
  );
}


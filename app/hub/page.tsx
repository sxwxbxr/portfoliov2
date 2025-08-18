'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';

interface Post {
  id: number;
  text: string;
}

export default function HubPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');
  const [pollVotes, setPollVotes] = useState({ friday: 0, saturday: 0 });

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
        { id: 1, text: 'Minecraft server updated to 1.20.1 at 192.168.0.1' },
        { id: 2, text: 'New modpack released: FantasyTech v3.1' },
      ];
      setPosts(initial);
      localStorage.setItem('hubPosts', JSON.stringify(initial));
    }
    const storedPoll = localStorage.getItem('hubPoll');
    if (storedPoll) {
      setPollVotes(JSON.parse(storedPoll));
    }
  }, []);

  const addPost = () => {
    if (!newPost.trim()) return;
    const updated = [{ id: Date.now(), text: newPost }, ...posts];
    setPosts(updated);
    localStorage.setItem('hubPosts', JSON.stringify(updated));
    setNewPost('');
  };

  const vote = (option: 'friday' | 'saturday') => {
    const updated = { ...pollVotes, [option]: pollVotes[option] + 1 };
    setPollVotes(updated);
    localStorage.setItem('hubPoll', JSON.stringify(updated));
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
          <p>Next LAN-Party on 15th June - get ready!</p>
        </section>

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
                {p.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-2">
          <h2 className="text-xl font-semibold">Poll: LAN-Party Date?</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => vote('friday')}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
            >
              Friday ({pollVotes.friday})
            </button>
            <button
              onClick={() => vote('saturday')}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
            >
              Saturday ({pollVotes.saturday})
            </button>
          </div>
        </section>

        <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-2">
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <p>File Sharing</p>
          <p>Game Project Notes</p>
        </section>
      </div>
    </FadeInSection>
  );
}


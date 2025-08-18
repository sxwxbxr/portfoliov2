'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';
import HubPostForm, { Post } from '../../components/hub/HubPostForm';
import HubPostCard from '../../components/hub/HubPostCard';
import FileManager from '../../components/hub/FileManager';

export default function HubPage() {
  const { isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const loadPosts = async () => {
      const res = await fetch('/api/hub');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    };
    if (isAuthenticated) loadPosts();
  }, [isAuthenticated]);

  const addPost = async (post: Post) => {
    const res = await fetch('/api/hub', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      const created = await res.json();
      setPosts([created, ...posts]);
    }
  };

  const updatePost = async (post: Post) => {
    const res = await fetch('/api/hub', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      const updated = await res.json();
      setPosts(posts.map((p) => (p.id === updated.id ? updated : p)));
      setEditingPost(null);
    }
  };

  const deletePost = async (postId: number) => {
    const res = await fetch(`/api/hub?id=${postId}`, { method: 'DELETE' });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== postId));
    }
  };

  const vote = async (postId: number, optionIndex: number) => {
    const post = posts.find((p) => p.id === postId);
    if (!post || post.type !== 'event') return;
    const updatedPost: Post = {
      ...post,
      options: post.options.map((o, idx) =>
        idx === optionIndex ? { ...o, votes: o.votes + 1 } : o
      ),
    } as Post;
    const res = await fetch('/api/hub', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost),
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(posts.map((p) => (p.id === data.id ? data : p)));
    }
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
          <HubPostForm
            onSubmit={editingPost ? updatePost : addPost}
            editingPost={editingPost}
            onCancel={() => setEditingPost(null)}
          />
          <ul className="space-y-2">
            {posts.map((p) => (
              <HubPostCard
                key={p.id}
                post={p}
                onVote={vote}
                onEdit={(post) => setEditingPost(post)}
                onDelete={deletePost}
                isAdmin={isAdmin}
              />
            ))}
          </ul>
        </section>

        <FileManager isAdmin={isAdmin} />
      </div>
    </FadeInSection>
  );
}


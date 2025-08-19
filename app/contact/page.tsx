'use client';

import { useState } from 'react';
import FadeInSection from '../../components/FadeInSection';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Message sent!');
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-20 flex justify-center">
      <FadeInSection>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-800/60 dark:to-gray-900/20 backdrop-blur space-y-4"
        >
          <h1 className="text-3xl font-semibold text-center mb-4">Contact</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md transition-transform hover:scale-105"
          >
            Send
          </button>
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </FadeInSection>
    </div>
  );
}

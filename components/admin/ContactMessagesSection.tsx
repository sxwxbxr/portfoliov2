'use client';

import { useEffect, useState } from 'react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactMessagesSection() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  const deleteMessage = async (id: number) => {
    await fetch('/api/contact', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMessages(messages.filter((m) => m.id !== id));
  };

  if (messages.length === 0) {
    return <p>No messages.</p>;
  }

  return (
    <div className="space-y-4">
      {messages.map((m) => (
        <div
          key={m.id}
          className="p-4 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur flex justify-between"
        >
          <div>
            <p className="font-semibold">
              {m.name} ({m.email})
            </p>
            <p className="text-sm">{m.message}</p>
          </div>
          <button
            onClick={() => deleteMessage(m.id)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function Poll() {
  const [votes, setVotes] = useState({ friday: 0, saturday: 0 });

  useEffect(() => {
    const stored = localStorage.getItem('hubPoll');
    if (stored) setVotes(JSON.parse(stored));
  }, []);

  const vote = (option: 'friday' | 'saturday') => {
    const updated = { ...votes, [option]: votes[option] + 1 };
    setVotes(updated);
    localStorage.setItem('hubPoll', JSON.stringify(updated));
  };

  return (
    <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-2">
      <h2 className="text-xl font-semibold">When should the next LAN-Party be?</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => vote('friday')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
        >
          Friday ({votes.friday})
        </button>
        <button
          onClick={() => vote('saturday')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
        >
          Saturday ({votes.saturday})
        </button>
      </div>
    </section>
  );
}


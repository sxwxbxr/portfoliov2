"use client";

import FadeInSection from '../../components/FadeInSection';
import { ideas } from '../../src/config';

export default function IdeasPage() {
  return (
    <FadeInSection>
      <div className="max-w-5xl mx-auto py-20 space-y-6">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Ideas & Goals
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {ideas.map((idea, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-800/60 dark:to-gray-900/20 backdrop-blur transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold">{idea.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{idea.goal}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{idea.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}


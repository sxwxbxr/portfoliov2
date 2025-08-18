'use client';

import { useEffect, useState } from 'react';

interface TestimonialForm {
  author: string;
  quote: string;
}

interface TestimonialEntry {
  author: string;
  quote: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialEntry[]>([]);
  const [form, setForm] = useState<TestimonialForm>({ author: '', quote: '' });

  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) setTestimonials(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const addTestimonial = () => {
    setTestimonials([...testimonials, { ...form }]);
    setForm({ author: '', quote: '' });
  };

  const deleteTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <textarea
          placeholder="Quote"
          value={form.quote}
          onChange={(e) => setForm({ ...form, quote: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <button
          onClick={addTestimonial}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Testimonial
        </button>
      </div>
      <ul className="space-y-2">
        {testimonials.map((t, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{t.author}</span>
            <button
              onClick={() => deleteTestimonial(idx)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


'use client';

import { useEffect, useState } from 'react';

interface TestimonialForm {
  author: string;
  quote: string;
}

interface TestimonialEntry {
  id: string;
  author: string;
  quote: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialEntry[]>([]);
  const [form, setForm] = useState<TestimonialForm>({ author: '', quote: '' });

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const addTestimonial = async () => {
    const res = await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const created = await res.json();
    setTestimonials([...testimonials, created]);
    setForm({ author: '', quote: '' });
  };

  const deleteTestimonial = async (id: string) => {
    await fetch('/api/testimonials', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setTestimonials(testimonials.filter((t) => t.id !== id));
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
        {testimonials.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{t.author}</span>
            <button
              onClick={() => deleteTestimonial(t.id)}
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


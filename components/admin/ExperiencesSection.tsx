'use client';

import { useEffect, useState } from 'react';

interface ExperienceForm {
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  highlights: string;
}

interface StoredExperience {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export default function ExperiencesSection() {
  const [experiences, setExperiences] = useState<StoredExperience[]>([]);
  const [form, setForm] = useState<ExperienceForm>({
    role: '',
    company: '',
    start: '',
    end: '',
    summary: '',
    highlights: '',
  });

  useEffect(() => {
    fetch('/api/experiences')
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  const addExperience = async () => {
    const payload = {
      role: form.role,
      company: form.company,
      start: form.start,
      end: form.end,
      summary: form.summary,
      highlights: form.highlights
        .split(',')
        .map((h) => h.trim())
        .filter(Boolean),
    };
    const res = await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const created = await res.json();
    setExperiences([...experiences, created]);
    setForm({ role: '', company: '', start: '', end: '', summary: '', highlights: '' });
  };

  const deleteExperience = async (id: string) => {
    await fetch('/api/experiences', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Start"
            value={form.start}
            onChange={(e) => setForm({ ...form, start: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="End"
            value={form.end}
            onChange={(e) => setForm({ ...form, end: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          />
        </div>
        <textarea
          placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Highlights (comma-separated)"
          value={form.highlights}
          onChange={(e) => setForm({ ...form, highlights: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <button
          onClick={addExperience}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Experience
        </button>
      </div>
      <ul className="space-y-2">
        {experiences.map((e) => (
          <li
            key={e.id}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{e.role} – {e.company}</span>
            <button
              onClick={() => deleteExperience(e.id)}
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


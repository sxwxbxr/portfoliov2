'use client';

import { useEffect, useState } from 'react';

interface EducationForm {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
}

export default function EducationSection() {
  const [education, setEducation] = useState<EducationEntry[]>([]);
  const [form, setForm] = useState<EducationForm>({
    school: '',
    degree: '',
    start: '',
    end: '',
  });

  useEffect(() => {
    fetch('/api/education')
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  const addEducation = async () => {
    const res = await fetch('/api/education', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const created = await res.json();
    setEducation([...education, created]);
    setForm({ school: '', degree: '', start: '', end: '' });
  };

  const deleteEducation = async (id: string) => {
    await fetch('/api/education', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setEducation(education.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="School"
          value={form.school}
          onChange={(e) => setForm({ ...form, school: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Degree"
          value={form.degree}
          onChange={(e) => setForm({ ...form, degree: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
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
        <button
          onClick={addEducation}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Education
        </button>
      </div>
      <ul className="space-y-2">
        {education.map((ed) => (
          <li
            key={ed.id}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{ed.degree} @ {ed.school}</span>
            <button
              onClick={() => deleteEducation(ed.id)}
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


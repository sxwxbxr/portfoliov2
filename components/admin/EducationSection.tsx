'use client';

import { useEffect, useState } from 'react';

interface EducationForm {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface EducationEntry {
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
    const stored = localStorage.getItem('education');
    if (stored) setEducation(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(education));
  }, [education]);

  const addEducation = () => {
    setEducation([...education, { ...form }]);
    setForm({ school: '', degree: '', start: '', end: '' });
  };

  const deleteEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
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
        {education.map((ed, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{ed.degree} @ {ed.school}</span>
            <button
              onClick={() => deleteEducation(idx)}
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


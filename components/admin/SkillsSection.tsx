'use client';

import { useEffect, useState } from 'react';

interface SkillForm {
  group: string;
  items: string;
}

interface StoredSkill {
  group: string;
  items: string[];
}

export default function SkillsSection() {
  const [skills, setSkills] = useState<StoredSkill[]>([]);
  const [form, setForm] = useState<SkillForm>({ group: '', items: '' });

  useEffect(() => {
    const stored = localStorage.getItem('skills');
    if (stored) {
      setSkills(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const addSkill = () => {
    const newSkill: StoredSkill = {
      group: form.group,
      items: form.items
        .split(',')
        .map((i) => i.trim())
        .filter(Boolean),
    };
    setSkills([...skills, newSkill]);
    setForm({ group: '', items: '' });
  };

  const deleteSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Group"
          value={form.group}
          onChange={(e) => setForm({ ...form, group: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Items (comma-separated)"
          value={form.items}
          onChange={(e) => setForm({ ...form, items: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Skill
        </button>
      </div>
      <ul className="space-y-2">
        {skills.map((s, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{s.group}</span>
            <button
              onClick={() => deleteSkill(idx)}
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


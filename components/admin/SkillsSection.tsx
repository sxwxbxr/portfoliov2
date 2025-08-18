'use client';

import { useEffect, useState } from 'react';

interface SkillForm {
  group: string;
  items: string;
}

interface StoredSkill {
  id: string;
  group: string;
  items: string[];
}

export default function SkillsSection() {
  const [skills, setSkills] = useState<StoredSkill[]>([]);
  const [form, setForm] = useState<SkillForm>({ group: '', items: '' });

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const addSkill = async () => {
    const payload = {
      group: form.group,
      items: form.items
        .split(',')
        .map((i) => i.trim())
        .filter(Boolean),
    };
    const res = await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const created = await res.json();
    setSkills([...skills, created]);
    setForm({ group: '', items: '' });
  };

  const deleteSkill = async (id: string) => {
    await fetch('/api/skills', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setSkills(skills.filter((s) => s.id !== id));
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
        {skills.map((s) => (
          <li
            key={s.id}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{s.group}</span>
            <button
              onClick={() => deleteSkill(s.id)}
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


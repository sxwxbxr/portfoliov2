'use client';

import { useEffect, useState } from 'react';

interface ProjectForm {
  title: string;
  summary: string;
  tags: string;
  cover: string;
  live: string;
  repo: string;
}

interface StoredProject {
  title: string;
  summary: string;
  tags: string[];
  cover: string;
  live?: string;
  repo?: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<StoredProject[]>([]);
  const [form, setForm] = useState<ProjectForm>({
    title: '',
    summary: '',
    tags: '',
    cover: '',
    live: '',
    repo: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('projects');
    if (stored) {
      setProjects(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    const newProject: StoredProject = {
      title: form.title,
      summary: form.summary,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      cover: form.cover,
    };
    if (form.live) newProject.live = form.live;
    if (form.repo) newProject.repo = form.repo;
    setProjects([...projects, newProject]);
    setForm({ title: '', summary: '', tags: '', cover: '', live: '', repo: '' });
  };

  const deleteProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <textarea
          placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Cover URL"
          value={form.cover}
          onChange={(e) => setForm({ ...form, cover: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Live Link (optional)"
          value={form.live}
          onChange={(e) => setForm({ ...form, live: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          placeholder="Repo Link (optional)"
          value={form.repo}
          onChange={(e) => setForm({ ...form, repo: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Project
        </button>
      </div>
      <ul className="space-y-2">
        {projects.map((p, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <span className="font-semibold">{p.title}</span>
            <button
              onClick={() => deleteProject(idx)}
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


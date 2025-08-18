'use client';

import { useEffect, useState } from 'react';

interface User {
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export default function UsersSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<User>({ email: '', password: '', role: 'user' });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<User>({ email: '', password: '', role: 'user' });

  useEffect(() => {
    const stored = localStorage.getItem('users');
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      const defaults: User[] = [
        { email: 'admin@example.com', password: 'admin123', role: 'admin' },
      ];
      setUsers(defaults);
      localStorage.setItem('users', JSON.stringify(defaults));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = () => {
    setUsers([...users, form]);
    setForm({ email: '', password: '', role: 'user' });
  };

  const deleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditForm(users[index]);
  };

  const saveEdit = (index: number) => {
    const updated = [...users];
    updated[index] = editForm;
    setUsers(updated);
    setEditIndex(null);
  };

  const cancelEdit = () => setEditIndex(null);

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value as 'admin' | 'user' })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={addUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add User
        </button>
      </div>
      <ul className="space-y-2">
        {users.map((u, idx) => (
          <li
            key={idx}
            className="p-2 rounded-md bg-white/60 dark:bg-gray-800/60 backdrop-blur flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          >
            {editIndex === idx ? (
              <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1">
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="px-2 py-1 border rounded"
                />
                <input
                  type="password"
                  value={editForm.password}
                  onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                  className="px-2 py-1 border rounded"
                />
                <select
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value as 'admin' | 'user' })}
                  className="px-2 py-1 border rounded"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(idx)} className="text-green-600 text-sm">
                    Save
                  </button>
                  <button onClick={cancelEdit} className="text-gray-600 text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="flex-1">
                  {u.email} ({u.role})
                </span>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(idx)} className="text-blue-500 text-sm">
                    Edit
                  </button>
                  <button onClick={() => deleteUser(idx)} className="text-red-500 text-sm">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


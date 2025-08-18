'use client';

import { useEffect, useState } from 'react';

interface FileItem {
  id: number;
  name: string;
  size: string;
  isPublic: boolean;
}

interface Props {
  isAdmin: boolean;
}

export default function FileManager({ isAdmin }: Props) {
  const [files, setFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('hubFiles');
    if (stored) {
      setFiles(JSON.parse(stored));
    } else {
      const initial: FileItem[] = [
        { id: 1, name: 'lan-planning.pdf', size: '2 MB', isPublic: true },
        { id: 2, name: 'server-modpack.zip', size: '120 MB', isPublic: false },
      ];
      setFiles(initial);
      localStorage.setItem('hubFiles', JSON.stringify(initial));
    }
  }, []);

  const save = (data: FileItem[]) => {
    setFiles(data);
    localStorage.setItem('hubFiles', JSON.stringify(data));
  };

  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const newFile: FileItem = {
      id: Date.now(),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      isPublic: false,
    };
    save([...files, newFile]);
    e.target.value = '';
  };

  const togglePublic = (id: number) => {
    const updated = files.map((f) =>
      f.id === id ? { ...f, isPublic: !f.isPublic } : f
    );
    save(updated);
  };

  const deleteFile = (id: number) => {
    const updated = files.filter((f) => f.id !== id);
    save(updated);
  };

  const visibleFiles = isAdmin ? files : files.filter((f) => f.isPublic);

  return (
    <section className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 shadow backdrop-blur space-y-4">
      <h2 className="text-xl font-semibold">Files</h2>
      {isAdmin && (
        <div>
          <input type="file" onChange={upload} />
        </div>
      )}
      <ul className="space-y-2">
        {visibleFiles.map((file) => (
          <li
            key={file.id}
            className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{file.size}</p>
              <p className="text-sm">{file.isPublic ? 'Public' : 'Private'}</p>
            </div>
            {isAdmin && (
              <div className="space-x-2">
                <button
                  onClick={() => togglePublic(file.id)}
                  className="text-sm px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  {file.isPublic ? 'Keep Private' : 'Make Public'}
                </button>
                <button
                  onClick={() => deleteFile(file.id)}
                  className="text-sm px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Delete File
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}


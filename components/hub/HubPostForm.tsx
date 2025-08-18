'use client';

import { useEffect, useState } from 'react';

export type NewsPost = { id: number; type: 'news'; title: string; text: string };
export type EventPollPost = {
  id: number;
  type: 'event';
  title: string;
  options: { text: string; votes: number }[];
  endDate: string;
};
export type MinecraftPost = {
  id: number;
  type: 'server';
  name: string;
  ip: string;
  modpack: string;
  version: string;
};
export type Post = NewsPost | EventPollPost | MinecraftPost;

interface Props {
  onSubmit: (post: Post) => void;
  editingPost?: Post | null;
  onCancel?: () => void;
}

export default function HubPostForm({ onSubmit, editingPost, onCancel }: Props) {
  const [type, setType] = useState<'news' | 'event' | 'server'>('news');

  const [newsTitle, setNewsTitle] = useState('');
  const [newsText, setNewsText] = useState('');

  const [eventTitle, setEventTitle] = useState('');
  const [eventOptions, setEventOptions] = useState('');
  const [eventEnd, setEventEnd] = useState('');

  const [serverName, setServerName] = useState('');
  const [serverIp, setServerIp] = useState('');
  const [serverModpack, setServerModpack] = useState('');
  const [serverVersion, setServerVersion] = useState('');

  useEffect(() => {
    if (editingPost) {
      setType(editingPost.type);
      if (editingPost.type === 'news') {
        setNewsTitle(editingPost.title);
        setNewsText(editingPost.text);
      } else if (editingPost.type === 'event') {
        setEventTitle(editingPost.title);
        setEventOptions(editingPost.options.map((o) => o.text).join(', '));
        setEventEnd(editingPost.endDate);
      } else if (editingPost.type === 'server') {
        setServerName(editingPost.name);
        setServerIp(editingPost.ip);
        setServerModpack(editingPost.modpack);
        setServerVersion(editingPost.version);
      }
    }
  }, [editingPost]);

  const clear = () => {
    setType('news');
    setNewsTitle('');
    setNewsText('');
    setEventTitle('');
    setEventOptions('');
    setEventEnd('');
    setServerName('');
    setServerIp('');
    setServerModpack('');
    setServerVersion('');
  };

  const submit = () => {
    let post: Post | null = null;
    if (type === 'news') {
      if (!newsTitle || !newsText) return;
      post = {
        id: editingPost?.id ?? Date.now(),
        type: 'news',
        title: newsTitle,
        text: newsText,
      };
    } else if (type === 'event') {
      if (!eventTitle || !eventOptions) return;
      const options = eventOptions
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean)
        .map((text) => {
          const existing =
            editingPost?.type === 'event'
              ? editingPost.options.find((opt) => opt.text === text)?.votes ?? 0
              : 0;
          return { text, votes: existing };
        });
      post = {
        id: editingPost?.id ?? Date.now(),
        type: 'event',
        title: eventTitle,
        options,
        endDate: eventEnd,
      };
    } else if (type === 'server') {
      if (!serverName || !serverIp) return;
      post = {
        id: editingPost?.id ?? Date.now(),
        type: 'server',
        name: serverName,
        ip: serverIp,
        modpack: serverModpack,
        version: serverVersion,
      };
    }
    if (post) {
      onSubmit(post);
      clear();
    }
  };

  const cancel = () => {
    clear();
    onCancel?.();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="mr-2">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as any)}
          className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
        >
          <option value="news">News</option>
          <option value="event">Event Poll</option>
          <option value="server">Minecraft Server</option>
        </select>
      </div>

      {type === 'news' && (
        <div className="space-y-2">
          <input
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            placeholder="Title"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <textarea
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
            placeholder="Text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>
      )}

      {type === 'event' && (
        <div className="space-y-2">
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Event title"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <input
            value={eventOptions}
            onChange={(e) => setEventOptions(e.target.value)}
            placeholder="Options (comma separated)"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <input
            type="date"
            value={eventEnd}
            onChange={(e) => setEventEnd(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>
      )}

      {type === 'server' && (
        <div className="space-y-2">
          <input
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            placeholder="Server name"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <input
            value={serverIp}
            onChange={(e) => setServerIp(e.target.value)}
            placeholder="IP address"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <input
            value={serverModpack}
            onChange={(e) => setServerModpack(e.target.value)}
            placeholder="Modpack name"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <input
            value={serverVersion}
            onChange={(e) => setServerVersion(e.target.value)}
            placeholder="Modpack version"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>
      )}

      <div className="space-x-2">
        <button
          onClick={submit}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
        >
          {editingPost ? 'Save' : 'Post'}
        </button>
        {editingPost && (
          <button
            onClick={cancel}
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}


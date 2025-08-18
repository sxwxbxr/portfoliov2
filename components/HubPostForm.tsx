'use client';

import { useState } from 'react';

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
  onAdd: (post: Post) => void;
}

export default function HubPostForm({ onAdd }: Props) {
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

  const submit = () => {
    if (type === 'news') {
      if (!newsTitle || !newsText) return;
      const post: NewsPost = {
        id: Date.now(),
        type: 'news',
        title: newsTitle,
        text: newsText,
      };
      onAdd(post);
      setNewsTitle('');
      setNewsText('');
    } else if (type === 'event') {
      if (!eventTitle || !eventOptions) return;
      const options = eventOptions
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean)
        .map((text) => ({ text, votes: 0 }));
      const post: EventPollPost = {
        id: Date.now(),
        type: 'event',
        title: eventTitle,
        options,
        endDate: eventEnd,
      };
      onAdd(post);
      setEventTitle('');
      setEventOptions('');
      setEventEnd('');
    } else if (type === 'server') {
      if (!serverName || !serverIp) return;
      const post: MinecraftPost = {
        id: Date.now(),
        type: 'server',
        name: serverName,
        ip: serverIp,
        modpack: serverModpack,
        version: serverVersion,
      };
      onAdd(post);
      setServerName('');
      setServerIp('');
      setServerModpack('');
      setServerVersion('');
    }
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

      <button
        onClick={submit}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
      >
        Post
      </button>
    </div>
  );
}


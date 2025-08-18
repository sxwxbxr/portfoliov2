'use client';

import { Post } from './HubPostForm';

interface Props {
  post: Post;
  onVote: (postId: number, optionIndex: number) => void;
  onEdit?: (post: Post) => void;
  onDelete?: (postId: number) => void;
  isAdmin?: boolean;
}

export default function HubPostCard({ post, onVote, onEdit, onDelete, isAdmin }: Props) {
  const adminButtons = (
    <div className="mt-2 space-x-2">
      <button
        onClick={() => onEdit?.(post)}
        className="text-sm px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete?.(post.id)}
        className="text-sm px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );

  if (post.type === 'news') {
    return (
      <li className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg shadow">
        <h3 className="font-semibold mb-1">{post.title}</h3>
        <p>{post.text}</p>
        {isAdmin && adminButtons}
      </li>
    );
  }

  if (post.type === 'event') {
    return (
      <li className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg shadow space-y-2">
        <h3 className="font-semibold">{post.title}</h3>
        <div className="flex flex-wrap gap-2">
          {post.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onVote(post.id, idx)}
              className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors transition-transform hover:scale-105"
            >
              {opt.text} ({opt.votes})
            </button>
          ))}
        </div>
        {post.endDate && (
          <p className="text-sm text-gray-500">Vote until {post.endDate}</p>
        )}
        {isAdmin && adminButtons}
      </li>
    );
  }

  // Minecraft server
  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <li className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg shadow space-y-1">
      <h3 className="font-semibold">{post.name}</h3>
      <div className="flex items-center space-x-2">
        <span>{post.ip}</span>
        <button
          onClick={() => copy(post.ip)}
          className="text-xs px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Copy IP
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          {post.modpack} {post.version}
        </span>
        <button
          onClick={() => copy(`${post.modpack} ${post.version}`)}
          className="text-xs px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Copy Modpack
        </button>
      </div>
      {isAdmin && adminButtons}
    </li>
  );
}


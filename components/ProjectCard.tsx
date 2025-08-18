import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  slug,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-800/60 dark:to-gray-900/20 backdrop-blur hover:shadow-xl transition-transform hover:scale-105">
      <Link href={`/projects/${slug}`} className="block">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </Link>
      <div className="flex space-x-4 mt-4">
        {liveUrl && (
          <a
            href={liveUrl}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            Live ansehen
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

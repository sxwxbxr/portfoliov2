import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ProjectCard({ title, description, slug }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </Link>
  );
}

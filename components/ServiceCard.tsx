interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
}

export default function ServiceCard({ title, description, points }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="list-disc list-inside mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white text-sm">Anfragen</button>
    </div>
  );
}

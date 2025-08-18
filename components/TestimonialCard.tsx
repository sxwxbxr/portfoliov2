interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export default function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur">
      <p className="italic text-sm text-gray-600 dark:text-gray-300">"{quote}"</p>
      <div className="flex items-center mt-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

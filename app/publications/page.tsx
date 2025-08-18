import { publications } from '../../src/config';

export default function PublicationsPage() {
  return (
    <section className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-semibold mb-8 text-center">Publications</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{pub.summary}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{pub.year}</p>
            <a
              href={pub.link}
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Mehr
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

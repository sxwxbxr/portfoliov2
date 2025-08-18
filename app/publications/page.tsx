import { publications } from '../../src/config';
import FadeInSection from '../../components/FadeInSection';

export default function PublicationsPage() {
  return (
    <FadeInSection>
      <section className="max-w-5xl mx-auto py-20">
        <h1 className="text-3xl font-semibold mb-8 text-center">Publications</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-800/60 dark:to-gray-900/20 backdrop-blur transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{pub.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{pub.summary}</p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{pub.year}</p>
              <a
                href={pub.link}
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm transition-transform hover:scale-105"
              >
                Mehr
              </a>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

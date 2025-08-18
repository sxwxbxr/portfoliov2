import { projects } from '../../../src/config';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return <div className="max-w-5xl mx-auto py-20">Project not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-20 space-y-8">
      <h1 className="text-3xl font-semibold text-center">{project.title}</h1>
      <img
        src={project.cover}
        alt={project.title}
        className="w-full rounded-lg"
      />
      <section>
        <h2 className="text-2xl font-semibold mt-8">Problem</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.problem}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mt-6">Ansatz</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.approach}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mt-6">Ergebnis</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.result}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mt-6">Lessons Learned</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.lessons}</p>
      </section>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {project.metrics.map((m, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur"
          >
            <p className="text-xl font-semibold">{m.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-8">
        <a
          href={project.liveUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Live
        </a>
        <a
          href={project.repoUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Repo
        </a>
      </div>
    </div>
  );
}

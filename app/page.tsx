import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Hi, I'm Your Name</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Software developer building useful things.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard title="Project One" description="Brief description." />
          <ProjectCard title="Project Two" description="Brief description." />
        </div>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Reach me at{' '}
          <a href="mailto:you@example.com" className="text-blue-500 hover:underline">
            you@example.com
          </a>
        </p>
      </section>
    </div>
  );
}

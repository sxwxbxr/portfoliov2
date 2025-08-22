import FadeInSection from '../../../components/FadeInSection'
import { projects } from '../../../src/config'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) {
    return <div className="max-w-5xl mx-auto py-20">Project not found.</div>
  }

  return (
    <FadeInSection>
      <div className="max-w-5xl mx-auto py-20 space-y-8">
        <h1 className="text-3xl font-semibold text-center">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full rounded-lg" />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex space-x-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-transform hover:scale-105"
              >
                Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-transform hover:scale-105"
              >
                Repo
              </a>
            )}
          </div>
        )}
      </div>
    </FadeInSection>
  )
}

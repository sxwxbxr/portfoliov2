import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <div className="space-y-24">
      <FadeInSection>
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Seya Weber
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Junior Software Developer based in Zürich, Switzerland.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="experience" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Developer Apprentice · InnoRechi EST</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 06/2024</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
                <li>.NET development and third-party module integration</li>
              <li>Implemented test automation templates</li>
              <li>Synchronized medical data across 80+ sites</li>
              <li>Evaluated medical databases in France and Belgium</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Electronics Technician · Personal F GmbH</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">06/2021 – 08/2022</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Managed electrotechnical planning and procurement</li>
              <li>Introduced cross-platform chat for over 150 employees</li>
            </ul>
          </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="projects" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Database Migration in France"
              description="Led GDPR-compliant migration of a medical database for InnoRechi EST."
            />
            <ProjectCard
              title="Village Network"
              description="Supported electrical planning and implementation for a Swiss village network at Leipcom GmbH."
            />
            <ProjectCard
              title="Property Management & Energy Monitoring"
              description="Developed a solution for energy data collection and property oversight with Leipcom GmbH."
            />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="education" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Berufsfachschule TALS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2024 – 07/2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                EFZ in Computer Science, Application Development – GBS St. Gallen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2020 – 07/2024</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="skills" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
          <div className="space-y-6 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="font-semibold">Programming Languages</h3>
              <p>C#, Java, JavaScript, Svelte, SQL, Python</p>
            </div>
            <div>
              <h3 className="font-semibold">Frameworks & Tools</h3>
              <p>.NET 8, Svelte, Android Studio, Astro, Electron</p>
            </div>
            <div>
              <h3 className="font-semibold">Languages</h3>
              <p>English – C1 Advanced (Cambridge)</p>
              <p>German – Native</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact</h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Reach me at{' '}
            <a
              href="mailto:sewb.business@proton.me"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              sewb.business@proton.me
            </a>{' '}
            or by phone at +41 79 899 11 12.
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}


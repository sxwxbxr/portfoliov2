import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Hi, I'm Seya</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Project Engineer Software based in St. Gallen, Switzerland.
        </p>
      </section>

      <section id="experience">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Electrical Planner · Elektroplanungen Kohler GmbH</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">08/2021 – 06/2021</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Planned Buildings in various sizes</li>
              <li>Realised Electrical Solutions from simple houses up to complex industrial facilities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Electrical Planner · Lepcon GmbH</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">06/2021 – 08/2022</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Managed electrotechnical planning and procurement</li>
              <li>Improved energy usage and efficiency for over 150 buildings</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Developer Apprentice · InnoForce EST</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 07/2024</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>.NET development and third-party module integration</li>
              <li>Implemented test automation templates</li>
              <li>Synchronized medical data across 80+ sites</li>
              <li>Evaluated medical databases in France</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Project Engineer Software / Digitalisation · Telsonic Ultrasonics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">07/2025 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Implementing custom workflows for various machines</li>
            </ul>
          </div>
          
        </div>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Database Migration in France"
            description="Led GDPR-compliant migration of a medical database for InnoForce EST."
          />
          <ProjectCard
            title="Mansion Project"
            description="Led electrical planning and implementation for a mansion at Lepcon GmbH."
          />
          <ProjectCard
            title="Property Management & Energy Monitoring"
            description="Developed a solution for energy data collection and property oversight with Lepcon GmbH."
          />
          <ProjectCard
            title="Electrical Solutions"
            description="Realised Electrical Solutions for all kinds of customers"
          />
        </div>
      </section>

      <section id="education">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              EFZ as Electrical Planner – GBS St. Gallen
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 07/2024</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              EFZ as Computer Specialist in Application Development – WISS St. Gallen
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 07/2024</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Berufsfachschule TALS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">08/2024 – 07/2025</p>
          </div>
          
        </div>
      </section>

      <section id="skills">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="font-semibold">Programming Languages</h3>
            <p>C#, Java, Python</p>
          </div>
          <div>
            <h3 className="font-semibold">Frameworks & Tools</h3>
            <p>.NET 8, PySide6, WPF, Qt WebEngine</p>
          </div>
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>English – C1 Advanced (Cambridge)</p>
            <p>German – Native</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Reach me at{' '}
          <a href="mailto:sewb.business@proton.me" className="text-blue-500 hover:underline">
            swbr.business@proton.me
          </a>{' '}
        </p>
      </section>
    </div>
  );
}


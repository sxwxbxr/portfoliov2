"use client";

import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';
import TestimonialCard from '../components/TestimonialCard';
import { projects, testimonials, toggles } from '../src/config';

export default function Home() {
  return (
    <div className="space-y-24">
      <FadeInSection>
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Seya Weber
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Project Manager Software and Digitalisation in St. Gallen, Switzerland.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="about"
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src="https://placehold.co/300x300?text=Profile"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              I’m a Software & Digitalization Project Lead at Telsonic, creating customer specific automation workflows in business-critical systems.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              With a dual background in software engineering and electrical design, I turn complex operational needs into clear requirements, lean processes, and maintainable solutions.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              I’m passionate about leveraging technology to drive efficiency and improve user experiences.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="experience" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Project Manger Software and Digitalisation · Telsonic Ultrasonics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">07/2025 – Present</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Creating customer specific workflows.</li>
              <li>Implementing company intern software projects to increase efficiency.</li>
              <li>Adjusting post-setup automation workflows for customers</li>
              <li>The link between customer and software, to ensure smooth communication and project success.</li>
            </ul>
          </div>
            <div>
              <h3 className="text-xl font-semibold">Software Developer Apprentice · InnoForce EST</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 07/2024</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
                <li>.NET development and third-party module integration</li>
              <li>Implemented test automation templates</li>
              <li>Synchronized medical data across multiple locations</li>
              <li>Evaluated medical databases in France</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Electrical Planner · Lepcon GmbH</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">06/2021 – 08/2022</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Managed electrotechnical planning and procurement</li>
              <li>Coordinated electrical revisions of 150+ sites</li>
            </ul>
          </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="projects" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                slug={project.slug}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="education" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Berufsmatura TALS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2024 – 07/2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                EFZ in Computer Science, Application Development – WISS St. Gallen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2022 – 07/2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                EFZ in Electrical Planning – GBS St. Gallen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">08/2018 – 07/2022</p>
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
              <p>C#, Java, JavaScript, Python</p>
            </div>
            <div>
              <h3 className="font-semibold">Frameworks & Tools</h3>
              <p>.NET 8, WPF, Android Studio, PySide6, QtWebEngine</p>
            </div>
            <div>
              <h3 className="font-semibold">Languages</h3>
              <p>English – C1 Advanced (Cambridge)</p>
              <p>German – Native</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {toggles.testimonials && (
        <FadeInSection>
          <section id="testimonials" className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, idx) => (
                <TestimonialCard
                  key={idx}
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  company={t.company}
                  avatar={t.avatar}
                />
              ))}
            </div>
          </section>
        </FadeInSection>
      )}
    </div>
  );
}


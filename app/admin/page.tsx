'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeInSection from '../../components/FadeInSection';
import { useAuth } from '../../components/AuthProvider';
import ProjectsSection from '../../components/admin/ProjectsSection';
import ExperiencesSection from '../../components/admin/ExperiencesSection';
import SkillsSection from '../../components/admin/SkillsSection';
import EducationSection from '../../components/admin/EducationSection';
import TestimonialsSection from '../../components/admin/TestimonialsSection';
import UsersSection from '../../components/admin/UsersSection';
import ContactMessagesSection from '../../components/admin/ContactMessagesSection';

export default function AdminPage() {
  const { isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<
    | 'projects'
    | 'experiences'
    | 'skills'
    | 'education'
    | 'testimonials'
    | 'users'
    | 'messages'
  >('projects');

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.replace('/login');
    }
  }, [isAuthenticated, isAdmin, router]);

  if (!isAuthenticated || !isAdmin) return null;

  return (
    <FadeInSection>
      <div className="max-w-4xl mx-auto py-10 space-y-6">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setTab('projects')}
            className={`px-4 py-2 rounded-md border ${tab === 'projects' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Projects
          </button>
          <button
            onClick={() => setTab('experiences')}
            className={`px-4 py-2 rounded-md border ${tab === 'experiences' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Experiences
          </button>
          <button
            onClick={() => setTab('skills')}
            className={`px-4 py-2 rounded-md border ${tab === 'skills' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Skills
          </button>
          <button
            onClick={() => setTab('education')}
            className={`px-4 py-2 rounded-md border ${tab === 'education' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Education
          </button>
          <button
            onClick={() => setTab('testimonials')}
            className={`px-4 py-2 rounded-md border ${tab === 'testimonials' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Testimonials
          </button>
          <button
            onClick={() => setTab('users')}
            className={`px-4 py-2 rounded-md border ${tab === 'users' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Users
          </button>
          <button
            onClick={() => setTab('messages')}
            className={`px-4 py-2 rounded-md border ${tab === 'messages' ? 'bg-blue-500 text-white' : 'bg-white/60 dark:bg-gray-800/60'}`}
          >
            Contact Messages
          </button>
        </div>
        <div className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur shadow">
          {tab === 'projects' && <ProjectsSection />}
          {tab === 'experiences' && <ExperiencesSection />}
          {tab === 'skills' && <SkillsSection />}
          {tab === 'education' && <EducationSection />}
          {tab === 'testimonials' && <TestimonialsSection />}
          {tab === 'users' && <UsersSection />}
          {tab === 'messages' && <ContactMessagesSection />}
        </div>
      </div>
    </FadeInSection>
  );
}


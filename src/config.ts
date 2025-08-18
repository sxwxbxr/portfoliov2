export interface NavLink {
  href: string;
  label: string;
  visible: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  cover: string;
  problem: string;
  approach: string;
  result: string;
  lessons: string;
  metrics: Metric[];
  liveUrl: string;
  repoUrl: string;
}

export interface Idea {
  title: string;
  goal: string;
  benefit: string;
}

export const navLinks = [
  { href: '/', label: 'Home', visible: true },
  { href: '/ideas', label: 'Ideas', visible: true },
  { href: '/contact', label: 'Contact', visible: true },
] as NavLink[];

export const toggles = {
  testimonials: true,
};

export const testimonials = [
  {
    quote: '“Seya Weber proved to be a reliable and diligent intern with strong analytical skills: he supported the installation, testing, and migration of medical database solutions and developed an application for the automated processing of patient questionnaires, which is already in productive use at major ENT clinics”',
    name: 'Christoph Wille',
    role: 'CEO',
    company: 'InnoForce Est.',
    avatar: 'https://placehold.co/100x100?text=Avatar',
  },
  {
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Corp.',
    avatar: 'https://placehold.co/100x100?text=Avatar',
  },
] as Testimonial[];

export const projects = [
  {
    slug: 'database-migration',
    title: 'Database Migration in France',
    description:
      'Led GDPR-compliant migration of a medical database for InnoForce EST.',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Customer wasnt satisfied with the existing database solution.',
    approach: 'Analysed the current database structure and created a migration plan.',
    result: 'Successfully migrated the database with zero downtime and improved performance and customer satisfaction.',
    lessons: 'Thorough documentation and testing are crucial for successful migrations.',
    metrics: [
      { label: 'Users', value: '300+' },
      { label: 'Increased uniformity', value: '50%' },
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'mansion-project',
    title: 'Mansion Project',
    description:
      'Led and coordinated the implementation of a large-scale project infrastructure for a luxury mansion.',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Customer wished for a complex automation solution.',
    approach: 'Suggested multiple different approaches, designs and technologies.',
    result: 'Successfully implemented a robust automation solution that met all customer requirements.',
    lessons: 'Collaboration and clear communication with stakeholders are key to project success.',
    metrics: [
      { label: 'Different technologies', value: '10-15' },
      { label: 'Uptime', value: '99.9%' },
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'property-management-energy-monitoring',
    title: 'Property Management & Energy Monitoring',
    description:
      'Developed a solution for self-use of solar power and installation of e-mobility',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Customer wished for a comprehensive energy management solution.',
    approach: 'Conducted a thorough analysis of energy consumption patterns and proposed tailored solutions.',
    result: 'Successfully implemented a system for self-use of solar power and e-mobility integration.',
    lessons: 'Understanding customer needs and providing customized solutions is crucial.',
    metrics: [
      { label: 'Properties', value: '200+' },
      { label: 'Energy Saved', value: '30%' },
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
] as Project[];

export const ideas = [
  {
    title: 'Motocom (in progress)',
    goal: 'Goal: Provide an app for motorcycle enthusiasts to track their rides and connect with other riders.',
    benefit: 'Benefit: Helps riders stay connected and share their experiences.',
  },
  {
    title: 'MultiScreenKiosk',
    goal: 'Goal: Create an easy to use way to display multiple apps and Browser Instances on one Screen',
    benefit: 'Benefit: Provides a seamless multitasking experience for users.',
  },
] as Idea[];


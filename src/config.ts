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
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Jane Doe',
    role: 'CEO',
    company: 'Example Inc.',
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
      'Led GDPR-compliant migration of a medical database for InnoRechi EST.',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lessons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    metrics: [
      { label: 'Users', value: '1000+' },
      { label: 'Time Saved', value: '50%' },
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'village-network',
    title: 'Village Network',
    description:
      'Supported electrical planning and implementation for a Swiss village network at Leipcom GmbH.',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lessons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    metrics: [
      { label: 'Nodes', value: '80+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'property-management-energy-monitoring',
    title: 'Property Management & Energy Monitoring',
    description:
      'Developed a solution for energy data collection and property oversight with Leipcom GmbH.',
    cover: 'https://placehold.co/600x400?text=Project+Cover',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lessons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    title: 'Personal App (in progress)',
    goal: 'Goal: XYZ',
    benefit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Open-source GitHub Project',
    goal: 'Goal: Lorem ipsum',
    benefit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
] as Idea[];


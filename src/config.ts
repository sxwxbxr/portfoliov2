export interface NavLink {
  href: string;
  label: string;
  visible: boolean;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
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

export interface Publication {
  title: string;
  summary: string;
  year: string;
  link: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', visible: true },
  { href: '#about', label: 'About', visible: true },
  { href: '#experience', label: 'Experience', visible: true },
  { href: '#projects', label: 'Projects', visible: true },
  { href: '#services', label: 'Services', visible: true },
  { href: '#testimonials', label: 'Testimonials', visible: true },
  { href: '#education', label: 'Education', visible: true },
  { href: '#skills', label: 'Skills', visible: true },
  { href: '#contact', label: 'Contact', visible: true },
  { href: '/publications', label: 'Publications', visible: true },
];

export const toggles = {
  services: true,
  testimonials: true,
  publications: true,
};

export const services: Service[] = [
  {
    title: 'Service One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    points: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
    ],
  },
  {
    title: 'Service Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    points: [
      'Ut enim ad minim veniam',
      'Quis nostrud exercitation',
      'Ullamco laboris nisi ut',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Jane Doe',
    role: 'CEO',
    company: 'Example Inc.',
    avatar: '/public/assets/images/avatar1.jpg',
  },
  {
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Corp.',
    avatar: '/public/assets/images/avatar2.jpg',
  },
];

export const projects: Project[] = [
  {
    slug: 'database-migration',
    title: 'Database Migration in France',
    description:
      'Led GDPR-compliant migration of a medical database for InnoRechi EST.',
    cover: '/public/assets/images/project1.jpg',
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
    cover: '/public/assets/images/project2.jpg',
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
    cover: '/public/assets/images/project3.jpg',
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
];

export const publications: Publication[] = [
  {
    title: 'My First Talk',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    year: '2024',
    link: '#',
  },
  {
    title: 'Research Paper',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    year: '2023',
    link: '#',
  },
];


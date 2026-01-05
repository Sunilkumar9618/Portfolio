import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Certificates',
    hash: '#certificates',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Urudunai – Community Resource Matcher',
    description:
      'A location-based platform that connects users with nearby community resources using maps and real-time data.',
    image: '/images/project2.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Google Maps API',
      'REST APIs',
    ],
    links: {
      preview: '#',
      github: '#',
    },
  },
  {
    title: 'Visual AI Workflow Builder',
    description:
      'A configurable workflow builder that converts business processes into modular, API-driven UI components.',
    image: '/images/project3.png',
    technologies: [
      'React.js',
      'JavaScript',
      'Node.js',
      'REST APIs',
    ],
    links: {
      preview: '#',
      github: '#',
    },
  },
  {
    title: 'MindSpace – Virtual Meditation Platform',
    description:
      'A responsive wellness platform with secure authentication and dynamic content delivery for meditation and focus.',
    image: '/images/project5.png',
    technologies: [
      'React.js',
      'Node.js',
      'Firebase',
      'MongoDB',
    ],
    links: {
      preview: '#',
      github: '#',
    },
  },
  {
    title: 'CodeAura – Collaborative Code Snippet Marketplace',
    description:
      'A collaborative platform where developers can create, share, and manage reusable code snippets across projects.',
    image: '/images/project1.png',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'MERN Stack',
    ],
    links: {
      preview: '#',
      github: '#',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Developer | Intern',
    company: 'Prodigy Infotech (Remote)',
    description:
      'Contributed to the development and enhancement of responsive web interfaces using modern front-end technologies. Collaborated with team members in an Agile environment to implement UI components, debug issues, and improve usability. Assisted in integration testing and ensured smooth interaction between front-end components and backend APIs while following clean code and version control practices.',

    period: 'Jul 2024 – Aug 2024',
    technologies: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
      'REST APIs',
      'Agile',
    ],
  },
] as const;


// export const skillsData = [
//   { icon: <Icons.html className="size-12" /> },
//   { icon: <Icons.css className="size-12" /> },
//   { icon: <Icons.sass className="size-12" /> },
//   { icon: <Icons.tailwind className="size-12" /> },
//   { icon: <Icons.javascript className="size-12" /> },
//   { icon: <Icons.typescript className="size-12" /> },
//   { icon: <Icons.react className="size-12" /> },
//   { icon: <Icons.nextjs className="size-12" /> },
//   { icon: <Icons.nestjs className="size-12" /> },
//   { icon: <Icons.docker className="size-12" /> },
// ] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.expressjs className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

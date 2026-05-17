import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Python' },
      { name: 'C++' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Express.js' },
      { name: 'Socket.io' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    category: 'Databases & APIs',
    skills: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'JWT' }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Vercel' },
      { name: 'Git' },
      { name: 'ESLint' },
      { name: 'Prettier' },
      { name: 'VS Code' }
    ]
  }
];

export const skillsDistribution = [
  { name: 'React', value: 90 },
  { name: 'Next.js', value: 85 },
  { name: 'TypeScript', value: 88 },
  { name: 'Node.js', value: 76 },
  { name: 'MongoDB', value: 70 }
];

import type { ExperienceItem } from '@/types';

export const experienceTimeline: ExperienceItem[] = [
  {
    company: 'Publicis Sapient',
    title: 'Senior Software Engineer',
    date: 'Jan 2024 – Present',
    location: 'Gurugram, India',
    summary:
      'Working as a Senior Software Engineer with over 5 years of frontend development experience, contributing to large-scale enterprise products across automotive financing and healthcare domains.',
    responsibilities: [
      'Developed a multi-step commercial vehicle financing platform using Next.js, React, TypeScript, and Adobe Experience Manager (AEM), enabling buyers and lenders to manage quotations, validations, and approval workflows efficiently.',
      'Built reusable, form-driven user journeys with complex business validations and accessibility-compliant UI components.',
      'Designed and implemented a provider search experience with autocomplete recommendations, geolocation filtering, recent and saved searches, list and map views, favorite providers, and recently visited providers.',
      'Integrated map-based search functionality and optimized client-side data fetching and caching using TanStack Query (React Query).',
      'Developed appointment booking flows with dynamic forms, validations, and API-driven content rendering.',
      'Contributed to a reusable plug-and-play React/Node.js NPM package for appointment booking, designed to be embedded across multiple products and customized via APIs and content configurations.',
      'Currently developing a modular conversational AI chat widget package with chat bubbles, interactive cards, deep links, contextual navigation, live agent handoff support, and configurable UI components for multiple host applications.',
      'Refactored Splunk logging by implementing a singleton service architecture, reducing duplicate logger instances and improving application stability.'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NX Monorepo',
      'Adobe Experience Manager (AEM)',
      'TanStack Query',
      'React Hook Form',
      'REST APIs',
      'Splunk',
      'NPM Packages',
      'Map Integrations',
      'Accessibility (WCAG)',
      'Git'
    ]
  },
  {
    company: 'GlobalLogic',
    title: 'Senior Software Engineer',
    date: 'Dec 2020 – Dec 2023',
    location: 'Noida, India',
    summary:
      'Worked on an enterprise EdTech platform used by K–12 institutions for managing student data, HR workflows, and administrative reporting.',
    responsibilities: [
      'Built an internal data export and merge tool (“Exporter”) that automated report generation and reduced manual effort by approximately 50%.',
      'Migrated legacy Angular applications to a modern React + TypeScript architecture, significantly improving maintainability and frontend performance.',
      'Developed reusable UI components and optimized complex administrative workflows.',
      'Mentored junior developers and created onboarding scripts and setup automation, reducing environment setup time by nearly two weeks for new team members.',
      'Collaborated with cross-functional teams including QA, product owners, and backend engineers to deliver enterprise-grade features.'
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Node.js', 'REST APIs', 'Git', 'CI/CD']
  }
];

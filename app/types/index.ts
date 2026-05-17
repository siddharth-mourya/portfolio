export type ProjectCategory =
  | 'Full-Stack Applications'
  | 'Frontend Applications'
  | 'Backend Services'
  | 'Real-Time Applications'
  | 'UI Components'
  | 'IoT & Embedded Systems'
  | 'Game Development'
  | 'Documentation & Learning'
  | 'Templates & UI Mockups'
  | 'Mobile Applications';

export type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  repo: string;
  liveUrl?: string;
  backendRepo?: string;
  techStack: string[];
  features: string[];
  responsibilities: string[];
  impact: string[];
  category: ProjectCategory;
  tags: string[];
  domain: string[];
  complexity: 'High' | 'Medium' | 'Low';
};

export type SkillCategory = {
  category: string;
  skills: { name: string }[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  responsibilities: string[];
};

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

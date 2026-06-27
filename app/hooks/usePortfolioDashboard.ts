'use client';

import { blogPosts } from '@/data/blog';
import { experienceTimeline } from '@/data/experience';
import { metrics } from '@/data/metrics';
import { projects } from '@/data/projects';
import { skillCategories, skillsDistribution } from '@/data/skills';
import { useCachedQuery } from '@/components/providers/QueryClientProvider';

const getPortfolioDashboardData = async () => {
  const categoryCounts = Object.entries(projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)).map(([name, value]) => ({ name, value }));

  const complexityCounts = ['High', 'Medium', 'Low'].map((name) => ({
    name,
    value: projects.filter((project) => project.complexity === name).length
  }));

  const topTech = Object.entries(projects.flatMap((project) => project.techStack).reduce((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
    return acc;
  }, {} as Record<string, number>))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  const featuredProjects = projects.slice(0, 6);
  const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);
  const domains = [...new Set(projects.flatMap((project) => project.domain))];
  const activeProjects = projects.filter((project) => /active|production/i.test(project.status)).length;

  return {
    metrics,
    projects,
    featuredProjects,
    categoryCounts,
    complexityCounts,
    topTech,
    skillsDistribution,
    skillCategories,
    blogPosts,
    experienceTimeline,
    summary: {
      totalProjects: projects.length,
      totalSkills,
      totalDomains: domains.length,
      activeProjects,
      latestRole: experienceTimeline[0]
    }
  };
};

export function usePortfolioDashboardQuery() {
  return useCachedQuery('portfolio-dashboard', getPortfolioDashboardData);
}

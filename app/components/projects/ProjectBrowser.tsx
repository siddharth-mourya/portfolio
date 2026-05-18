'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { projects } from '@/data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectBrowser() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const searchableValues = [project.title, project.description, project.category, ...project.tags, ...project.techStack, ...project.domain];
      const matchesSearch = !normalizedSearch || searchableValues.some((value) => value.toLowerCase().includes(normalizedSearch));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <label className="relative block">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects, tech, domains..."
            className="w-full rounded-full border border-slate-200 bg-white px-12 py-4 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-slate-950 text-white shadow-soft'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-slate-950'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{project.category}</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-slate-600">{project.complexity}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-950 group-hover:text-orange-600">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.slice(0, 7).map((tech) => (
                <span key={tech} className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">{tech}</span>
              ))}
            </div>
          </Link>
        ))}
        {filteredProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-orange-200 bg-orange-50 p-8 text-slate-600">
            No projects matched your search. Try another technology, domain, or category.
          </div>
        ) : null}
      </div>
    </div>
  );
}

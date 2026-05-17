'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectBrowser() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = [project.title, project.description, ...project.tags].some((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 xl:grid-cols-[1.8fr_1.2fr]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects, domains, or technologies"
          className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-4 text-slate-100 outline-none transition focus:border-sky-400"
        />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-3xl px-4 py-3 text-sm transition ${
                activeCategory === category
                  ? 'bg-sky-500 text-slate-950'
                  : 'border border-white/10 bg-slate-900/80 text-slate-200 hover:border-sky-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group rounded-3xl border border-white/10 bg-slate-950/80 p-8 transition hover:border-sky-400"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{project.category}</p>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs tracking-[0.2em] text-slate-300">
                {project.complexity}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {filteredProjects.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-300">
            No projects matched your search. Try adjusting the filters or search terms.
          </div>
        ) : null}
      </div>
    </div>
  );
}

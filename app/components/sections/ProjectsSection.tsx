import Link from 'next/link';
import { featuredProjects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section className="mt-14">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected projects</h2>
        </div>
        <Link href="/projects" className="text-sm font-medium text-sky-400 transition hover:text-sky-300">
          Explore all projects →
        </Link>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group rounded-3xl border border-white/10 bg-slate-950/80 p-8 transition hover:border-sky-400"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{project.category}</p>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{project.complexity}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

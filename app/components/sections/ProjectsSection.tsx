import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section className="mt-16" id="work">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Projects with product thinking.</h2>
          <p className="mt-4 max-w-2xl text-slate-600">A mix of UI-heavy frontend builds, realtime products, data platforms, APIs, and component systems.</p>
        </div>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-orange-500">
          Explore all projects <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            {/* <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-100 transition group-hover:scale-125" /> */}
            <div className="relative flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">0{index + 1} • {project.category}</p>
              {/* <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">{project.complexity}</span> */}
            </div>
            <h3 className="relative mt-5 text-2xl font-semibold text-slate-950">{project.title}</h3>
            <p className="relative mt-4 leading-7 text-slate-600">{project.description}</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <span key={tech} className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

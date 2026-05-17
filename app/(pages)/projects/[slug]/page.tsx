import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading title={project.title} subtitle={project.category} description={project.description} />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <section>
            <h3 className="text-xl font-semibold text-slate-950">Overview</h3>
            <p className="mt-4 leading-8 text-slate-600">{project.description}</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-slate-950">Key features</h3>
            <ul className="mt-4 grid gap-3 text-slate-600 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-3xl bg-orange-50 p-4 text-sm leading-6">{feature}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-slate-950">What I owned</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">{responsibility}</li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-6 rounded-[2rem] bg-slate-950 p-7 text-white shadow-soft sm:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tech}</span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Impact</p>
            <ul className="space-y-3 text-slate-200">
              {project.impact.map((impact) => (
                <li key={impact} className="rounded-3xl bg-white/10 p-4">{impact}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Links</p>
            <div className="space-y-3">
              <Link href={project.repo} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-orange-100">Repository <ArrowUpRight size={16} /></Link>
              {project.backendRepo ? <Link href={project.backendRepo} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15">Backend repo <ArrowUpRight size={16} /></Link> : null}
              {project.liveUrl ? <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15">Live demo <ArrowUpRight size={16} /></Link> : null}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

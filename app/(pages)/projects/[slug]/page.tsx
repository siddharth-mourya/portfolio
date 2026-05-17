import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.id === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading title={project.title} subtitle={project.category} description={project.description} />
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <section>
            <h3 className="text-xl font-semibold text-white">Overview</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-white">Key features</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-3xl bg-slate-900/80 p-4">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-white">Responsibilities</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-3xl bg-slate-900/80 p-4">
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Impact</p>
            <ul className="space-y-3 text-slate-300">
              {project.impact.map((impact) => (
                <li key={impact} className="rounded-3xl bg-slate-900/80 p-4">
                  {impact}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Links</p>
            <div className="space-y-3">
              <Link href={project.repo} target="_blank" rel="noreferrer" className="block rounded-3xl bg-slate-900/80 px-4 py-3 text-slate-200 transition hover:bg-slate-900">
                Repository
              </Link>
              {project.backendRepo ? (
                <Link href={project.backendRepo} target="_blank" rel="noreferrer" className="block rounded-3xl bg-slate-900/80 px-4 py-3 text-slate-200 transition hover:bg-slate-900">
                  Backend repo
                </Link>
              ) : null}
              {project.liveUrl ? (
                <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="block rounded-3xl bg-slate-900/80 px-4 py-3 text-slate-200 transition hover:bg-slate-900">
                  Live demo
                </Link>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { Download } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceTimeline } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Resume" subtitle="Recruiter view" description="A scannable version of my experience, strongest projects, and technical toolkit." />
        <Link href="/files/Siddharth-Mourya-Resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-500">
          <Download size={16} /> Download PDF
        </Link>
      </div>
      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-5">
          {experienceTimeline.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{item.date} • {item.location}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 font-medium text-slate-600">{item.company}</p>
              <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
        <aside className="space-y-5">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Featured proof</h3>
            <div className="mt-5 space-y-3">
              {projects.slice(0, 4).map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="block rounded-2xl bg-orange-50 p-4 text-sm font-semibold text-slate-800 hover:bg-orange-100">{project.title}</Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-soft">
            <h3 className="text-xl font-semibold">Core skills</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skillCategories.flatMap((category) => category.skills).slice(0, 22).map((skill) => (
                <span key={skill.name} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{skill.name}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

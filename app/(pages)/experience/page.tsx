import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceTimeline } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Experience"
        subtitle="Professional work history"
        description="A chronological view of the engineering roles, responsibilities, and impact delivered across frontend and full-stack projects."
      />
      <div className="space-y-6">
        {experienceTimeline.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-sky-400">{item.company}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <div className="text-sm text-slate-400">
                <p>{item.date}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <p className="mt-6 text-slate-300">{item.summary}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-3xl bg-slate-900/80 p-4 text-slate-300">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

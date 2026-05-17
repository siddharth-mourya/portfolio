import { experienceTimeline } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section className="mt-14">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Career timeline</h2>
      </div>
      <div className="space-y-6">
        {experienceTimeline.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-sky-400">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <div className="text-sm text-slate-400">
                <p>{item.date}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <p className="mt-6 text-slate-300">{item.summary}</p>
            <ul className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-3xl bg-slate-900/80 p-4 text-sm">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

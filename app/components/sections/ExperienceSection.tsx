import { experienceTimeline } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section className="mt-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A career shaped around frontend craft.</h2>
      </div>
      <div className="relative space-y-6">
        <svg className="absolute left-6 top-8 hidden h-[82%] w-8 md:block" viewBox="0 0 40 860" fill="none" aria-hidden="true">
          <path className="story-line" d="M20 0 C45 160 -5 260 20 420 C45 580 -5 680 20 860" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
        </svg>
        {experienceTimeline.map((item) => (
          <div key={`${item.company}-${item.date}`} className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:ml-16">
            <span className="absolute -left-[3.25rem] top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-orange-400 shadow-soft md:block" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.summary}</p>
              </div>
              <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">{item.date}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Key contributions</p>
              <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="rounded-2xl bg-slate-50 p-4">{responsibility}</li>
                ))}
              </ul>
            </div>
            {item.technologies ? (
              <div className="mt-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Technologies used</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-slate-700">{technology}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

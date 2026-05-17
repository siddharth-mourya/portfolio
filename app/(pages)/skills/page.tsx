import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories, skillsDistribution } from '@/data/skills';
import { toolLibrary } from '@/data/toolbox';

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Skills, libraries, and tools"
        subtitle="Technical range"
        description="A recruiter-friendly scan of my strongest frontend skills plus the libraries and tools I have used across projects."
      />
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">Frontend confidence map</h3>
          <div className="mt-6 space-y-5">
            {skillsDistribution.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm font-semibold text-slate-700">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-sky-400" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{category.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white shadow-soft">
        <h3 className="text-2xl font-semibold">Libraries and tools I have used</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolLibrary.map((group) => (
            <div key={group.group} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-orange-200">{group.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

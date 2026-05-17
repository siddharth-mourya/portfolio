import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories, skillsDistribution } from '@/data/skills';

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Skills"
        subtitle="Technical stack overview"
        description="A mapped view of the frontend, backend, and tooling expertise used across engineering engagements."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Technology categories</h3>
          <div className="grid gap-4">
            {skillCategories.map((category) => (
              <div key={category.category} className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{category.category}</p>
                <div className="mt-4 grid gap-2 text-slate-200">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Skill intensity</h3>
          <div className="mt-6 space-y-4">
            {skillsDistribution.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-900/80">
                  <div className="h-full rounded-full bg-sky-500" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

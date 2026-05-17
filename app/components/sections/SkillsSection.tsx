import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section className="mt-14 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Technical expertise</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Skills & technologies</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.category} className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{category.category}</p>
            <div className="mt-5 space-y-3 text-slate-200">
              {category.skills.map((skill) => (
                <p key={skill.name} className="text-base">{skill.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

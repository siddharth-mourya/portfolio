import { skillCategories } from '@/data/skills';
import { toolLibrary } from '@/data/toolbox';

export function SkillsSection() {
  return (
    <section className="mt-16 rounded-[2.25rem] border border-orange-100 bg-white/80 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Technical toolkit</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">The tools I reach for when building polished products.</h2>
        <p className="mt-4 text-slate-600">Recruiters can scan the stack quickly; engineers can see the breadth behind the work.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.category} className="rounded-3xl border border-slate-100 bg-[#fffaf3] p-6 transition hover:-translate-y-1 hover:shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{category.category}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill.name} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">{skill.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Libraries & tools used across my work</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolLibrary.map((group) => (
            <div key={group.group} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

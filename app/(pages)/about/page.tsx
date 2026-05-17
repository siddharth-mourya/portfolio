import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceTimeline } from '@/data/experience';
import { skillCategories } from '@/data/skills';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading title="About" subtitle="Senior engineering leadership with product-first execution." />

      <section className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-8">
              I am a Senior Frontend Engineer with 5+ years of experience building data-rich SaaS products, realtime collaboration systems, developer platforms, and scalable frontend architectures. I help companies convert complex engineering challenges into polished digital experiences while leading teams, defining architecture, and shipping end-to-end solutions.
            </p>
            <p className="text-lg leading-8">
              My expertise spans React, Next.js, TypeScript, Node.js APIs, realtime systems, and frontend performance optimization. I design resilient, accessible interfaces and rapidly evolve product ecosystems through clean code, reusable design systems, and executive dashboards.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl bg-slate-900/80 p-8 text-slate-200 shadow-inner">
            <h2 className="text-xl font-semibold text-white">Core strengths</h2>
            <ul className="space-y-3 text-slate-300">
              <li>Technical leadership & team enablement</li>
              <li>Frontend architecture & component libraries</li>
              <li>Performance optimization & modern web Vitals</li>
              <li>Real-time applications and data dashboards</li>
              <li>End-to-end product delivery and scaling</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/70 p-8 text-slate-100 shadow-soft">
            <h3 className="text-lg font-semibold text-white">Values & methodology</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Product-first thinking with technical clarity.</li>
              <li>Accessible and inclusive interfaces by default.</li>
              <li>Data-driven decisions and measurable delivery.</li>
              <li>Documentation and scalable engineering practices.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-900/70 p-8 text-slate-100 shadow-soft">
            <h3 className="text-lg font-semibold text-white">Personal vision</h3>
            <p className="mt-5 leading-8 text-slate-300">
              I build portfolio-grade applications that are ready for engineering leaders, recruiters, and stakeholders. My goal is to create product experiences that are intuitive, high-performance, and built to scale across web, data, and IoT domains.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <SectionHeading title="Technical footprint" subtitle="A curated view of the technologies and domains I bring into each project." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{category.category}</h3>
              <div className="mt-5 space-y-2 text-white">
                {category.skills.map((skill) => (
                  <p key={skill.name} className="text-sm leading-6">{skill.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

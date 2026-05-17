import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceTimeline } from '@/data/experience';
import { personalSignals } from '@/data/toolbox';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading title="About me" subtitle="Human behind the interface" description="I am a frontend developer who likes clean interfaces, thoughtful systems, and product experiences that feel easy for real people." />

      <section className="grid gap-8 rounded-[2.25rem] border border-orange-100 bg-white/80 p-6 shadow-soft backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <Image src="/images/profile/aboutme.jpg" alt="Siddharth Mourya working and learning" width={520} height={620} className="h-full max-h-[560px] rounded-[2rem] object-cover" />
        <div className="space-y-6 text-slate-600">
          <p className="text-lg leading-8">
            I build with React, Next.js, TypeScript, Node.js, and modern UI tooling, but the part I care about most is how the final product feels. I enjoy translating messy requirements into calm screens, reusable components, and fast user flows.
          </p>
          <p className="text-lg leading-8">
            My work spans dashboards, realtime chat, analytics products, documentation platforms, APIs, and component libraries. This redesigned portfolio intentionally feels personal and light instead of corporate, because the goal is to show both craft and personality.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {personalSignals.map((signal) => (
              <p key={signal} className="rounded-3xl bg-orange-50 p-4 text-sm leading-6 text-slate-700">{signal}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {experienceTimeline.map((item) => (
          <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{item.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

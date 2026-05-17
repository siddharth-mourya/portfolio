import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Resume"
        subtitle="Professional profile"
        description="Interactive resume and downloadable PDF for senior frontend engineering, product leadership, and technical delivery roles."
      />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <section className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Summary</p>
            <p className="mt-4 text-slate-300 leading-8">
              Senior Frontend Engineer with over 5 years of experience architecting and delivering web applications, realtime systems, and design systems using React, Next.js, TypeScript, and Node.js.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Core strengths</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Frontend architecture and reusable design systems</li>
              <li>Performance optimization and Core Web Vitals</li>
              <li>Realtime applications and developer tooling</li>
              <li>Full-stack delivery with Node.js APIs</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Education & certifications</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Professional engineering track focused on web architecture and product delivery</li>
              <li>Practical certification in React, Next.js, and modern frontend tooling</li>
            </ul>
          </div>
        </section>
        <aside className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Resume actions</p>
            <Link
              href="mailto:siddharthmourya@example.com?subject=Resume%20Request"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Request PDF
            </Link>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Contact</p>
            <p className="mt-4 text-slate-300">siddharthmourya@example.com</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

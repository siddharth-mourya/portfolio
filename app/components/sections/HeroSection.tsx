import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { metrics } from '@/data/metrics';

export function HeroSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-slate-100">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Senior Frontend Engineer</p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              I build elegant web products, realtime dashboards, and developer-grade frontend systems.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{siteConfig.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/projects" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              View projects
            </Link>
            <Link href="/contact" className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white">
              Let&apos;s talk
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-slate-900/90 p-6 shadow-inner">
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { metrics } from '@/data/metrics';
import { personalSignals } from '@/data/toolbox';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-orange-100 bg-white/80 p-6 shadow-soft backdrop-blur-xl sm:p-10 lg:p-12">
      <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full bg-sky-100 blur-2xl lg:block" />
      <div className="absolute bottom-10 left-1/3 hidden h-28 w-28 rounded-full bg-orange-100 blur-2xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
            <Sparkles size={16} /> Available for frontend roles and product teams
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{siteConfig.role}</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Siddharth — I design interfaces that feel human, useful, and fast.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">{siteConfig.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-500">
              See my work <ArrowRight size={16} />
            </Link>
            <Link href="/files/Siddharth-Mourya-Resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50">
              Download resume <Download size={16} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {personalSignals.map((signal) => (
              <p key={signal} className="rounded-3xl border border-orange-100 bg-[#fff7ed]/70 p-4 text-sm leading-6 text-slate-600">
                {signal}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="floaty relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-white to-sky-100 p-4">
              <Image src="/images/profile/profile-pic.jpeg" alt="Siddharth Mourya" width={640} height={760} priority className="aspect-[4/5] rounded-[1.25rem] object-cover grayscale-[12%]" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-3xl border border-orange-100 bg-white/95 p-5 shadow-soft sm:-left-8">
            <p className="text-3xl font-semibold text-slate-950">5+</p>
            <p className="text-sm text-slate-500">years crafting frontend products</p>
          </div>
          <div className="absolute -right-2 top-8 rounded-3xl border border-sky-100 bg-white/95 p-5 shadow-soft sm:-right-8">
            <p className="text-sm font-semibold text-slate-950">Favorite stack</p>
            <p className="mt-1 text-sm text-slate-500">React • Next.js • TypeScript</p>
          </div>
        </div>
      </div>

      <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-100 bg-white/75 p-5 shadow-sm">
            <p className="text-3xl font-semibold text-slate-950">{metric.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

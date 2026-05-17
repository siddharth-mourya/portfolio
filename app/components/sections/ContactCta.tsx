import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function ContactCta() {
  return (
    <section className="mt-16 overflow-hidden rounded-[2.25rem] bg-slate-950 p-8 text-center text-white shadow-soft sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Hire me</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Looking for a frontend developer who can make product UI feel effortless?</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        I bring React, Next.js, TypeScript, UX detail, and full-stack awareness together to help teams ship interfaces recruiters, users, and engineering managers can trust.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-100">
          <Mail size={16} /> Contact me
        </Link>
        <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-orange-300">
          View work <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

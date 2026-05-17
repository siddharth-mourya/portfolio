import Link from 'next/link';

export function ContactCta() {
  return (
    <section className="mt-14 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl text-center">
      <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Hire me</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s build your next product milestone.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        I create modern frontend systems, realtime architectures, and analytics platforms that help teams move fast without compromising quality. Reach out for senior frontend engineering and product-led delivery.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/contact" className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Contact me
        </Link>
        <Link href="/resume" className="rounded-full border border-white/10 px-8 py-3 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white">
          View resume
        </Link>
      </div>
    </section>
  );
}

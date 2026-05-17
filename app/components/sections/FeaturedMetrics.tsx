import { metrics } from '@/data/metrics';

export function FeaturedMetrics() {
  return (
    <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft">
          <p className="text-4xl font-semibold text-white">{metric.value}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
        </div>
      ))}
    </section>
  );
}

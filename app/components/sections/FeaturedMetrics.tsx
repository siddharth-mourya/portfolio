import { metrics } from '@/data/metrics';

export function FeaturedMetrics() {
  return (
    <section className="mt-10 overflow-hidden rounded-[2rem] border border-orange-100 bg-slate-950 py-4 text-white shadow-soft">
      <div className="marquee-track flex w-[200%] gap-4 whitespace-nowrap">
        {[...metrics, ...metrics, ...metrics, ...metrics].map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="flex items-center gap-4 px-6 py-2">
            <span className="text-2xl font-semibold text-orange-300">{metric.value}</span>
            <span className="text-sm uppercase tracking-[0.2em] text-slate-300">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

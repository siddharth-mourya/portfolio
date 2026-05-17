import Link from 'next/link';
import { metrics } from '@/data/metrics';
import { DashboardCharts } from '@/components/dashboard/DashboardCharts';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Executive dashboard"
        subtitle="Portfolio insights"
        description="A high-level overview of experience, projects, and technical impact across the portfolio."
      />
      <div className="grid gap-6 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-soft">
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-8">
        <DashboardCharts />
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Ready for the next challenge</h3>
            <p className="mt-3 text-slate-300">This dashboard summarizes the portfolio impact, technology footprint, and career focus areas for senior frontend and full-stack leadership roles.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Connect with me
          </Link>
        </div>
      </div>
    </main>
  );
}

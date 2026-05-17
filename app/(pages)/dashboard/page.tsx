import Link from 'next/link';
import { metrics } from '@/data/metrics';
import { DashboardCharts } from '@/components/dashboard/DashboardCharts';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Portfolio map"
        subtitle="Visual overview"
        description="A softer alternative to a dashboard: quick visual signals about projects, skills, and portfolio range."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-slate-950">{metric.value}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-8">
        <DashboardCharts />
      </div>
      <div className="mt-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Ready for the next frontend challenge</h3>
            <p className="mt-3 text-slate-300">This page summarizes the portfolio impact, technology footprint, and product focus areas.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-100">Connect with me</Link>
        </div>
      </div>
    </main>
  );
}

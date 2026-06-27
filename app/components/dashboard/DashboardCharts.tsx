'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Legend } from 'recharts';

type ChartDatum = { name: string; value: number };

type DashboardChartsProps = {
  categoryCounts: ChartDatum[];
  skillsDistribution: ChartDatum[];
};

const COLORS = ['#020617', '#334155', '#64748b', '#94a3b8', '#cbd5e1', '#475569'];
const tooltipStyle = { backgroundColor: '#ffffff', borderRadius: 16, border: '1px solid #e2e8f0', color: '#0f172a' };

export function DashboardCharts({ categoryCounts, skillsDistribution }: DashboardChartsProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Capability graph</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">Skill confidence</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">React-first</span>
        </div>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillsDistribution} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip wrapperStyle={tooltipStyle} />
              <Bar dataKey="value" fill="#020617" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio spread</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">Project categories</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{categoryCounts.length} areas</span>
        </div>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryCounts} dataKey="value" nameKey="name" innerRadius={58} outerRadius={100} fill="#020617" paddingAngle={4}>
                {categoryCounts.map((entry, index) => (
                  <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip wrapperStyle={tooltipStyle} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#475569' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

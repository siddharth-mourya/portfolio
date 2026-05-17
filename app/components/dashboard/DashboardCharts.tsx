'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Legend } from 'recharts';
import { projects } from '@/data/projects';
import { skillsDistribution } from '@/data/skills';

const categoryCounts = Object.entries(projects.reduce((acc, project) => {
  acc[project.category] = (acc[project.category] || 0) + 1;
  return acc;
}, {} as Record<string, number>)).map(([name, value]) => ({ name, value }));

const COLORS = ['#fb923c', '#38bdf8', '#facc15', '#34d399', '#a78bfa', '#f472b6'];
const tooltipStyle = { backgroundColor: '#ffffff', borderRadius: 16, border: '1px solid #e2e8f0', color: '#0f172a' };

export function DashboardCharts() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">Skill confidence</h3>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillsDistribution} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip wrapperStyle={tooltipStyle} />
              <Bar dataKey="value" fill="#fb923c" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">Project categories</h3>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryCounts} dataKey="value" nameKey="name" innerRadius={58} outerRadius={100} fill="#fb923c" paddingAngle={4}>
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

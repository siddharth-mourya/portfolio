'use client';

import Link from 'next/link';
import { Activity, ArrowUpRight, BriefcaseBusiness, Code2, DatabaseZap, Layers3, Radar, ShieldCheck, Sparkles } from 'lucide-react';
import { DashboardCharts } from '@/components/dashboard/DashboardCharts';
import { usePortfolioDashboardQuery } from '@/hooks/usePortfolioDashboard';

const numberFormatter = new Intl.NumberFormat('en-US');

export function DashboardOverview() {
  const dashboardQuery = usePortfolioDashboardQuery();
  const data = dashboardQuery.data;

  if (dashboardQuery.isLoading || !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-36 animate-pulse rounded-[2rem] border border-slate-200 bg-slate-100" />
        ))}
      </div>
    );
  }

  const dashboardStats = [
    { label: 'Project inventory', value: numberFormatter.format(data.summary.totalProjects), icon: Layers3, helper: 'Complete repository-backed case studies' },
    { label: 'Production/active', value: numberFormatter.format(data.summary.activeProjects), icon: Activity, helper: 'Work marked active or production-ready' },
    { label: 'Skill signals', value: numberFormatter.format(data.summary.totalSkills), icon: Code2, helper: 'Technologies grouped by capability' },
    { label: 'Business domains', value: numberFormatter.format(data.summary.totalDomains), icon: Radar, helper: 'Coverage across product categories' }
  ];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 text-white shadow-soft">
        <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
              <Sparkles className="h-4 w-4" /> Portfolio command center
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A cleaner dashboard for projects, skills, domains, and delivery evidence.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              The view turns static portfolio data into an executive-style IT dashboard: key indicators first, detailed project cards next, and charts only where they clarify the backend-shaped content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Explore projects</Link>
              <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Discuss work</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Current focus</p>
            <h2 className="mt-4 text-2xl font-semibold">{data.summary.latestRole.title}</h2>
            <p className="mt-2 text-slate-300">{data.summary.latestRole.company} · {data.summary.latestRole.location}</p>
            <p className="mt-5 leading-7 text-slate-200">{data.summary.latestRole.summary}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-950 p-3 text-white"><Icon className="h-5 w-5" /></div>
                <ArrowUpRight className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-6 text-4xl font-semibold text-slate-950">{stat.value}</p>
              <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.helper}</p>
            </article>
          );
        })}
      </section>

      <DashboardCharts categoryCounts={data.categoryCounts} skillsDistribution={data.skillsDistribution} />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Featured systems</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Backend-shaped work, shown as cards</h2>
            </div>
            <DatabaseZap className="h-7 w-7 text-slate-900" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {data.featuredProjects.map((project) => (
              <article key={project.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-slate-950">{project.title}</h3>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600">{project.complexity}</span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6" /><h2 className="text-xl font-semibold text-slate-950">API wiring audit</h2></div>
            <p className="mt-4 text-sm leading-7 text-slate-600">This repository does not contain backend routes, auth controllers, database models, or API client calls. The dashboard hook is ready for a real API query function when those endpoints are added.</p>
            <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">No backend schema changes were made.</div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3"><BriefcaseBusiness className="h-6 w-6" /><h2 className="text-xl font-semibold text-slate-950">Top technologies</h2></div>
            <div className="mt-5 space-y-3">
              {data.topTech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-medium text-slate-800">{tech.name}</span>
                  <span className="font-semibold text-slate-950">{tech.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

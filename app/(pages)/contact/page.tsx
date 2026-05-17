import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/site';

const contactItems = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'Location', value: siteConfig.location, href: '#', icon: MapPin },
  { label: 'GitHub', value: 'siddharth-mourya', href: siteConfig.github, icon: Github },
  { label: 'LinkedIn', value: 'siddharth-mourya', href: siteConfig.linkedin, icon: Linkedin }
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading title="Contact" subtitle="Let’s build something useful" description="I am open to frontend roles, product engineering teams, and collaborations where thoughtful UI matters." />
      <section className="grid gap-6 rounded-[2.25rem] border border-orange-100 bg-white/80 p-6 shadow-soft sm:p-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-slate-950">Tell me about the interface you want to ship.</h3>
          <p className="mt-5 leading-8 text-slate-600">I can help with React/Next.js builds, component systems, frontend architecture, dashboard UI, realtime experiences, and full-stack product delivery.</p>
          <Link href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500">
            Email me
          </Link>
        </div>
        <div className="grid gap-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-[#fffaf3] p-4 transition hover:bg-orange-50">
                <span className="rounded-2xl bg-white p-3 text-orange-500 shadow-sm"><Icon size={18} /></span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-800">{item.value}</span>
                </span>
              </div>
            );
            return item.href === '#' ? <div key={item.label}>{content}</div> : <Link key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</Link>;
          })}
        </div>
      </section>
    </main>
  );
}

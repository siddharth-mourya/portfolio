import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading title="Contact" subtitle="Let's create the next technical milestone together." />

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="space-y-6 text-slate-200">
            <p className="leading-8 text-slate-300">
              I am open to senior frontend, architecture, and product engineering roles. If you're building analytics dashboards, realtime apps, component libraries, or SaaS products, let's connect.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <div className="mb-3 flex items-center gap-3 text-slate-100">
                  <MapPin size={18} />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-slate-300">Remote-first / India</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <div className="mb-3 flex items-center gap-3 text-slate-100">
                  <Mail size={18} />
                  <span className="font-semibold">Email</span>
                </div>
                <a href="mailto:siddharthmourya@example.com" className="text-sky-400 hover:text-sky-300">siddharthmourya@example.com</a>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl bg-slate-900/80 p-8 text-slate-200 shadow-inner">
            <h2 className="text-xl font-semibold text-white">Social profiles</h2>
            <div className="space-y-4 text-slate-300">
              <a href="https://github.com/siddharth-mourya" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-3xl bg-slate-950/80 p-4 transition hover:bg-slate-900">
                <Github size={18} />
                <span>github.com/siddharth-mourya</span>
              </a>
              <a href="https://linkedin.com/in/siddharth-mourya" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-3xl bg-slate-950/80 p-4 transition hover:bg-slate-900">
                <Linkedin size={18} />
                <span>linkedin.com/in/siddharth-mourya</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

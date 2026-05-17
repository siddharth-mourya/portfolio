import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

const navItems = [
  { label: 'Work', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Story', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Writing', href: '/blog' },
  { label: 'Resume', href: '/resume' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#fffaf3]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-soft transition group-hover:rotate-3 group-hover:bg-orange-500">
            SM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold tracking-tight text-slate-950">Siddharth Mourya</span>
            <span className="text-xs text-slate-500">Frontend developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-orange-100 bg-white/75 p-1 text-sm text-slate-600 shadow-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-orange-50 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-slate-600">
          <Link href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-orange-100 bg-white/75 p-2.5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950">
            <Github size={17} />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-orange-100 bg-white/75 p-2.5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950">
            <Linkedin size={17} />
          </Link>
          <Link href="/contact" aria-label="Contact" className="hidden rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-500 sm:inline-flex sm:items-center sm:gap-2">
            <Mail size={16} /> Hire me
          </Link>
        </div>
      </div>
      <Breadcrumbs />
    </header>
  );
}

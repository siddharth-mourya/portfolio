'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' }
];

export function SiteHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="font-semibold tracking-wide text-white">
          Siddharth Mourya
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/siddharth-mourya" target="_blank" className="text-slate-300 transition hover:text-white">
            <Github size={18} />
          </Link>
          <Link href="https://linkedin.com/in/siddharth-mourya" target="_blank" className="text-slate-300 transition hover:text-white">
            <Linkedin size={18} />
          </Link>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-white/10 bg-slate-900/80 p-2 text-slate-300 transition hover:border-sky-400 hover:text-white"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

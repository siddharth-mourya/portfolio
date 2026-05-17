'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { projects } from '@/data/projects';

const staticLabels: Record<string, string> = {
  about: 'About',
  blog: 'Writing',
  contact: 'Contact',
  dashboard: 'Dashboard',
  experience: 'Experience',
  projects: 'Projects',
  resume: 'Resume',
  skills: 'Skills'
};

function formatSegment(segment: string) {
  const decodedSegment = decodeURIComponent(segment);
  const blogPost = blogPosts.find((post) => post.slug === decodedSegment);
  const project = projects.find((item) => item.id === decodedSegment);

  if (blogPost) {
    return blogPost.title;
  }

  if (project) {
    return project.title;
  }

  return staticLabels[decodedSegment] ?? decodedSegment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    return {
      href,
      label: formatSegment(segment),
      isCurrent: index === segments.length - 1
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="border-t border-orange-100/70 bg-white/55">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3 text-sm text-slate-500 sm:px-8 lg:px-12">
        <li>
          <Link href="/" className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-orange-500">
            <Home size={15} aria-hidden="true" />
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex min-w-0 items-center gap-2">
            <ChevronRight size={15} className="shrink-0 text-orange-300" aria-hidden="true" />
            {crumb.isCurrent ? (
              <span className="truncate font-semibold text-slate-900" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="truncate font-medium text-slate-600 transition hover:text-orange-500">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}


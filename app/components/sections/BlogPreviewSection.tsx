import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export function BlogPreviewSection() {
  return (
    <section className="mt-16 rounded-[2.25rem] border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Writing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">How I think about frontend engineering.</h2>
        </div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-orange-500">
          Read all <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 transition hover:-translate-y-1 hover:bg-orange-50 hover:shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{post.date}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

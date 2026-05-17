import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export function BlogPreviewSection() {
  return (
    <section className="mt-14 rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Thought leadership</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Blog highlights</h2>
        </div>
        <Link href="/blog" className="text-sm font-medium text-sky-400 transition hover:text-sky-300">
          View all posts →
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl bg-slate-900/80 p-6 transition hover:border hover:border-sky-400"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{post.date}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-4 text-slate-300">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

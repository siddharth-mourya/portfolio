import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Blog"
        subtitle="Technical insights"
        description="Thoughtful posts on frontend architecture, performance, TypeScript best practices, and reusable UI systems."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 transition hover:border-sky-400"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-sky-400">{post.date}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
            <p className="mt-4 text-slate-300">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

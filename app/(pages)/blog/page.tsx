import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Writing"
        subtitle="Frontend notes"
        description="Short-form thinking on frontend architecture, performance, TypeScript, and reusable component systems."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">{post.date}</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

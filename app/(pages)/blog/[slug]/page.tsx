import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import ReactPerformanceOptimization from '@/content/blog/react-performance-optimization.mdx';
import ScalableFrontendArchitecture from '@/content/blog/scalable-frontend-architecture.mdx';
import TypeScriptBestPractices from '@/content/blog/typescript-best-practices.mdx';
import BuildingReusableComponentLibraries from '@/content/blog/building-reusable-component-libraries.mdx';

const postMap = {
  'react-performance-optimization': ReactPerformanceOptimization,
  'scalable-frontend-architecture': ScalableFrontendArchitecture,
  'typescript-best-practices': TypeScriptBestPractices,
  'building-reusable-component-libraries': BuildingReusableComponentLibraries
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postMeta = blogPosts.find((post) => post.slug === slug);
  if (!postMeta) {
    notFound();
  }
  const PostComponent = postMap[slug as keyof typeof postMap];
  if (!PostComponent) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading title={postMeta.title} subtitle="Blog article" description={postMeta.description} />
      <article className="prose max-w-none rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <PostComponent />
      </article>
    </main>
  );
}

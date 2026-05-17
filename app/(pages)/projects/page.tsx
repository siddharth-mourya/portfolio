import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectBrowser } from '@/components/projects/ProjectBrowser';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Project library"
        subtitle="Work samples"
        description="A searchable collection of products, UI clones, realtime systems, backend services, documentation platforms, and component libraries."
      />
      <ProjectBrowser />
    </main>
  );
}

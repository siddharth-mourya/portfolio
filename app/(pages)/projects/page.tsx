import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectBrowser } from '@/components/projects/ProjectBrowser';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Projects"
        subtitle="End-to-end product development and architecture"
        description="A curated portfolio of technical systems, realtime applications, developer tools, and frontend product experiences."
      />
      <ProjectBrowser />
    </main>
  );
}

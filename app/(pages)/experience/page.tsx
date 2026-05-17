import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Experience"
        subtitle="Career story"
        description="A concise timeline of how I moved from building React and Node.js apps to shaping scalable frontend systems and product experiences."
      />
      <ExperienceSection />
    </main>
  );
}

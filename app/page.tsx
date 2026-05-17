import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedMetrics } from '@/components/sections/FeaturedMetrics';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactCta } from '@/components/sections/ContactCta';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
      <HeroSection />
      <FeaturedMetrics />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <BlogPreviewSection />
      <ContactCta />
    </main>
  );
}

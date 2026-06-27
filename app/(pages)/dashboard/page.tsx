import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <SectionHeading
        title="Portfolio operations dashboard"
        subtitle="Informative overview"
        description="A modern black-and-white dashboard that summarizes project inventory, delivery signals, technology coverage, and frontend architecture readiness."
      />
      <DashboardOverview />
    </main>
  );
}

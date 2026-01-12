import { ParentTrustSection } from '@/components/parent/ParentTrustSection';
import { LearningReportSection } from '@/components/report/LearningReportSection';
import { SectionDivider } from '@/components/visual/SectionDivider';

export default function ParentsPage() {
  return (
    <main>
      <ParentTrustSection />
      <SectionDivider />
      <LearningReportSection />
      <SectionDivider />
    </main>
  );
}

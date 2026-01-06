import { Hero } from '@/components/hero/Hero';
import { ProblemSection } from '@/components/problem/ProblemSection';
import { PhilosophySection } from '@/components/philosophy/PhilosophySection';
import { StudentMomentSection } from '@/components/student-moment/StudentMomentSection';
import { ElaraListensSection } from '@/components/listening/ElaraListensSection';
import { TeacherClaritySection } from '@/components/teacher/TeacherClaritySection';
import { ParentTrustSection } from '@/components/parent/ParentTrustSection';
import { LearningReportSection } from '@/components/report/LearningReportSection';
import { EcosystemSection } from '@/components/ecosystem/EcosystemSection';
import { ClosingCTASection } from '@/components/closing/ClosingCTASection';
import { SectionDivider } from '@/components/visual/SectionDivider';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <PhilosophySection />
      <SectionDivider />
      <StudentMomentSection />
      <SectionDivider />
      <ElaraListensSection />
      <SectionDivider />
      <TeacherClaritySection />
      <SectionDivider />
      <ParentTrustSection />
      <SectionDivider />
      <LearningReportSection />
      <SectionDivider />
      <EcosystemSection />
      <SectionDivider />
      <ClosingCTASection />
    </main>
  );
}

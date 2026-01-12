import { Hero } from '@/components/hero/Hero';
import { ProblemSection } from '@/components/problem/ProblemSection';
import { PhilosophySection } from '@/components/philosophy/PhilosophySection';
import { PerspectivesSection } from '@/components/perspectives/PerspectivesSection';
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
      <PerspectivesSection />
      <SectionDivider />
      <EcosystemSection />
      <SectionDivider />
      <ClosingCTASection />
    </main>
  );
}

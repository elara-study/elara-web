import { StudentMomentSection } from '@/components/student-moment/StudentMomentSection';
import { ElaraListensSection } from '@/components/listening/ElaraListensSection';
import { SectionDivider } from '@/components/visual/SectionDivider';

export default function StudentsPage() {
  return (
    <main>
      <StudentMomentSection />
      <SectionDivider />
      <ElaraListensSection />
      <SectionDivider />
    </main>
  );
}

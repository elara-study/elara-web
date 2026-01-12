'use client';

import { motion } from 'framer-motion';
import { BackgroundFlow } from '@/components/BackgroundFlow';
import { GlassSystemStage } from '@/components/GlassSystemStage';
import { InsightCard } from '@/components/InsightCard';

export function TeacherClaritySection() {
  return (
    <section id="teacher-clarity" className="py-24 px-6 relative overflow-hidden">
      <BackgroundFlow variant="section" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Teaching, finally organized.
          </h2>

          <GlassSystemStage size="md" perspective="Teacher" className="p-8">
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Teaching is more than delivering lessons.<br />
                It&apos;s planning, observing, adjusting, and supporting — often all at once.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <InsightCard
                  type="strength"
                  title="Structure"
                  body="Elara brings structure to this complexity. Lessons, roadmaps, assignments, and recorded materials live in one place."
                />
                <InsightCard
                  type="support"
                  title="Clarity"
                  body="Each student has a clear learning story — not scattered notes or forgotten moments."
                />
                <InsightCard
                  type="action"
                  title="Insight"
                  body="Past conversations are summarized. Struggles are highlighted. Progress is easy to follow."
                />
              </div>
            </div>
          </GlassSystemStage>

          <p
            className="text-xl leading-relaxed pt-4"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            Elara removes the noise, so teachers can focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  );
}

function signalRow(name: string, status: string, color: string) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: '#2563EB' }}
          aria-hidden="true"
        />
        <span
          style={{
            fontFamily: 'var(--font-nunito)',
            color: 'var(--color-text-primary)',
          }}
        >
          {name}
        </span>
      </div>
      <span
        className="text-xs font-semibold"
        style={{
          fontFamily: 'var(--font-nunito)',
          color,
        }}
      >
        {status}
      </span>
    </div>
  );
}


'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function LearningReportSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-main)' }}>
      <VisualAccent position="right" variant="circle" color="primary" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Guidance, not judgment.
          </h2>

          <div
            className="p-8 rounded-lg"
            style={{
              backgroundColor: 'var(--color-background-card)',
              border: '1px solid var(--color-divider)',
            }}
          >
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Strengths
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Every Elara Learning Report begins by recognizing what the student is doing well — moments of progress, effort, and growth that deserve to be seen.
                </motion.p>
              </div>

              <div
                className="pt-6 border-t"
                style={{ borderColor: 'var(--color-divider)' }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Needs Support
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  From there, it gently explores where support is needed. Not as shortcomings, but as natural steps in the learning journey.
                </motion.p>
              </div>

              <div
                className="pt-6 border-t"
                style={{ borderColor: 'var(--color-divider)' }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Next Steps
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Clear, thoughtful next steps help students move forward, teachers adapt, and parents offer the right kind of support.
                </p>
              </div>
            </div>
          </div>

          <p
            className="text-xl leading-relaxed pt-4"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            Learning is understood — together.
          </p>
        </div>
      </div>
    </section>
  );
}


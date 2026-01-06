'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-card)' }}>
      <VisualAccent position="right" variant="circle" color="secondary" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Learning grows through thinking, not answers.
          </h2>

          <div className="space-y-4">
            <div
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-background-main)',
                borderLeftColor: 'var(--color-brand-primary)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                We believe students learn best when they are guided — not rushed
                to conclusions.
              </p>
            </div>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-background-main)',
                borderLeftColor: 'var(--color-brand-primary)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                When struggle is supported, not removed.
              </p>
            </div>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-background-main)',
                borderLeftColor: 'var(--color-brand-primary)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                When questions are treated as signals, not interruptions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-background-main)',
                borderLeftColor: 'var(--color-brand-secondary)',
              }}
            >
              <p
                className="text-lg leading-relaxed font-semibold"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-primary)',
                }}
              >
                This is why Elara exists.
              </p>
            </motion.div>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-background-main)',
                borderLeftColor: 'var(--color-brand-primary)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Elara does not replace teachers. She does not shortcut learning.
                She listens, guides, and connects — while the system ensures
                balance, clarity, and trust.
              </p>
            </div>
          </div>

          <p
            className="text-xl leading-relaxed pt-4"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            Technology should amplify learning, not override it.
          </p>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function ParentTrustSection() {
  return (
    <section id="parent-trust" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-card)' }}>
      <VisualAccent position="left" variant="blob" color="primary" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Progress you can understand.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-main)',
                border: '1px solid var(--color-divider)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Before Elara
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Parents want to support their children — but grades alone don't tell the full story.
              </p>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-main)',
                border: '1px solid var(--color-divider)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                With Elara
              </h3>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Elara provides clear, thoughtful learning reports that explain where understanding is growing and where support is needed.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-lg leading-relaxed font-semibold"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-primary)',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--color-brand-primary)',
                  textUnderlineOffset: '2px',
                }}
              >
                Not just what changed, but why.
              </motion.p>
              <p
                className="text-lg leading-relaxed mt-4"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                These insights are generated with intelligence and validated by teachers — combining clarity with human judgment.
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
            Parents become informed partners in the learning journey.
          </p>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function StudentMomentSection() {
  return (
    <section id="student-moment" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-main)' }}>
      <VisualAccent position="right" variant="blob" color="primary" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Every great question is the beginning of growth.
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div
                className="text-2xl font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                01
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-lg leading-relaxed flex-1"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                When a student reaches a moment of uncertainty, Elara steps in — not with answers, but with direction.
              </motion.p>
            </div>

            <div className="flex gap-6 items-start">
              <div
                className="text-2xl font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                02
              </div>
              <div className="flex-1 space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  She asks the right questions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  She encourages reflection.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  She keeps the mind moving.
                </motion.p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div
                className="text-2xl font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                03
              </div>
              <div className="flex-1 space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  The student doesn't memorize.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.0 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  The student thinks.
                </motion.p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div
                className="text-2xl font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                04
              </div>
              <div className="flex-1 space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.2 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Over time, curiosity replaces hesitation.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.4 }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Confidence follows understanding.
                </motion.p>
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
            This is how learning reaches higher.
          </p>
        </div>
      </div>
    </section>
  );
}


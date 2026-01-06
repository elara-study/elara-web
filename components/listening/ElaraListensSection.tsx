'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function ElaraListensSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-card)' }}>
      <VisualAccent position="left" variant="circle" color="primary" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2
              className="text-[36px] font-semibold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-comfortaa)',
                color: 'var(--color-text-primary)',
              }}
            >
              Every question matters.
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-secondary)',
              }}
            >
              As students explore and ask, Elara listens. Not just to answers — but to uncertainty, curiosity, and confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-main)',
                border: '1px solid var(--color-divider)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Signals
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
                Each question becomes a signal.
              </motion.p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-main)',
                border: '1px solid var(--color-divider)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Patterns
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Over time, these signals form patterns that reveal where understanding grows — and where it needs support.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-main)',
                border: '1px solid var(--color-divider)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Insights
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Nothing is lost. Nothing is ignored.
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
            With every question, clarity grows.
          </p>
        </div>
      </div>
    </section>
  );
}


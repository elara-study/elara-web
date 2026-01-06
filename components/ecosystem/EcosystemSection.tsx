'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function EcosystemSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <VisualAccent position="center" variant="blob" color="primary" />
      <VisualAccent position="left" variant="circle" color="secondary" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-16">
          <h2
            className="text-[36px] font-semibold leading-tight text-center"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Learning works best when everyone is connected.
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
              <div
                className="p-6 rounded-lg text-center"
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
                  Student
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Students learn by thinking.
                </p>
              </div>

              <div
                className="p-8 rounded-lg text-center order-first md:order-none"
                style={{
                  backgroundColor: 'var(--color-background-main)',
                  border: '2px solid var(--color-brand-primary)',
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Elara
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Elara sits at the center — listening, connecting, and translating learning into shared insight.
                </p>
              </div>

              <div
                className="p-6 rounded-lg text-center"
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
                  Teacher
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Teachers guide with clarity.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="p-6 rounded-lg text-center max-w-xs"
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
                  Parent
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Parents support with understanding.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-lg text-center max-w-3xl mx-auto"
            style={{
              backgroundColor: 'var(--color-background-main)',
              border: '1px solid var(--color-divider)',
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-secondary)',
              }}
            >
              No one is replaced. No role is diminished. Each part of the learning journey strengthens the others.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl leading-relaxed pt-4 text-center"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            Connected learning moves everyone forward — toward what's possible.
          </motion.p>
        </div>
      </div>
    </section>
  );
}


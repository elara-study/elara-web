'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ecosystemSvg from '@/assets/ecosystem.svg';

export function EcosystemSection() {

  return (
    <section id="ecosystem" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-card)' }}>
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

          {/* Ecosystem Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-5xl">
              <Image
                src={ecosystemSvg}
                alt="Elara Ecosystem - Connecting Students, Teachers, and Parents"
                width={1200}
                height={500}
                className="w-full h-auto"
                style={{ height: '430px' }}
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl leading-relaxed pt-4 text-center max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            No one is replaced. No role is diminished. Each part of the learning journey strengthens the others.
          </motion.p>
        </div>
      </div>
    </section>
  );
}


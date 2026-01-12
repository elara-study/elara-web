'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function ProblemSection() {
  const problems = [
    {
      id: 1,
      title: 'Uncertainty',
      subtitle: 'Moving Forward',
      text: "Students often move forward even when they're unsure.",
      size: 'normal',
    },
    {
      id: 2,
      title: 'Silence',
      subtitle: 'Hidden Questions',
      text: "Questions stay unasked. Confusion stays hidden.",
      size: 'normal',
    },
    {
      id: 3,
      title: 'Space',
      subtitle: 'No Room to Pause',
      text: "Not because students don't care — but because there isn't always space to pause.",
      size: 'tall',
    },
    {
      id: 4,
      title: 'Doubt',
      subtitle: 'Growing Silence',
      text: "Over time, this silence turns into doubt.",
      size: 'wide',
    },
    {
      id: 5,
      title: 'Confidence',
      subtitle: 'Fading Away',
      text: "Confidence fades long before grades reflect it.",
      size: 'normal',
    },
    {
      id: 6,
      title: 'Learning',
      subtitle: 'Quiet Fade',
      text: "Learning doesn't fail loudly. It fades quietly.",
      size: 'normal',
    },
  ];

  return (
    <section id="problem" className="relative py-32 px-6 overflow-hidden">
      <VisualAccent position="left" variant="blob" color="primary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-semibold leading-tight text-center"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Most learning struggles go unseen.
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {problems.map((problem, index) => {
              const sizeClasses = {
                normal: 'md:col-span-1 md:row-span-1',
                tall: 'md:col-span-1 md:row-span-2',
                wide: 'md:col-span-2 md:row-span-1',
              };

              return (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl bg-white/95 border shadow-sm p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm hover:shadow-md transition-shadow ${sizeClasses[problem.size as keyof typeof sizeClasses]}`}
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <div className="space-y-3">
                    <h3
                      className="text-xl md:text-2xl font-semibold"
                      style={{
                        fontFamily: 'var(--font-comfortaa)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {problem.title}
                    </h3>
                    <p
                      className="text-sm md:text-base font-medium"
                      style={{
                        fontFamily: 'var(--font-nunito)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {problem.subtitle}
                    </p>
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed mt-4"
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {problem.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

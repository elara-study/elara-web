'use client';

import { motion } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function PhilosophySection() {
  const philosophyItems = [
    {
      id: 1,
      title: 'Guidance',
      subtitle: 'Not Rushed',
      text: 'We believe students learn best when they are guided — not rushed to conclusions.',
      size: 'normal',
    },
    {
      id: 2,
      title: 'Support',
      subtitle: 'Struggle Supported',
      text: 'When struggle is supported, not removed.',
      size: 'normal',
    },
    {
      id: 3,
      title: 'Signals',
      subtitle: 'Questions Matter',
      text: 'When questions are treated as signals, not interruptions.',
      size: 'normal',
    },
    {
      id: 4,
      title: 'Elara',
      subtitle: '',
      text: 'This is why Elara exists.',
      size: 'centerTall',
    },
    {
      id: 5,
      title: 'Connection',
      subtitle: 'Listening & Guiding',
      text: 'Elara does not replace teachers. She does not shortcut learning.',
      size: 'normal',
    },
    {
      id: 6,
      title: 'Technology',
      subtitle: 'Amplifying Learning',
      text: 'Technology should amplify learning, not override it.',
      size: 'normal',
    },
    {
      id: 7,
      title: 'Empowerment',
      subtitle: 'Together We Learn',
      text: 'When everyone has the right information at the right time, learning becomes more meaningful.',
      size: 'normal',
    },
  ];

  return (
    <section id="philosophy" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-card)' }}>
      <VisualAccent position="right" variant="circle" color="secondary" />
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
            Learning grows through thinking, not answers.
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {philosophyItems.map((item, index) => {
              // Explicit positioning: 3 items on left, 1 tall item in center, 3 items on right
              let gridClasses = '';
              
              if (item.id === 1) {
                // Item 1 - top left
                gridClasses = 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2';
              } else if (item.id === 2) {
                // Item 2 - middle left
                gridClasses = 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3';
              } else if (item.id === 3) {
                // Item 3 - bottom left
                gridClasses = 'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4';
              } else if (item.id === 4) {
                // Item 4 - center, tall, spanning 3 rows
                gridClasses = 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4';
              } else if (item.id === 5) {
                // Item 5 - top right
                gridClasses = 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2';
              } else if (item.id === 6) {
                // Item 6 - middle right
                gridClasses = 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3';
              } else if (item.id === 7) {
                // Item 7 - bottom right
                gridClasses = 'md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4';
              }

              const isCenterCard = item.id === 4;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md transition-all ${isCenterCard ? 'justify-center items-center text-center' : 'justify-between'} ${gridClasses}`}
                  style={{
                    backgroundColor: '#FFFFFF', // white
                    borderColor: '#E2E8F0', // neutral.200 - divider
                  }}
                >
                  <div className={`space-y-3 ${isCenterCard ? 'w-full' : ''}`}>
                    <h3
                      className={isCenterCard ? 'text-2xl md:text-3xl lg:text-4xl font-semibold' : 'text-xl md:text-2xl font-semibold'}
                      style={{
                        fontFamily: 'var(--font-comfortaa)',
                        color: 'var(--color-text-primary)', // text primary
                      }}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p
                        className={isCenterCard ? 'text-base md:text-lg font-medium' : 'text-sm md:text-base font-medium'}
                        style={{
                          fontFamily: 'var(--font-nunito)',
                          color: 'var(--color-text-secondary)', // text secondary
                        }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <p
                    className={isCenterCard ? 'text-lg md:text-xl lg:text-2xl leading-relaxed mt-4' : 'text-base md:text-lg leading-relaxed mt-4'}
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: 'var(--color-text-secondary)', // text secondary
                    }}
                  >
                    {item.text}
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


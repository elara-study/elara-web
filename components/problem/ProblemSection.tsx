 'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { VisualAccent } from '@/components/visual/VisualAccent';
import CardSwap, { Card } from './CardSwap';

export function ProblemSection() {
  const cardData = [
    {
      id: 1,
      text: "In traditional education, students often move forward even when they're unsure. Questions stay unasked. Confusion stays hidden. Not because students don't care — but because there isn't always space to pause.",
    },
    {
      id: 2,
      text: 'Over time, this silence turns into doubt.',
    },
    {
      id: 3,
      text: 'Confidence fades long before grades reflect it.',
    },
    {
      id: 4,
      text: "Learning doesn't fail loudly.\nIt fades quietly.",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="relative"
    >
      <VisualAccent position="left" variant="blob" color="primary" />

      {/* Pinned-like container so the deck feels anchored while scrolling */}
      <div className="relative" style={{ minHeight: '180vh' }}>
        <div
          className="sticky top-0 h-screen flex flex-col"
          style={{ paddingTop: '120px', paddingBottom: '80px' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex items-center">
            {/* Two-column layout: Text on left, Cards on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full items-center">
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2
                  className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-tight"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Most learning struggles go unseen.
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Just look at it go!
                </p>
              </div>

              {/* Right: Card Stack - Large and subtly off to the right */}
              <div className="relative flex items-center justify-center lg:justify-end overflow-hidden lg:overflow-visible">
                <div
                  className="relative translate-x-0 lg:translate-x-6 xl:translate-x-16 scale-75 sm:scale-90 lg:scale-100"
                  style={{ 
                    width: 'min(100%, 560px)', 
                    height: 'min(360px, calc(100vw * 0.64))',
                    maxWidth: '560px',
                    maxHeight: '360px',
                  }}
                >
                  <CardSwap
                    width={560}
                    height={360}
                    cardDistance={80}
                    verticalDistance={50}
                    delay={5000}
                    skewAmount={0}
                    easing="linear"
                    pauseOnHover
                    isActive={isInView}
                  >
                    {cardData.map((card) => (
                      <Card
                        key={card.id}
                        customClass="bg-black/90 border-white/10 shadow-[0_24px_70px_rgba(15,23,42,0.8)]"
                      >
                        <div className="flex h-full w-full items-center justify-center px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8">
                          <p
                            className="text-sm sm:text-base lg:text-lg leading-relaxed text-center whitespace-pre-line"
                            style={{
                              fontFamily: 'var(--font-nunito)',
                              color: 'rgba(255,255,255,0.92)',
                            }}
                          >
                            {card.text}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

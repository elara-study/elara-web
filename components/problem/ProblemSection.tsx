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
          <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col">
            {/* Static Centered Headline */}
            <h2
              className="text-[36px] font-semibold leading-tight text-center mb-20"
              style={{
                fontFamily: 'var(--font-comfortaa)',
                color: 'var(--color-text-primary)',
              }}
            >
              Most learning struggles go unseen.
            </h2>

            {/* New card deck style using CardSwap */}
            <div className="relative w-full flex items-center justify-center flex-1">
              <CardSwap
                width={440}
                height={260}
                cardDistance={70}
                verticalDistance={40}
                delay={5000}
                skewAmount={0}
                easing="linear"
                pauseOnHover
                isActive={isInView}
              >
                {cardData.map((card) => (
                  <Card
                    key={card.id}
                    customClass="bg-black/90 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
                  >
                    <div className="flex h-full w-full items-center justify-center px-8 py-6">
                      <p
                        className="text-base leading-relaxed text-center whitespace-pre-line"
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
    </section>
  );
}

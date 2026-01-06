'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { VisualAccent } from '@/components/visual/VisualAccent';

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cardData = [
    {
      id: 1,
      text: "In traditional education, students often move forward even when they're unsure. Questions stay unasked. Confusion stays hidden. Not because students don't care — but because there isn't always space to pause.",
      slideDirection: 'right' as const,
    },
    {
      id: 2,
      text: "Over time, this silence turns into doubt.",
      slideDirection: 'left' as const,
    },
    {
      id: 3,
      text: "Confidence fades long before grades reflect it.",
      slideDirection: 'right' as const,
    },
    {
      id: 4,
      text: "Learning doesn't fail loudly.\nIt fades quietly.",
      slideDirection: 'left' as const,
    },
  ];

  // Card flip progress - each card gets its own scroll phase
  const card1Flip = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const card2Flip = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const card3Flip = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const card4Flip = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Card 1: Starts in stack (right), flips and moves to left
  const card1RotateY = useTransform(card1Flip, [0, 1], [0, 180]);
  // X: starts at right (200px), moves to left (-200px) during flip
  const card1X = useTransform(card1Flip, [0, 0.5, 1], [200, 0, -200]);
  // Y: starts stacked on right (0), then moves to left stack position (stacked vertically)
  const card1Y = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0, -120]);
  const card1Z = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.5], [4, 4, 10, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.05, 1], [1, 1, 1]);

  // Card 2: Starts in stack (right), flips and moves to left
  const card2RotateY = useTransform(card2Flip, [0, 1], [0, 180]);
  const card2X = useTransform(card2Flip, [0, 0.5, 1], [200, 0, -200]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [4, 0, -80]);
  const card2Z = useTransform(scrollYProgress, [0.25, 0.45, 0.5, 0.75], [3, 4, 10, 2]);
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 1], [1, 1, 1]);

  // Card 3: Starts in stack (right), flips and moves to left
  const card3RotateY = useTransform(card3Flip, [0, 1], [0, 180]);
  const card3X = useTransform(card3Flip, [0, 0.5, 1], [200, 0, -200]);
  const card3Y = useTransform(scrollYProgress, [0.5, 0.75, 1], [8, 0, -40]);
  const card3Z = useTransform(scrollYProgress, [0.5, 0.7, 0.75, 1], [2, 4, 10, 3]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 1], [1, 1, 1]);

  // Card 4: Starts in stack (right), flips and moves to left
  const card4RotateY = useTransform(card4Flip, [0, 1], [0, 180]);
  const card4X = useTransform(card4Flip, [0, 0.5, 1], [200, 0, -200]);
  const card4Y = useTransform(scrollYProgress, [0.75, 1], [12, 0]);
  const card4Z = useTransform(scrollYProgress, [0.75, 0.95, 1], [1, 4, 4]);
  const card4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [1, 1, 1]);

  const cardTransforms = [
    { rotateY: card1RotateY, x: card1X, y: card1Y, z: card1Z, opacity: card1Opacity },
    { rotateY: card2RotateY, x: card2X, y: card2Y, z: card2Z, opacity: card2Opacity },
    { rotateY: card3RotateY, x: card3X, y: card3Y, z: card3Z, opacity: card3Opacity },
    { rotateY: card4RotateY, x: card4X, y: card4Y, z: card4Z, opacity: card4Opacity },
  ];

  return (
    <section 
      className="relative" 
      style={{ 
        backgroundColor: 'var(--color-background-main)',
      }}
    >
      <VisualAccent position="left" variant="blob" color="primary" />
      
      {/* Scroll container that provides the scroll distance */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: '600vh' }}
      >
        {/* Pinned Container - stays in view while scrolling through section */}
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

            {/* Card Deck Container - Stack on right, flipped cards on left */}
            <div 
              className="relative w-full flex items-center justify-center flex-1"
              style={{ 
                minHeight: '500px',
                perspective: '1000px',
              }}
            >
              {cardData.map((card, index) => {
                const transforms = cardTransforms[index];
                // Stack offset for cards in the deck (right side)
                const stackOffset = index * 4;

                return (
                  <motion.div
                    key={card.id}
                    style={{
                      x: transforms.x,
                      y: transforms.y !== undefined ? transforms.y : stackOffset,
                      zIndex: transforms.z,
                      opacity: transforms.opacity,
                      transformStyle: 'preserve-3d',
                    }}
                    className="absolute"
                  >
                    {/* Card with 3D flip - Vertical portrait aspect ratio */}
                    <motion.div
                      className="relative rounded-2xl"
                      style={{
                        width: '280px',
                        height: '400px',
                        rotateY: transforms.rotateY,
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      }}
                    >
                      {/* Back Side - Elara Logo */}
                      <div
                        className="absolute inset-0 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: 'var(--color-background-card)',
                          border: '1px solid var(--color-divider)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg)',
                        }}
                      >
                        <div
                          className="text-4xl font-semibold"
                          style={{
                            fontFamily: 'var(--font-comfortaa)',
                            color: 'var(--color-brand-primary)',
                            opacity: 0.6,
                          }}
                        >
                          Elara
                        </div>
                      </div>

                      {/* Front Side - Content */}
                      <div
                        className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center"
                        style={{
                          backgroundColor: 'var(--color-background-card)',
                          border: '1px solid var(--color-divider)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <p
                          className="text-base leading-relaxed text-center whitespace-pre-line"
                          style={{
                            fontFamily: 'var(--font-nunito)',
                            color: index === 3 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                          }}
                        >
                          {card.text}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

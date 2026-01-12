'use client';

import { VisualAccent } from '@/components/visual/VisualAccent';

export function ClosingCTASection() {
  return (
    <section id="closing-cta" className="py-32 px-6 relative overflow-hidden">
      <VisualAccent position="center" variant="blob" color="secondary" />
      <VisualAccent position="left" variant="circle" color="primary" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className="p-16 rounded-lg text-center"
          style={{
            backgroundColor: 'var(--color-background-card)',
            border: '2px solid var(--color-divider)',
          }}
        >
          <h2
            className="text-[36px] font-semibold leading-tight mb-8"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Learning, reimagined with care.
          </h2>

          <div
            className="space-y-6 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <p>
              Elara brings together thoughtful guidance, human insight, and
              intelligent systems — so learning can grow with clarity and
              purpose.
            </p>

            <p>
              This isn't about changing what education stands for.
              <br />
              It's about giving it the support it needs to move forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-10 py-4 rounded-lg font-semibold text-white transition-all backdrop-blur-md border text-lg"
              style={{
                fontFamily: 'var(--font-nunito)',
                backgroundColor: 'rgba(77, 106, 138, 0.7)',
                backdropFilter: 'blur(8px)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(77, 106, 138, 0.85)';
                e.currentTarget.style.backdropFilter = 'blur(12px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(77, 106, 138, 0.7)';
                e.currentTarget.style.backdropFilter = 'blur(8px)';
              }}
            >
              Explore Elara
            </button>

            <button
              className="px-10 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm border bg-white/10 text-lg"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-primary)',
                backdropFilter: 'blur(4px)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.backdropFilter = 'blur(8px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.backdropFilter = 'blur(4px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              Start the conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


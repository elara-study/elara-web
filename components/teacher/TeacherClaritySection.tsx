'use client';

import { VisualAccent } from '@/components/visual/VisualAccent';

export function TeacherClaritySection() {
  return (
    <section id="teacher-clarity" className="py-24 px-6 relative overflow-hidden">
      <VisualAccent position="right" variant="blob" color="secondary" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
          >
            Teaching, finally organized.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-card)',
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
                Structure
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Elara brings structure to this complexity. Lessons, roadmaps, assignments, and recorded materials live in one place.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-card)',
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
                Clarity
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Each student has a clear learning story — not scattered notes or forgotten moments.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-background-card)',
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
                Insight
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Past conversations are summarized. Struggles are highlighted. Progress is easy to follow.
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
            Elara removes the noise, so teachers can focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  );
}


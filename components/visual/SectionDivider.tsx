'use client';

export function SectionDivider() {
  return (
    <div className="relative h-px overflow-hidden" style={{ backgroundColor: 'var(--color-divider)' }}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-brand-primary), transparent)',
          opacity: 0.3,
        }}
      />
    </div>
  );
}


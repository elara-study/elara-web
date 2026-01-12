'use client';

import React from 'react';
import type { Perspective } from './PerspectiveSwitcher';

export interface GlassSystemStageProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  perspective?: Perspective;
  className?: string;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
}

const sizePadding: Record<NonNullable<GlassSystemStageProps['size']>, string> = {
  lg: 'p-8 md:p-10',
  md: 'p-6 md:p-8',
  sm: 'p-4 md:p-5',
};

export function GlassSystemStage({
  title,
  subtitle,
  children,
  size = 'md',
  perspective,
  className = '',
  headerRight,
  footer,
}: GlassSystemStageProps) {
  const accentColor =
    perspective === 'Student'
      ? '#3B82F6'
      : perspective === 'Teacher'
      ? '#0F172A'
      : perspective === 'Parent'
      ? '#22C55E'
      : '#0F172A';

  return (
    <section
      className={`bg-glass-surface rounded-3xl border shadow-[0_24px_80px_rgba(15,23,42,0.25)] ${sizePadding[size]} ${className}`}
      style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}
    >
      {(title || subtitle || headerRight) && (
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            {title && (
              <h3
                className="text-lg md:text-xl font-semibold tracking-tight"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: 'var(--color-text-primary)',
                }}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                className="text-xs md:text-sm"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
          {headerRight && (
            <div className="flex items-center gap-2 text-xs md:text-sm">
              {headerRight}
            </div>
          )}
          {/* Accent bar echoes Figma top chrome; kept minimal to avoid clutter */}
          {!headerRight && !title && !subtitle && (
            <div
              className="ml-auto h-1 w-16 rounded-full opacity-70"
              style={{ background: accentColor }}
            />
          )}
        </header>
      )}

      <div className="relative">{children}</div>

      {footer && <footer className="mt-6">{footer}</footer>}
    </section>
  );
}


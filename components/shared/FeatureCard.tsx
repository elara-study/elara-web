'use client';

import React from 'react';

export interface FeatureCardProps {
  title: string;
  className?: string;
}

export function FeatureCard({ title, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`rounded-xl bg-white/80 border border-slate-100 px-6 py-5 shadow-sm ${className}`}
      style={{ backdropFilter: 'blur(16px)' }}
    >
      <p
        className="text-sm md:text-base font-semibold text-center leading-relaxed"
        style={{
          fontFamily: 'var(--font-nunito)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </p>
    </div>
  );
}

'use client';

import React from 'react';

export type BackgroundFlowVariant = 'hero' | 'section' | 'class-pulse' | 'growth';

export interface BackgroundFlowProps {
  variant?: BackgroundFlowVariant;
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundFlow({
  variant = 'section',
  className = '',
  children,
}: BackgroundFlowProps) {
  const variantClass =
    variant === 'hero'
      ? 'bg-flow-hero'
      : variant === 'class-pulse'
      ? 'bg-flow-class-pulse'
      : variant === 'growth'
      ? 'bg-flow-growth'
      : 'bg-flow-section';

  return (
    <div className={`relative ${variantClass} ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}


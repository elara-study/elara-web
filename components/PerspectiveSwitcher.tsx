'use client';

import { motion } from 'framer-motion';
import React from 'react';

export type Perspective = 'Student' | 'Teacher' | 'Parent';

export interface PerspectiveSwitcherProps {
  value: Perspective;
  onChange: (value: Perspective) => void;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

const OPTIONS: Perspective[] = ['Student', 'Teacher', 'Parent'];

const sizeClasses: Record<NonNullable<PerspectiveSwitcherProps['size']>, string> =
  {
    lg: 'h-12 text-sm md:h-14 md:text-base',
    md: 'h-11 text-sm',
    sm: 'h-9 text-xs',
  };

export function PerspectiveSwitcher({
  value,
  onChange,
  size = 'lg',
  className = '',
}: PerspectiveSwitcherProps) {
  return (
    <div
      className={`relative inline-flex items-center rounded-full bg-white/60 border shadow-md px-1 ${sizeClasses[size]} ${className}`}
      style={{
        backdropFilter: 'blur(18px)',
        borderColor: 'rgba(255, 255, 255, 0.7)',
      }}
    >
      {OPTIONS.map((option) => {
        const isActive = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className="relative flex-1 h-full text-center font-semibold transition-colors"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
            }}
          >
            {isActive && (
              <motion.span
                layoutId="perspective-switcher-pill"
                className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] shadow-[0_8px_18px_rgba(37,99,235,0.45)]"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 28,
                }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        );
      })}
    </div>
  );
}


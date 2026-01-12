'use client';

import React from 'react';

export type PathVariant =
  | 'student-path'
  | 'class-pulse-wave'
  | 'growth-landscape'
  | 'ecosystem';

export interface PathNode {
  id: string;
  label: string;
  isCurrent?: boolean;
}

export interface PathVisualizationProps {
  variant: PathVariant;
  nodes?: PathNode[];
  currentStageId?: string;
  className?: string;
}

export function PathVisualization({
  variant,
  nodes,
  currentStageId,
  className = '',
}: PathVisualizationProps) {
  if (variant === 'student-path') {
    const effectiveNodes =
      nodes ??
      [
        { id: 'intro', label: 'Intro to Geometry' },
        { id: 'symmetry', label: 'Symmetry in Plants' },
        { id: 'geometry-nature', label: 'The Geometry of Nature', isCurrent: true },
      ];

    return (
      <div
        className={`relative w-full rounded-3xl bg-gradient-to-b from-white/90 to-sky-50/90 px-6 py-8 overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.45),_transparent_55%)] opacity-70" />
        <div className="relative z-10 flex items-center justify-between gap-4">
          {effectiveNodes.map((node, index) => {
            const isCurrent =
              node.isCurrent || node.id === currentStageId || index === effectiveNodes.length - 1;
            return (
              <div key={node.id} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative flex items-center justify-center w-full">
                  {index !== 0 && (
                    <div className="absolute left-0 right-1/2 h-1 rounded-full bg-sky-200" />
                  )}
                  {index !== effectiveNodes.length - 1 && (
                    <div className="absolute left-1/2 right-0 h-1 rounded-full bg-sky-200" />
                  )}
                  <div
                    className={`relative flex items-center justify-center rounded-full ${
                      isCurrent ? 'h-11 w-11 bg-sky-500 shadow-lg' : 'h-8 w-8 bg-white'
                    }`}
                    style={{
                      boxShadow: isCurrent
                        ? '0 0 40px rgba(59,130,246,0.7)'
                        : '0 8px 18px rgba(15,23,42,0.12)',
                    }}
                  >
                    {isCurrent && (
                      <span className="text-sm font-semibold text-white" aria-hidden="true">
                        6
                      </span>
                    )}
                  </div>
                </div>
                <p
                  className="mt-1 text-[11px] md:text-xs text-center leading-snug"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {node.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'class-pulse-wave') {
    return (
      <div className={`relative w-full overflow-hidden rounded-3xl ${className}`}>
        <div className="bg-flow-class-pulse" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 640 180"
          aria-hidden="true"
        >
          {/* Multi-layered waves approximate the Figma Class Pulse motif */}
          <path
            d="M0 120 Q80 80 160 100 T320 110 T480 90 T640 110 V180 H0 Z"
            fill="url(#waveGradientPrimary)"
            opacity="0.7"
          />
          <path
            d="M0 130 Q80 90 160 110 T320 120 T480 100 T640 120 V180 H0 Z"
            fill="url(#waveGradientSecondary)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="waveGradientPrimary" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#BFDBFE" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="waveGradientSecondary" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#DBEAFE" />
              <stop offset="1" stopColor="#93C5FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'growth-landscape') {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-sky-100 via-emerald-50 to-white px-6 py-8 ${className}`}
      >
        <div className="absolute inset-x-6 bottom-6 h-32 bg-flow-growth" />
        <div className="relative z-10 flex items-end justify-between gap-6">
          <div className="flex-1 flex items-center justify-between text-[11px] md:text-xs">
            {['Start', 'Improving', 'Achieving', 'Mastery'].map((stage, index) => (
              <div key={stage} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  {index === 0 && (
                    <span className="text-xs text-slate-500" aria-hidden="true">
                      ▶
                    </span>
                  )}
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: index === 3 ? '#1D4ED8' : 'var(--color-text-secondary)',
                    }}
                  >
                    {stage}
                  </span>
                </div>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-sky-300 to-emerald-300" />
              </div>
            ))}
          </div>

          {/* Stylized tree at Mastery end of the landscape */}
          <div className="flex items-end">
            <div className="relative h-28 w-24">
              <div className="absolute inset-x-6 bottom-0 h-3 rounded-full bg-emerald-300/70 blur-sm" />
              <div className="absolute left-1/2 bottom-3 h-16 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500 to-emerald-800" />
              <div className="absolute inset-x-0 bottom-12 h-16 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 blur-[2px]" />
              {/* Simplified leaf clusters */}
              <div className="absolute -top-1 left-2 h-7 w-7 rounded-full bg-emerald-400 shadow-sm" />
              <div className="absolute -top-2 right-1 h-7 w-7 rounded-full bg-emerald-500 shadow-sm" />
              <div className="absolute top-4 left-6 h-7 w-7 rounded-full bg-amber-300 shadow-sm" />
              <div className="absolute top-4 right-5 h-7 w-7 rounded-full bg-orange-300 shadow-sm" />
              <div className="absolute top-7 left-0 h-7 w-7 rounded-full bg-lime-300 shadow-sm" />
              <div className="absolute top-7 right-0 h-7 w-7 rounded-full bg-rose-300 shadow-sm" />
              {/* Person icon at top of tree */}
              <div className="absolute -top-4 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#2563EB] flex items-center justify-center text-[10px] font-semibold text-white">
                6
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Ecosystem orbit variant
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-b from-sky-50 to-white py-12 ${className}`}
    >
      <div className="relative h-56 w-56 md:h-64 md:w-64">
        <div className="absolute inset-10 rounded-full border border-sky-100" />
        <div className="absolute inset-5 rounded-full border border-sky-100/80" />
        <div className="absolute inset-0 rounded-full border border-sky-100/50" />

        <div className="absolute inset-14 rounded-full bg-white shadow-[0_18px_45px_rgba(148,163,184,0.45)] flex items-center justify-center">
          <span
            className="text-sm md:text-base font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: '#0F172A' }}
          >
            Elara
          </span>
        </div>

        {['Student', 'Teacher', 'Parent'].map((label, index) => {
          const angle = (index / 3) * Math.PI * 2 - Math.PI / 2;
          const radius = 110;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={label}
              className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-xs font-semibold"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-primary)',
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}


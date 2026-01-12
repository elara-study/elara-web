'use client';

import React from 'react';

export type InsightCardType =
  | 'signal'
  | 'strength'
  | 'support'
  | 'alert'
  | 'mastery'
  | 'action';

export interface InsightCardProps {
  type: InsightCardType;
  icon?: React.ReactNode;
  title: string;
  body?: string;
  badge?: string | number;
  statusColor?: string;
  actionIcon?: React.ReactNode;
  className?: string;
}

const accentByType: Record<InsightCardType, string> = {
  signal: '#0EA5E9',
  strength: '#2563EB',
  support: '#10B981',
  alert: '#F97316',
  mastery: '#FACC15',
  action: '#4B5563',
};

export function InsightCard({
  type,
  icon,
  title,
  body,
  badge,
  statusColor,
  actionIcon,
  className = '',
}: InsightCardProps) {
  const accent = statusColor ?? accentByType[type];

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/80 border border-white/60 shadow-sm px-4 py-3 md:px-5 md:py-4 ${className}`}
      style={{ backdropFilter: 'blur(16px)' }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold text-white shrink-0"
        style={{ background: accent }}
      >
        {icon}
      </div>

      <div className="flex-1 space-y-0.5">
        <div className="flex items-center gap-2">
          <p
            className="text-xs md:text-sm font-semibold"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </p>
          {typeof badge !== 'undefined' && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] md:text-[11px] font-semibold"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: accent,
                backgroundColor: 'rgba(148, 163, 184, 0.12)',
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {body && (
          <p
            className="text-[11px] md:text-xs leading-snug"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {body}
          </p>
        )}
      </div>

      {actionIcon && (
        <div className="ml-1 text-slate-400" aria-hidden="true">
          {actionIcon}
        </div>
      )}
    </div>
  );
}


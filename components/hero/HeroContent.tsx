'use client';

import { motion } from 'framer-motion';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-semibold leading-tight tracking-tight max-w-3xl"
          style={{
            fontFamily: 'var(--font-comfortaa)',
            color: 'var(--color-text-primary)',
          }}
        >
          Learning should never lose its way.
        </motion.h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all backdrop-blur-md border border-white/20"
            style={{
              fontFamily: 'var(--font-nunito)',
              backgroundColor: 'rgba(77, 106, 138, 0.7)',
              backdropFilter: 'blur(8px)',
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
            Discover the approach
          </button>

          <button
            className="px-8 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm border border-white/30 bg-white/10"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: 'var(--color-text-primary)',
              backdropFilter: 'blur(4px)',
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
            See how it works
          </button>
        </div>

        {/* Supporting Line */}
        <p
          className="text-xs sm:text-sm leading-relaxed max-w-xl px-4"
          style={{
            fontFamily: 'var(--font-nunito)',
            color: 'var(--color-text-muted)',
          }}
        >
          We're building a new way to support learning — one that listens,
          guides, and connects everyone who matters.
        </p>
      </div>
    </div>
  );
}


'use client';

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20" style={{ backgroundColor: 'var(--color-background-main)' }}>
      <HeroBackground />
      <HeroContent />
    </section>
  );
}


'use client';

import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <HeroContent />
    </section>
  );
}


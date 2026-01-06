'use client';

import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      <HeroContent />
    </section>
  );
}


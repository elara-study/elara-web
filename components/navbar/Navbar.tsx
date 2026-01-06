'use client';

import PillNav, { PillNavItem } from './PillNav';

export function Navbar() {
  const navItems: PillNavItem[] = [
    {
      label: 'Home',
      href: '#',
      ariaLabel: 'Go to top',
    },
    {
      label: 'Philosophy',
      href: '#philosophy',
      ariaLabel: 'Scroll to Philosophy section',
    },
    {
      label: 'Students',
      href: '#student-moment',
      ariaLabel: 'Scroll to Students section',
    },
    {
      label: 'Teachers',
      href: '#teacher-clarity',
      ariaLabel: 'Scroll to Teachers section',
    },
    {
      label: 'Parents',
      href: '#parent-trust',
      ariaLabel: 'Scroll to Parents section',
    },
  ];

  return (
    <PillNav
      logo={
        <span
          className="text-lg font-semibold"
          style={{
            fontFamily: 'var(--font-comfortaa)',
            color: 'var(--pill-bg)',
          }}
        >
          elara
        </span>
      }
      items={navItems}
      className="backdrop-blur-lg bg-white/60 border border-white/30 rounded-2xl shadow-lg px-6"
      baseColor="rgba(255, 255, 255, 0.6)"
      pillColor="#0F172A"
      hoveredPillTextColor="#fff"
      pillTextColor="rgba(255, 255, 255, 0.9)"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
}


'use client';

import PillNav, { PillNavItem } from './PillNav';

export function Navbar() {
  const navItems: PillNavItem[] = [
    {
      label: 'Home',
      href: '/',
      ariaLabel: 'Go to home page',
    },
    {
      label: 'Students',
      href: '/students',
      ariaLabel: 'Go to Students page',
    },
    {
      label: 'Teachers',
      href: '/teachers',
      ariaLabel: 'Go to Teachers page',
    },
    {
      label: 'Parents',
      href: '/parents',
      ariaLabel: 'Go to Parents page',
    },
  ];

  return (
    <PillNav
      logo={
        <span
          className="text-xl font-semibold"
          style={{
            fontFamily: 'var(--font-comfortaa)',
            color: '#FFFFFF',
          }}
        >
          elara
        </span>
      }
      items={navItems}
      className="backdrop-blur-xl bg-gradient-to-r from-[#4D6A8A] to-[#5A7A9A] border border-[#3F5770]/30 rounded-[35px] shadow-xl px-[9px] py-2"
      baseColor="#4D6A8A"
      pillColor="#FFFFFF"
      hoveredPillTextColor="#FFFFFF"
      pillTextColor="#0F172A"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
}


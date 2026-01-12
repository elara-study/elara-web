'use client';

import Link from 'next/link';

export function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Students', href: '/students' },
    { label: 'Teachers', href: '/teachers' },
    { label: 'Parents', href: '/parents' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border border-gray-200 rounded-b-[12px] shadow-lg px-0 py-[14px]">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8">
        <Link href="/" className="text-xl font-semibold" style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}>
          elara
        </Link>
        <ul className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/get-started"
          className="px-5 py-2 text-white text-sm font-medium rounded-lg transition-colors"
          style={{ 
            fontFamily: 'var(--font-nunito)',
            backgroundColor: '#4d6a8a'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3f5770'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4d6a8a'}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}


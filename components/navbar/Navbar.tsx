'use client';

import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 300; // Account for inset navbar height + top spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6"
      style={{
        fontFamily: 'var(--font-nunito)',
      }}
    >
      <div
        className="backdrop-blur-lg bg-white/60 border border-white/30 rounded-2xl shadow-lg px-6"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="text-2xl font-semibold cursor-pointer"
            style={{
              fontFamily: 'var(--font-comfortaa)',
              color: 'var(--color-text-primary)',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Elara
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-base font-medium transition-colors hover:opacity-70"
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('student-moment')}
              className="text-base font-medium transition-colors hover:opacity-70"
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Students
            </button>
            <button
              onClick={() => scrollToSection('teacher-clarity')}
              className="text-base font-medium transition-colors hover:opacity-70"
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Teachers
            </button>
            <button
              onClick={() => scrollToSection('parent-trust')}
              className="text-base font-medium transition-colors hover:opacity-70"
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Parents
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            style={{
              color: 'var(--color-text-primary)',
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-white/20 mt-2"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-base font-medium text-left px-4 py-2 transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('student-moment')}
                className="text-base font-medium text-left px-4 py-2 transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                Students
              </button>
              <button
                onClick={() => scrollToSection('teacher-clarity')}
                className="text-base font-medium text-left px-4 py-2 transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                Teachers
              </button>
              <button
                onClick={() => scrollToSection('parent-trust')}
                className="text-base font-medium text-left px-4 py-2 transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                Parents
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


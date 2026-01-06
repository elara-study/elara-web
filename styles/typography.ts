/**
 * Elara Typography System
 * Comfortaa for headlines, Nunito for body/UI
 */

export const typography = {
  // Font families
  fontHeadline: 'var(--font-comfortaa)',
  fontBody: 'var(--font-nunito)',

  // Font sizes
  h1: {
    fontSize: '52px',
    fontWeight: 600,
    fontFamily: 'var(--font-comfortaa)',
  },
  h2: {
    fontSize: '36px',
    fontWeight: 600,
    fontFamily: 'var(--font-comfortaa)',
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'var(--font-nunito)',
  },
  bodyLarge: {
    fontSize: '20px',
    fontWeight: 400,
    fontFamily: 'var(--font-nunito)',
  },
  bodyMedium: {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: 'var(--font-nunito)',
  },
  button: {
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'var(--font-nunito)',
  },
} as const;


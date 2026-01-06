/**
 * Motion Tokens
 * Timing constants for consistent animations
 */

export const motionTokens = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    ambient: 30, // For slow background drift (30-60s)
  },
  easing: {
    smooth: [0.4, 0, 0.2, 1], // Smooth, no bounce
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
} as const;


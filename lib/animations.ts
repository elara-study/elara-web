/**
 * Framer Motion Animation Variants
 * Reusable animation configurations
 */

import { motionTokens } from './motionTokens';

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const ambientDrift = {
  animate: {
    x: ['0%', '5%', '0%', '-5%', '0%'],
    y: ['0%', '3%', '0%', '-3%', '0%'],
  },
  transition: {
    duration: motionTokens.duration.ambient,
    ease: 'linear',
    repeat: Infinity,
  },
};


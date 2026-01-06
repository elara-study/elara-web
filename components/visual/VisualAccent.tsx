'use client';

import { motion } from 'framer-motion';

interface VisualAccentProps {
  position?: 'left' | 'right' | 'center';
  variant?: 'circle' | 'blob' | 'wave';
  color?: 'primary' | 'secondary';
}

export function VisualAccent({ 
  position = 'right', 
  variant = 'blob',
  color = 'primary' 
}: VisualAccentProps) {
  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  const colorStyles = {
    primary: 'rgba(77, 106, 138, 0.1)',
    secondary: 'rgba(232, 107, 66, 0.1)',
  };

  if (variant === 'circle') {
    return (
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 ${positionClasses[position]} w-64 h-64 rounded-full`}
        style={{
          background: `radial-gradient(circle, ${colorStyles[color]}, transparent)`,
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    );
  }

  if (variant === 'blob') {
    return (
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 ${positionClasses[position]} w-80 h-80`}
        style={{
          background: colorStyles[color],
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(60px)',
        }}
        animate={{
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute top-0 ${positionClasses[position]} w-full h-32`}
      style={{
        background: `linear-gradient(180deg, ${colorStyles[color]}, transparent)`,
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
      }}
    />
  );
}


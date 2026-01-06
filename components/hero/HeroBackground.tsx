'use client';

import { motion } from 'framer-motion';
import { ambientDrift } from '@/lib/animations';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 40%, rgba(77, 106, 138, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(232, 107, 66, 0.08) 0%, transparent 50%)`,
        }}
        animate={{
          x: ['0%', '5%', '0%', '-5%', '0%'],
          y: ['0%', '3%', '0%', '-3%', '0%'],
        }}
        transition={{
          duration: 45,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      
      {/* Floating abstract shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(77, 106, 138, 0.3), rgba(232, 107, 66, 0.2))',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-96 h-96 rounded-full opacity-15"
        style={{
          background: 'linear-gradient(225deg, rgba(77, 106, 138, 0.25), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}


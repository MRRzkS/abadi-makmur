'use client';

import { motion, type Variants } from 'framer-motion';

type Kind = 'door' | 'window' | 'frame' | 'partition' | 'shower' | 'measure' | 'install';

const strokes: Record<Kind, string[]> = {
  door: ['M7 28V4H25V28', 'M11 27V7L22 9V25L11 27Z', 'M18.5 17H19.5'],
  window: ['M5 6H27V26H5Z', 'M16 6V26', 'M5 16H27'],
  frame: ['M5 5H27V27H5Z', 'M9 9H23V23H9Z'],
  partition: ['M4 6H28V26H4Z', 'M12 6V26', 'M20 6V26'],
  shower: ['M7 27V11C7 6 11 3 16 3C21 3 25 7 25 12V27', 'M11 27V12C11 9 13 7 16 7C19 7 21 9 21 12V27', 'M16 12H17'],
  measure: ['M5 24L23 6L27 10L9 28L5 24Z', 'M19 9L23 13', 'M14 14L18 18', 'M9 19L13 23'],
  install: ['M6 27L18 15', 'M19 5L27 13L22 18L14 10L19 5Z', 'M5 28H12'],
};

const svgVariants: Variants = {
  hidden: { opacity: 0, y: 3 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
    },
  },
};

const pathVariants: Variants = {
  hidden: {
    strokeDashoffset: 1,
    opacity: 0.22,
  },
  visible: (index: number) => ({
    strokeDashoffset: 0,
    opacity: 1,
    transition: {
      duration: 0.72,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function LineGlyph({ kind, className = '' }: { kind: Kind; className?: string }) {
  return (
    <motion.svg
      className={`line-glyph ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      variants={svgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {strokes[kind].map((d, index) => (
        <motion.path
          key={`${kind}-${index}`}
          d={d}
          pathLength={1}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 1"
          vectorEffect="non-scaling-stroke"
          custom={index}
          variants={pathVariants}
        />
      ))}
    </motion.svg>
  );
}

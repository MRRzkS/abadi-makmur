'use client';

import { motion } from 'framer-motion';

type Kind = 'door' | 'window' | 'frame' | 'partition' | 'shower' | 'measure' | 'install';

const paths: Record<Kind, string[]> = {
  door: ['M5 21V3h14v18', 'M8 21V6h8v15', 'M13.5 13H14'],
  window: ['M4 4h16v16H4z', 'M12 4v16', 'M4 12h16'],
  frame: ['M4.5 4h15v16h-15z', 'M8 7.5h8v9H8z'],
  partition: ['M4 4h16v16H4z', 'M10 4v16', 'M16 4v16'],
  shower: ['M5 20V9a7 7 0 0 1 14 0v11', 'M8 20V9a4 4 0 0 1 8 0v11', 'M12 11h.01'],
  measure: ['M4 17L17 4l3 3L7 20 4 17Z', 'M14 7l3 3', 'M9 12l3 3'],
  install: ['M5 19l8.5-8.5', 'M13 6l5 5', 'M15 4l5 5-2 2-5-5 2-2Z', 'M4 20h7'],
};

export function LineGlyph({ kind, className = '' }: { kind: Kind; className?: string }) {
  return (
    <motion.svg
      className={`line-glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      {paths[kind].map((d, index) => (
        <motion.path
          key={`${kind}-${index}`}
          d={d}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          variants={{
            hidden: { pathLength: 0, opacity: 0.18 },
            visible: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.72, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </motion.svg>
  );
}

'use client';

import { motion } from 'framer-motion';

type Kind = 'door' | 'window' | 'frame' | 'partition' | 'shower' | 'measure' | 'install';

const paths: Record<Kind, string[]> = {
  door: ['M6 21V3h12v18', 'M9 21V6h6v15', 'M13 13h.01'],
  window: ['M4 4h16v16H4z', 'M12 4v16', 'M4 12h16'],
  frame: ['M5 4h14v16H5z', 'M8 7h8v10H8z'],
  partition: ['M4 4h16v16H4z', 'M10 4v16', 'M16 4v16'],
  shower: ['M5 20V8a7 7 0 0 1 14 0v12', 'M8 20V8a4 4 0 0 1 8 0v12', 'M12 10v.01'],
  measure: ['M4 17 17 4l3 3L7 20z', 'm10-10 3 3', 'm-6 6 3 3'],
  install: ['M5 18 14 9', 'm13 5 2 2', 'm-1-3 3 3-7 7-3-3z', 'M4 20h6'],
};

export function LineGlyph({ kind, className = '' }: { kind: Kind; className?: string }) {
  return (
    <motion.svg
      className={`line-glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {paths[kind].map((d, index) => (
        <motion.path
          key={`${kind}-${index}`}
          d={d}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0.2 },
            visible: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.85, delay: index * 0.08, ease: 'easeInOut' }}
        />
      ))}
    </motion.svg>
  );
}

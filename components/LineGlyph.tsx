'use client';

type Kind =
  | 'door'
  | 'window'
  | 'frame'
  | 'partition'
  | 'shower'
  | 'measure'
  | 'install'
  | 'navLeft'
  | 'navRight'
  | 'navUp'
  | 'navDown';

const strokes: Record<Kind, string[]> = {
  door: [
    'M5 21V3H19V21',
    'M8 21V6H16V21',
    'M13.5 13H14',
  ],
  window: [
    'M4 5H20V19H4Z',
    'M12 5V19',
    'M4 12H20',
  ],
  frame: [
    'M4 4H20V20H4Z',
    'M8 8H16V16H8Z',
  ],
  partition: [
    'M3 5H21V19H3Z',
    'M9 5V19',
    'M15 5V19',
  ],
  shower: [
    'M5 21V5H19V21',
    'M12 5V21',
    'M15 8C17.2 8 19 9.8 19 12',
    'M16 12H22',
    'M18 14L17.5 15',
    'M20 14L19.5 15',
    'M22 14L21.5 15',
  ],
  measure: [
    'M5 18L18 5L21 8L8 21L5 18Z',
    'M15 8L18 11',
    'M11 12L14 15',
    'M7.5 15.5L10.5 18.5',
  ],
  install: [
    'M5 19L13 11',
    'M15 5L19 9',
    'M14 6L18 10L15 13L11 9L14 6Z',
    'M4 20H10',
  ],
  navLeft: ['M15 6L9 12L15 18'],
  navRight: ['M9 6L15 12L9 18'],
  navUp: ['M6 15L12 9L18 15'],
  navDown: ['M6 9L12 15L18 9'],
};

export function LineGlyph({ kind, className = '' }: { kind: Kind; className?: string }) {
  return (
    <svg
      className={`line-glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {strokes[kind].map((d, index) => (
        <path
          key={`${kind}-${index}`}
          d={d}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

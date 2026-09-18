'use client';

// Shower uses the CC0 "Shower Pictogram 2" asset from SVG Repo:
 // https://www.svgrepo.com/svg/477619/shower-pictogram-2
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
  measure: [
    'M5 18L18 5L21 8L8 21L5 18Z',
    'M15 8L18 11',
    'M11 12L14 15',
    'M7.5 15.5L10.5 18.5',
  ],
  install: [
    'M14 4C11.2386 4 9 6.23858 9 9C9 9.86166 9.21801 10.6724 9.60178 11.3802L4 17L7 20L12.6198 14.3982C13.3276 14.782 14.1383 15 15 15C17.7614 15 20 12.7614 20 10C20 9.52602 19.934 9.06746 19.8106 8.63289L17 11.4435L12.5565 7L15.3671 4.18935C14.9325 4.06602 14.474 4 14 4Z',
  ],
  navLeft: ['M15 6L9 12L15 18'],
  navRight: ['M9 6L15 12L9 18'],
  navUp: ['M6 15L12 9L18 15'],
  navDown: ['M6 9L12 15L18 9'],
};

export function LineGlyph({ kind, className = '' }: { kind: Kind; className?: string }) {
  if (kind === 'shower') {
    return (
      <span
        className={`line-glyph external-svg-glyph shower-svg-repo ${className}`}
        aria-hidden="true"
      />
    );
  }

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

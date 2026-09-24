'use client';

import { useState } from 'react';

const items = [
  'Fabrikasi sesuai kebutuhan',
  'Hunian & komersial',
  'Aluminium + kaca',
  'Konsultasi langsung',
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="trust-marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="trust-marquee-item" key={item}>
          <span>{item}</span>
          <i aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  const [touchPaused, setTouchPaused] = useState(false);

  return (
    <section
      className="trust-rail"
      aria-label="Kekuatan layanan"
      data-touch-paused={touchPaused ? 'true' : 'false'}
      onPointerDown={(event) => {
        if (event.pointerType !== 'mouse') setTouchPaused(true);
      }}
      onPointerUp={() => setTouchPaused(false)}
      onPointerCancel={() => setTouchPaused(false)}
      onPointerLeave={() => setTouchPaused(false)}
    >
      <div className="trust-marquee-viewport">
        <div className="trust-marquee-track">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}

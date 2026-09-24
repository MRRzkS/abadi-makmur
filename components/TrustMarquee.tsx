"use client";

import { useState } from "react";

const items = [
  "Fabrikasi sesuai kebutuhan",
  "Hunian & komersial",
  "Aluminium + kaca",
  "Konsultasi langsung",
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
  const [paused, setPaused] = useState(false);
  const [touchPaused, setTouchPaused] = useState(false);

  return (
    <section
      className="trust-rail"
      aria-label="Kekuatan layanan"
      data-touch-paused={paused || touchPaused ? "true" : "false"}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") setTouchPaused(true);
      }}
      onPointerUp={() => setTouchPaused(false)}
      onPointerCancel={() => setTouchPaused(false)}
      onPointerLeave={() => setTouchPaused(false)}
    >
      <button
        type="button"
        className="trust-pause"
        aria-label={paused ? "Lanjutkan teks berjalan" : "Jeda teks berjalan"}
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {paused ? <path d="m9 5 10 7-10 7Z" /> : <path d="M8 5v14M16 5v14" />}
        </svg>
      </button>
      <div className="trust-marquee-viewport">
        <div className="trust-marquee-track">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}

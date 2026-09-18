'use client';

import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LineGlyph } from '@/components/LineGlyph';

const stages = [
  {
    title: 'Presisi ukuran',
    label: '01 · SURVEY',
    body: 'Dimensi bukaan, arah akses, kondisi dinding, dan ruang gerak dibaca lebih dulu sebelum sistem dipilih.',
  },
  {
    title: 'Sistem bukaan',
    label: '02 · MECHANISM',
    body: 'Swing, sliding, atau konfigurasi lain dipilih berdasarkan fungsi ruang—bukan sekadar mengikuti tren visual.',
  },
  {
    title: 'Kaca & proporsi',
    label: '03 · GLASS',
    body: 'Komposisi frame dan kaca dijaga agar bukaan tetap ringan secara visual, terang, dan proporsional.',
  },
  {
    title: 'Instalasi akhir',
    label: '04 · INSTALL',
    body: 'Hardware, alignment, sambungan, dan detail akhir dirapikan sebagai satu sistem yang konsisten.',
  },
];

const modes = [
  { key: 'swing', label: 'Swing', caption: 'Akses langsung dengan garis frame yang tegas.' },
  { key: 'sliding', label: 'Sliding', caption: 'Efisien untuk area yang perlu menghemat ruang gerak.' },
  { key: 'frameless', label: 'Frameless', caption: 'Kaca menjadi fokus utama untuk visual yang lebih ringan.' },
] as const;

export function SystemShowcase() {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<(typeof modes)[number]['key']>('sliding');
  const lastWheel = useRef(0);

  const step = useCallback((direction: number) => {
    setActive((current) => (current + direction + stages.length) % stages.length);
  }, []);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaY) < 30) return;
    const now = Date.now();
    if (now - lastWheel.current < 420) return;
    lastWheel.current = now;
    step(event.deltaY > 0 ? 1 : -1);
  }, [step]);

  return (
    <section className="section system-showcase-section" onWheel={handleWheel}>
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">INTERACTIVE SYSTEM VIEW</p>
            <h2>Satu bukaan.<br /><span>Empat lapisan keputusan.</span></h2>
          </div>
          <p>Scroll atau pilih tahap untuk melihat fokus sistem. Visual bergerak sebagai exploded view, sementara SVG tetap statis agar selalu tajam.</p>
        </div>

        <div className="system-showcase-grid">
          <div className="system-accordion liquid-glass">
            <div className="vertical-nav" aria-label="Navigasi tahap">
              <button onClick={() => step(-1)} aria-label="Tahap sebelumnya">
                <LineGlyph kind="navUp" />
              </button>
              <button onClick={() => step(1)} aria-label="Tahap berikutnya">
                <LineGlyph kind="navDown" />
              </button>
            </div>

            <div className="system-accordion-list">
              {stages.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    className={isActive ? 'system-tab active' : 'system-tab'}
                    onClick={() => setActive(index)}
                    aria-expanded={isActive}
                  >
                    <span className="system-tab-index">0{index + 1}</span>
                    <span className="system-tab-copy">
                      <span className="system-tab-label">{item.label}</span>
                      <strong>{item.title}</strong>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            className="system-tab-body"
                            initial={{ opacity: 0, height: 0, y: -4 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -4 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {item.body}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="system-visual-shell">
            <div className={`exploded-visual mode-${mode}`}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=86"
                alt="Referensi visual sistem aluminium dan kaca pada interior modern"
                width="1400"
                height="1000"
                loading="lazy"
              />
              <div className="exploded-shade" aria-hidden="true" />

              <motion.div
                className="exploded-layer layer-frame"
                animate={{
                  x: active === 1 ? -28 : -10,
                  y: active === 1 ? -18 : -6,
                  opacity: active === 1 ? 1 : 0.45,
                  scale: active === 1 ? 1.03 : 1,
                }}
                transition={{ type: 'spring', stiffness: 130, damping: 20 }}
              />
              <motion.div
                className="exploded-layer layer-glass"
                animate={{
                  x: active === 2 ? 30 : 10,
                  y: active === 2 ? -8 : 4,
                  opacity: active === 2 ? 1 : 0.42,
                  scale: active === 2 ? 1.025 : 1,
                }}
                transition={{ type: 'spring', stiffness: 130, damping: 20 }}
              />
              <motion.div
                className="exploded-layer layer-hardware"
                animate={{
                  x: active === 0 ? -34 : -16,
                  y: active === 0 ? 28 : 14,
                  opacity: active === 0 ? 1 : 0.38,
                }}
                transition={{ type: 'spring', stiffness: 130, damping: 20 }}
              />
              <motion.div
                className="exploded-layer layer-install"
                animate={{
                  x: active === 3 ? 34 : 16,
                  y: active === 3 ? 26 : 12,
                  opacity: active === 3 ? 1 : 0.38,
                }}
                transition={{ type: 'spring', stiffness: 130, damping: 20 }}
              />

              <div className="exploded-focus liquid-glass">
                <span>0{active + 1}</span>
                <div>
                  <small>ACTIVE FOCUS</small>
                  <strong>{stages[active].title}</strong>
                </div>
              </div>

              <div className="system-mode-panel">
                <div className="segmented-control" role="tablist" aria-label="Variasi sistem">
                  {modes.map((item) => {
                    const isActive = mode === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => setMode(item.key)}
                        role="tab"
                        aria-selected={isActive}
                      >
                        {isActive && (
                          <motion.span
                            className="segmented-pill"
                            layoutId="system-mode-pill"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={mode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {modes.find((item) => item.key === mode)?.caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

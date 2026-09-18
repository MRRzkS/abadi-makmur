'use client';

import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LineGlyph } from '@/components/LineGlyph';

const stages = [
  {
    title: 'Presisi ukuran',
    label: '01 · SURVEY',
    body: 'Dimensi bukaan, arah akses, kondisi dinding, dan ruang gerak dibaca lebih dulu sebelum sistem dipilih.',
    image: 'https://images.pexels.com/photos/5691534/pexels-photo-5691534.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi visual pengukuran presisi pada frame sebelum pemasangan',
    metric: '4',
    metricLabel: 'data awal dibaca',
  },
  {
    title: 'Sistem bukaan',
    label: '02 · MECHANISM',
    body: 'Swing, sliding, atau konfigurasi lain dipilih berdasarkan fungsi ruang—bukan sekadar mengikuti tren visual.',
    image: 'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi visual pemasangan hardware engsel sebagai bagian sistem bukaan',
    metric: '3',
    metricLabel: 'opsi sistem umum',
  },
  {
    title: 'Kaca & proporsi',
    label: '03 · GLASS',
    body: 'Komposisi frame dan kaca dijaga agar bukaan tetap ringan secara visual, terang, dan proporsional.',
    image: 'https://images.pexels.com/photos/9050934/pexels-photo-9050934.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi visual tim teknisi menangani panel kaca pada proses instalasi',
    metric: '2',
    metricLabel: 'elemen visual utama',
  },
  {
    title: 'Instalasi akhir',
    label: '04 · INSTALL',
    body: 'Hardware, alignment, sambungan, dan detail akhir dirapikan sebagai satu sistem yang konsisten.',
    image: 'https://images.pexels.com/photos/6124242/pexels-photo-6124242.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi visual teknisi melakukan sealing dan finishing akhir pada sambungan frame',
    metric: '4',
    metricLabel: 'titik akhir dicek',
  },
];

export function SystemShowcase() {
  const [active, setActive] = useState(0);

  const step = useCallback((direction: number) => {
    setActive((current) => (current + direction + stages.length) % stages.length);
  }, []);

  const item = stages[active];

  return (
    <section className="section system-showcase-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">SYSTEM FOCUS</p>
            <h2>Satu bukaan.<br /><span>Empat keputusan utama.</span></h2>
          </div>
          <p>Pilih tahap di kiri. Gambar di kanan berubah sesuai fokus, dilengkapi satu area sorotan dan statistik ringkas agar mudah dipahami.</p>
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
              {stages.map((stage, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={stage.title}
                    className={isActive ? 'system-tab active' : 'system-tab'}
                    onClick={() => setActive(index)}
                    aria-expanded={isActive}
                  >
                    <span className="system-tab-index">0{index + 1}</span>
                    <span className="system-tab-copy">
                      <span className="system-tab-label">{stage.label}</span>
                      <strong>{stage.title}</strong>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            className="system-tab-body"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24 }}
                          >
                            {stage.body}
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
            <div className={`system-visual active-${active}`}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt={item.alt}
                  width="1400"
                  height="1000"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="system-visual-shade" aria-hidden="true" />
              <div className="system-focus-card liquid-glass">
                <span>0{active + 1}</span>
                <div>
                  <small>ACTIVE FOCUS</small>
                  <strong>{item.title}</strong>
                </div>
              </div>

              <div className="system-stat-card liquid-glass">
                <strong>{item.metric}</strong>
                <span>{item.metricLabel}</span>
              </div>

              <p className="system-image-caption">{item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

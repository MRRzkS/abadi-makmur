'use client';

import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LineGlyph } from '@/components/LineGlyph';

const stages = [
  {
    title: 'Presisi ukuran',
    label: '01 · PENGUKURAN',
    body: 'Dimensi bukaan, arah akses, kondisi dinding, dan ruang gerak dibaca lebih dulu sebelum sistem dipilih.',
    image: 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi fasad rumah modern untuk membaca ukuran dan konteks bukaan',
    imagePosition: '50% 44%',
    zoom: 1.06,
    metric: '4',
    metricLabel: 'hal utama diperiksa',
  },
  {
    title: 'Sistem bukaan',
    label: '02 · SISTEM BUKAAN',
    body: 'Swing, sliding, atau konfigurasi lain dipilih berdasarkan fungsi ruang—bukan sekadar mengikuti tren visual.',
    image: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi pintu kaca dengan frame hitam untuk pilihan sistem bukaan',
    imagePosition: '58% 50%',
    zoom: 1.1,
    metric: '3',
    metricLabel: 'opsi bukaan umum',
  },
  {
    title: 'Kaca & frame',
    label: '03 · KACA & FRAME',
    body: 'Kaca dan frame dipilih agar sesuai ukuran bukaan rumah, cahaya tetap masuk, dan hasil pemasangan terlihat rapi.',
    image: 'https://images.pexels.com/photos/19963718/pexels-photo-19963718/free-photo-of-modern-house-windows.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi jendela rumah modern dengan frame ramping',
    imagePosition: '52% 43%',
    zoom: 1.12,
    metric: '2',
    metricLabel: 'bagian utama',
  },
  {
    title: 'Instalasi akhir',
    label: '04 · PEMASANGAN',
    body: 'Hardware, alignment, sambungan, dan detail akhir dirapikan sebagai satu sistem yang konsisten.',
    image: 'https://images.pexels.com/photos/34574609/pexels-photo-34574609/free-photo-of-bright-modern-room-with-sliding-glass-door.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Referensi ruang terang dengan sliding glass door sebagai gambaran hasil akhir',
    imagePosition: '68% 50%',
    zoom: 1.08,
    metric: '4',
    metricLabel: 'detail akhir dicek',
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
            <p className="eyebrow">SEBELUM & SAAT PEMASANGAN</p>
            <h2>Empat hal yang<br /><span>perlu diperhatikan.</span></h2>
          </div>
          <p>Lihat bagaimana ukuran, sistem bukaan, kaca, dan detail pemasangan saling memengaruhi hasil akhir pekerjaan.</p>
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
                  style={{ objectPosition: item.imagePosition }}
                  initial={{ opacity: 0, scale: Math.max(1, item.zoom - 0.025) }}
                  animate={{ opacity: 1, scale: item.zoom }}
                  exit={{ opacity: 0, scale: Math.max(1, item.zoom - 0.015) }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="system-visual-shade" aria-hidden="true" />
              <div className="system-focus-card liquid-glass">
                <span>0{active + 1}</span>
                <div>
                  <small>FOKUS</small>
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

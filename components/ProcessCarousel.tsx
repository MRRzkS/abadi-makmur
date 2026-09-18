'use client';

import { motion } from 'framer-motion';
import { LineGlyph } from '@/components/LineGlyph';
import { useHorizontalScrollTracker } from '@/components/useHorizontalScrollTracker';

const steps = [
  {
    index: '01',
    title: 'Kirim kebutuhan',
    body: 'Jenis pekerjaan, lokasi, foto kondisi bila ada, serta ukuran perkiraan.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=84',
    alt: 'Referensi visual detail bukaan dan frame arsitektur',
  },
  {
    index: '02',
    title: 'Konfirmasi konfigurasi',
    body: 'Bahas sistem, bukaan, frame, kaca, dan penyesuaian lapangan.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=84',
    alt: 'Referensi visual konfigurasi jendela dan fasad modern',
  },
  {
    index: '03',
    title: 'Fabrikasi & pasang',
    body: 'Pekerjaan dilanjutkan mengikuti detail yang telah disepakati.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=84',
    alt: 'Referensi visual hasil pemasangan kaca dan aluminium',
  },
];

export function ProcessCarousel() {
  const {
    viewportRef,
    activeIndex,
    progress,
    scrollToIndex,
    scrollByItem,
  } = useHorizontalScrollTracker(steps.length);

  return (
    <div className="process-carousel">
      <div className="process-carousel-toolbar">
        <div className="carousel-controls">
          <button onClick={() => scrollByItem(-1)} aria-label="Langkah sebelumnya">
            <LineGlyph kind="navLeft" />
          </button>
          <button onClick={() => scrollByItem(1)} aria-label="Langkah berikutnya">
            <LineGlyph kind="navRight" />
          </button>
        </div>
      </div>

      <div
        className="process-carousel-viewport native-horizontal-carousel"
        ref={viewportRef}
        aria-label="Proses layanan — scroll horizontal"
      >
        <div className="process-carousel-track">
          {steps.map((step) => (
            <article className="process-slide" data-carousel-item key={step.index}>
              <div className="process-slide-image">
                <img src={step.image} alt={step.alt} width="1000" height="700" loading="lazy" />
                <span className="reference-badge">REFERENSI VISUAL</span>
              </div>
              <div className="process-slide-copy">
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-pagination process-pagination">
        <div className="carousel-dots">
          {steps.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => scrollToIndex(index)}
              aria-label={`Buka langkah ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <div className="carousel-progress" aria-hidden="true">
          <motion.span
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ duration: 0.08, ease: 'linear' }}
          />
        </div>
        <span className="carousel-count">
          {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

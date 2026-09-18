'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioReferences } from '@/lib/services';

export function PortfolioCarousel({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    ref.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 560), behavior: 'smooth' });
  };

  return (
    <div className="carousel-wrap">
      <div className="carousel-toolbar">
        <p className="carousel-note">Visual referensi tipe pekerjaan — bukan klaim dokumentasi proyek perusahaan.</p>
        <div className="carousel-controls" aria-label="Kontrol carousel">
          <button onClick={() => scroll(-1)} aria-label="Geser ke kiri">←</button>
          <button onClick={() => scroll(1)} aria-label="Geser ke kanan">→</button>
        </div>
      </div>
      <div className={`project-carousel ${compact ? 'compact' : ''}`} ref={ref}>
        {portfolioReferences.map((item, index) => (
          <motion.article
            className="project-card"
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="project-image">
              <img src={item.image} alt={item.alt} width="960" height="720" loading="lazy" />
              <span className="reference-badge">REFERENSI VISUAL</span>
            </div>
            <div className="project-meta">
              <div>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

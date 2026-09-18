'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { portfolioReferences } from '@/lib/services';
import { LineGlyph } from '@/components/LineGlyph';

export function PortfolioCarousel({ compact = false }: { compact?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(portfolioReferences.length);

  const syncState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    syncState();
    emblaApi.on('select', syncState);
    emblaApi.on('reInit', syncState);

    return () => {
      emblaApi.off('select', syncState);
      emblaApi.off('reInit', syncState);
    };
  }, [emblaApi, syncState]);

  const progress = useMemo(
    () => (snapCount <= 1 ? 1 : (selectedIndex + 1) / snapCount),
    [selectedIndex, snapCount],
  );

  return (
    <div className="carousel-wrap">
      <div className="carousel-toolbar">
        <p className="carousel-note">Visual referensi tipe pekerjaan — bukan klaim dokumentasi proyek perusahaan.</p>
        <div className="carousel-controls" aria-label="Kontrol carousel">
          <button onClick={() => emblaApi?.scrollPrev()} aria-label="Geser ke kiri">
            <LineGlyph kind="navLeft" />
          </button>
          <button onClick={() => emblaApi?.scrollNext()} aria-label="Geser ke kanan">
            <LineGlyph kind="navRight" />
          </button>
        </div>
      </div>

      <div className="project-carousel-viewport" ref={emblaRef}>
        <div className={`project-carousel ${compact ? 'compact' : ''}`}>
          {portfolioReferences.map((item, index) => (
            <motion.article
              className="project-card"
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
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

      <div className="carousel-pagination" aria-label="Navigasi slide">
        <div className="carousel-dots">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              className={index === selectedIndex ? 'active' : ''}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Buka slide ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <div className="carousel-progress" aria-hidden="true">
          <motion.span
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          />
        </div>
        <span className="carousel-count">{String(selectedIndex + 1).padStart(2, '0')} / {String(snapCount).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

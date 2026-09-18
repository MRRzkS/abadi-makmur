'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { motion } from 'framer-motion';
import { LineGlyph } from '@/components/LineGlyph';

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: false,
      slidesToScroll: 1,
      dragFree: true,
      skipSnaps: true,
      loop: false,
    },
    [WheelGesturesPlugin()],
  );

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState(0);
  const count = steps.length;

  const setViewport = useCallback((node: HTMLDivElement | null) => {
    viewportRef.current = node;
    emblaRef(node);
  }, [emblaRef]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const preventHistorySwipe = (event: WheelEvent) => {
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (horizontal && Math.abs(event.deltaX) > 2) event.preventDefault();
    };

    node.addEventListener('wheel', preventHistorySwipe, { passive: false, capture: true });
    return () => node.removeEventListener('wheel', preventHistorySwipe, true);
  }, []);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setSelected(Math.min(emblaApi.selectedScrollSnap(), count - 1));
  }, [emblaApi, count]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on('select', sync);
    emblaApi.on('reInit', sync);
    return () => {
      emblaApi.off('select', sync);
      emblaApi.off('reInit', sync);
    };
  }, [emblaApi, sync]);

  const progress = useMemo(() => (selected + 1) / count, [selected, count]);

  return (
    <div className="process-carousel">
      <div className="process-carousel-toolbar">
        <div className="carousel-controls">
          <button onClick={() => emblaApi?.scrollPrev()} aria-label="Langkah sebelumnya">
            <LineGlyph kind="navLeft" />
          </button>
          <button onClick={() => emblaApi?.scrollNext()} aria-label="Langkah berikutnya">
            <LineGlyph kind="navRight" />
          </button>
        </div>
      </div>

      <div
        className="process-carousel-viewport"
        ref={setViewport}
        aria-label="Carousel proses — drag, swipe, atau scroll horizontal"
      >
        <div className="process-carousel-track">
          {steps.map((step) => (
            <article className="process-slide" key={step.index}>
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
              className={index === selected ? 'active' : ''}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Buka langkah ${index + 1}`}
              aria-current={index === selected ? 'true' : undefined}
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
        <span className="carousel-count">
          {String(selected + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

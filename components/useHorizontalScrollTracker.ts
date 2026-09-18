'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useHorizontalScrollTracker(itemCount: number) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(itemCount > 0 ? 1 / itemCount : 0);

  const sync = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const ratio = maxScroll === 0 ? 0 : viewport.scrollLeft / maxScroll;
    setProgress(itemCount <= 1 ? 1 : (1 + ratio * (itemCount - 1)) / itemCount);

    const cards = Array.from(
      viewport.querySelectorAll<HTMLElement>('[data-carousel-item]'),
    );

    if (!cards.length) {
      setActiveIndex(0);
      return;
    }

    const viewportLeft = viewport.scrollLeft;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - viewportLeft);
      if (distance < nearestDistance) {
        nearest = index;
        nearestDistance = distance;
      }
    });

    setActiveIndex(Math.min(nearest, itemCount - 1));
  }, [itemCount]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        sync();
      });
    };

    sync();
    viewport.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      viewport.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [sync]);

  const scrollToIndex = useCallback((index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelectorAll<HTMLElement>('[data-carousel-item]')[index];
    if (!card) return;

    viewport.scrollTo({
      left: card.offsetLeft,
      behavior: 'smooth',
    });
  }, []);

  const scrollByItem = useCallback((direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const cards = Array.from(
      viewport.querySelectorAll<HTMLElement>('[data-carousel-item]'),
    );
    const current = cards[activeIndex];
    const next = cards[Math.max(0, Math.min(cards.length - 1, activeIndex + direction))];

    if (!next) return;

    const fallback = current?.offsetWidth ?? viewport.clientWidth * 0.8;
    viewport.scrollBy({
      left: direction * Math.max(fallback + 16, Math.abs(next.offsetLeft - (current?.offsetLeft ?? 0))),
      behavior: 'smooth',
    });
  }, [activeIndex]);

  return {
    viewportRef,
    activeIndex,
    progress,
    scrollToIndex,
    scrollByItem,
  };
}

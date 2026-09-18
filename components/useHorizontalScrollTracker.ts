'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function useHorizontalScrollTracker(itemCount: number) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(itemCount > 0 ? 1 / itemCount : 0);

  const sync = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || itemCount <= 0) return;

    const cards = Array.from(
      viewport.querySelectorAll<HTMLElement>('[data-carousel-item]'),
    );

    if (!cards.length) {
      setActiveIndex(0);
      setProgress(0);
      return;
    }

    const viewportRect = viewport.getBoundingClientRect();
    const firstRect = cards[0].getBoundingClientRect();
    const lastRect = cards[cards.length - 1].getBoundingClientRect();

    const firstFullyVisible = firstRect.left >= viewportRect.left - 2;
    const lastFullyVisible =
      lastRect.right <= viewportRect.right + 2 &&
      lastRect.left < viewportRect.right;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const rawRatio = maxScroll === 0 ? 0 : clamp(viewport.scrollLeft / maxScroll);

    const visualRatio = lastFullyVisible
      ? 1
      : firstFullyVisible
        ? 0
        : rawRatio;

    const index = lastFullyVisible
      ? itemCount - 1
      : firstFullyVisible
        ? 0
        : Math.round(visualRatio * (itemCount - 1));

    setActiveIndex(clamp(index, 0, itemCount - 1));

    const trackedProgress =
      itemCount <= 1
        ? 1
        : (1 + visualRatio * (itemCount - 1)) / itemCount;

    setProgress(clamp(trackedProgress));
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

    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      resizeObserver.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [sync]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      if (!viewport || itemCount <= 1) return;

      const targetIndex = Math.max(0, Math.min(itemCount - 1, index));
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const ratio = targetIndex / (itemCount - 1);

      viewport.scrollTo({
        left: maxScroll * ratio,
        behavior: 'smooth',
      });
    },
    [itemCount],
  );

  const scrollByItem = useCallback(
    (direction: -1 | 1) => {
      const nextIndex = Math.max(
        0,
        Math.min(itemCount - 1, activeIndex + direction),
      );

      scrollToIndex(nextIndex);
    },
    [activeIndex, itemCount, scrollToIndex],
  );

  return {
    viewportRef,
    activeIndex,
    progress,
    scrollToIndex,
    scrollByItem,
  };
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { whatsappHref } from '@/lib/site';

const nav = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan/', label: 'Layanan' },
  { href: '/portofolio/', label: 'Portofolio' },
  { href: '/artikel/', label: 'Artikel' },
  { href: '/tentang/', label: 'Tentang' },
  { href: '/kontak/', label: 'Kontak' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let frame = 0;

    const sampleTheme = () => {
      frame = 0;
      const header = headerRef.current;
      const shell = header?.querySelector<HTMLElement>('.nav-shell');
      if (!header || !shell) return;

      const rect = shell.getBoundingClientRect();
      const y = Math.min(window.innerHeight - 1, Math.max(1, rect.top + rect.height * 0.55));
      const sampleXs = [0.28, 0.5, 0.72].map((ratio) =>
        Math.min(window.innerWidth - 1, Math.max(1, rect.left + rect.width * ratio)),
      );

      let darkVotes = 0;
      let lightVotes = 0;

      sampleXs.forEach((x) => {
        const stack = document.elementsFromPoint(x, y);
        const underneath = stack.find((element) => !header.contains(element));
        const themed = underneath?.closest<HTMLElement>('[data-nav-theme]');
        const theme = themed?.dataset.navTheme;

        if (theme === 'dark') darkVotes += 1;
        else if (theme === 'light') lightVotes += 1;
      });

      setDark(darkVotes > lightVotes && darkVotes > 0);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sampleTheme);
    };

    sampleTheme();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { subtree: true, childList: true, attributes: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header ref={headerRef} className={dark ? 'site-header nav-dark' : 'site-header nav-light'}>
      <div className="nav-shell glass-panel">
        <Link className="brand" href="/" aria-label="Abadi Makmur Aluminium — Beranda">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span>
            <strong>ABADI MAKMUR</strong>
            <small>ALUMINIUM · TANGERANG</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappHref({ sourcePath: pathname })} target="_blank" rel="noreferrer">
          Konsultasi <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
        >
          <span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav glass-panel"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? 'active' : undefined}
              >
                {item.label}<span>↗</span>
              </Link>
            ))}
            <a className="mobile-wa" href={whatsappHref({ sourcePath: pathname })} target="_blank" rel="noreferrer">
              Konsultasi WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

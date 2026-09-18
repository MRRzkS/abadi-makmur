'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
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

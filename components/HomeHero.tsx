'use client';

import Link from 'next/link';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { whatsappHref } from '@/lib/site';

const heroImage =
  'https://images.pexels.com/photos/34880778/pexels-photo-34880778/free-photo-of-modern-minimalist-house-facade-in-jakarta.jpeg?auto=compress&cs=tinysrgb&w=2000';

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [revealed, setRevealed] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setRevealed(latest > 28);
  });

  const copyOpacity = useTransform(scrollY, [18, 78], [0, 1]);
  const copyY = useTransform(scrollY, [18, 78], [18, 0]);
  const mediaFilter = useTransform(
    scrollY,
    [0, 88],
    [
      'blur(0px) brightness(1.14) contrast(1.04) saturate(1.04)',
      'blur(13px) brightness(.67) contrast(1.03) saturate(1.16)',
    ],
  );
  const mediaScale = useTransform(scrollY, [0, 88], [1, 1.018]);
  const veilOpacity = useTransform(scrollY, [0, 88], [0.03, 0.4]);
  const hintOpacity = useTransform(scrollY, [0, 34], [1, 0]);

  return (
    <section className="home-scroll-hero" data-nav-theme="dark" aria-label="Mestika Abadi Makmur Aluminium">
      <div className="home-scroll-hero-stage">
        <div className="home-scroll-hero-media" aria-hidden="true">
          <motion.img
            className="home-scroll-hero-ambient"
            src={heroImage}
            alt=""
            style={reduceMotion ? undefined : { scale: mediaScale }}
          />
          <motion.img
            className="home-scroll-hero-image"
            src={heroImage}
            alt="Rumah modern minimalis di Jakarta dengan jendela dan bukaan kaca yang terlihat utuh"
            width="1600"
            height="2000"
            fetchPriority="high"
            style={reduceMotion ? undefined : { filter: mediaFilter, scale: mediaScale }}
          />
          <motion.div
            className="home-scroll-hero-veil"
            style={reduceMotion ? undefined : { opacity: veilOpacity }}
          />
        </div>

        <motion.div
          className="home-scroll-hero-copy"
          data-active={reduceMotion || revealed ? 'true' : 'false'}
          style={reduceMotion ? { opacity: 1 } : { opacity: copyOpacity, y: copyY }}
        >
          <p className="eyebrow"><span /> FABRIKASI ALUMINIUM & KACA · JABODETABEK</p>
          <h1>Aluminium & kaca<br /><span>untuk ruang Anda.</span></h1>
          <p className="home-scroll-hero-lead">
            Pintu, jendela, kusen, partisi kaca, dan shower box untuk rumah, ruko, kantor,
            serta bangunan komersial di Jabodetabek dan sekitarnya.
          </p>

          <div className="home-scroll-hero-actions">
            <a
              className="button button-primary"
              href={whatsappHref({ sourcePath: '/' })}
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi WhatsApp <span>↗</span>
            </a>
            <Link className="button home-scroll-hero-secondary" href="/layanan/">
              Layanan dan Produk <span>↗</span>
            </Link>
          </div>

          <div className="home-scroll-hero-glass" aria-label="Area layanan">
            <span className="status-dot" />
            <div>
              <small>AREA LAYANAN</small>
              <strong>Jabodetabek & sekitarnya</strong>
            </div>
          </div>
        </motion.div>

        {!reduceMotion && (
          <motion.div className="home-scroll-hint" style={{ opacity: hintOpacity }} aria-hidden="true">
            <span>Scroll</span>
            <i />
          </motion.div>
        )}
      </div>
    </section>
  );
}

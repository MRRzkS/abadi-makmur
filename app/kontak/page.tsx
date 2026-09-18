import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { WhatsAppPlanner } from '@/components/WhatsAppPlanner';
import { siteConfig, whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontak & Konsultasi Aluminium Kaca Tangerang',
  description: 'Hubungi Abadi Makmur Aluminium untuk konsultasi pintu, jendela, kusen aluminium, partisi kaca dan shower box di Tangerang.',
};

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero contact-hero section-pad">
        <div className="container contact-hero-grid">
          <Reveal>
            <p className="eyebrow">KONTAK · TANGERANG</p>
            <h1>Ceritakan<br /><span>kebutuhan Anda.</span></h1>
            <p className="inner-lead">Mulai dari informasi yang Anda punya sekarang. Foto kondisi lokasi, perkiraan ukuran, dan jenis kebutuhan sudah cukup untuk membuka percakapan.</p>
          </Reveal>
          <Reveal className="contact-facts" delay={0.08}>
            <div><span>ALAMAT</span><strong>{siteConfig.addressShort}</strong></div>
            <div><span>WHATSAPP</span><strong><a href={whatsappHref({ sourcePath: '/kontak/' })} target="_blank" rel="noreferrer">{siteConfig.whatsappDisplay}</a></strong></div>
            <div><span>LAYANAN</span><strong>Aluminium + kaca</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-planner-section">
        <div className="container contact-planner-grid">
          <Reveal className="contact-side-copy">
            <p className="eyebrow">PESAN CEPAT</p>
            <h2>Konsultasi lebih mudah<br /><span>lewat WhatsApp.</span></h2>
            <p>Pilih jenis layanan, tulis lokasi, lalu tambahkan ukuran atau foto kondisi bila ada agar kebutuhan awal lebih mudah dipahami.</p>
            <div className="privacy-note"><span>PRIVASI</span><p>Isi konsultasi tidak disimpan.</p></div>
          </Reveal>
          <Reveal delay={0.08}><WhatsAppPlanner /></Reveal>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-card dark-surface" data-nav-theme="dark">
          <Reveal>
            <p className="eyebrow">LOKASI & AREA</p>
            <h2>Cipete, Pinang.<br /><span>Kota Tangerang.</span></h2>
          </Reveal>
          <Reveal className="location-visual" delay={0.08}>
            <div className="map-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            <span className="map-pin"><b /> ABADI MAKMUR</span>
            <p>{siteConfig.address}</p>
            <a className="location-link" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Buka di Google Maps ↗</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

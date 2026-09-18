import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { WhatsAppPlanner } from '@/components/WhatsAppPlanner';
import { siteConfig } from '@/lib/site';

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
            <h1>Ceritakan<br /><span>bukaannya.</span></h1>
            <p className="inner-lead">Mulai dari informasi yang Anda punya sekarang. Foto kondisi lokasi, perkiraan ukuran, dan jenis kebutuhan sudah cukup untuk membuka percakapan.</p>
          </Reveal>
          <Reveal className="contact-facts" delay={0.08}>
            <div><span>AREA UTAMA</span><strong>{siteConfig.area}</strong></div>
            <div><span>CHANNEL</span><strong>WhatsApp inquiry</strong></div>
            <div><span>LAYANAN</span><strong>Aluminium + kaca</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-planner-section">
        <div className="container contact-planner-grid">
          <Reveal className="contact-side-copy">
            <p className="eyebrow">PESAN CEPAT</p>
            <h2>Dari brief ke<br /><span>WhatsApp.</span></h2>
            <p>Isi tiga informasi sederhana. Website akan menyusun pesan agar konteks awal lebih jelas ketika Anda berpindah ke WhatsApp.</p>
            <div className="privacy-note"><span>PRIVACY</span><p>Form berjalan di browser dan tidak memiliki database penyimpanan pesan.</p></div>
          </Reveal>
          <Reveal delay={0.08}><WhatsAppPlanner /></Reveal>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-card">
          <Reveal>
            <p className="eyebrow">LOKASI & AREA</p>
            <h2>Tangerang,<br /><span>Banten.</span></h2>
          </Reveal>
          <Reveal className="location-visual" delay={0.08}>
            <div className="map-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            <span className="map-pin"><b /> TANGERANG</span>
            <p>Alamat lengkap belum ditampilkan karena belum diberikan pada brief. Tambahkan alamat bisnis final sebelum publikasi jika memang ingin ditampilkan secara publik.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

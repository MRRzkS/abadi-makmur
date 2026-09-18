import type { Metadata } from 'next';
import { PortfolioCarousel } from '@/components/PortfolioCarousel';
import { Reveal } from '@/components/Reveal';
import { whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portofolio & Referensi Pekerjaan Aluminium Kaca',
  description: 'Galeri tipe pekerjaan pintu aluminium, jendela aluminium, kusen, partisi kaca dan shower box untuk kebutuhan Tangerang.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="inner-hero portfolio-page-hero section-pad">
        <div className="container portfolio-title-grid">
          <Reveal>
            <p className="eyebrow">PORTOFOLIO / VISUAL REFERENCE</p>
            <h1>Biarkan material<br /><span>menjelaskan ruang.</span></h1>
          </Reveal>
          <Reveal className="portfolio-disclaimer glass-panel" delay={0.08}>
            <span>CATATAN TRANSPARANSI</span>
            <p>Visual pada versi awal website ini adalah referensi tipe pekerjaan dari sumber foto bebas pakai, bukan dokumentasi proyek CV Kristian Abadi. Ganti bagian ini dengan foto proyek asli saat aset final tersedia.</p>
          </Reveal>
        </div>
      </section>

      <section className="section portfolio-full-section">
        <div className="container"><PortfolioCarousel /></div>
      </section>

      <section className="section portfolio-upload-note">
        <div className="container upload-note-grid">
          <Reveal><p className="eyebrow">NEXT CONTENT STEP</p><h2>Foto proyek asli<br /><span>akan memperkuat trust.</span></h2></Reveal>
          <Reveal className="upload-note" delay={0.08}>
            <p>Untuk versi produksi final, siapkan tiap proyek dengan minimal: foto wide, detail frame/hardware, lokasi tingkat kota/kecamatan, jenis layanan, dan satu kalimat kebutuhan klien. Hindari memasukkan data pribadi klien tanpa izin.</p>
            <a className="button button-primary" href={whatsappHref({ sourcePath: '/portofolio/' })} target="_blank" rel="noreferrer">Konsultasi kebutuhan <span>↗</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

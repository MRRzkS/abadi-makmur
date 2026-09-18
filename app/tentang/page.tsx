import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { LineGlyph } from '@/components/LineGlyph';
import { siteConfig, whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tentang CV Kristian Abadi',
  description: 'Tentang Abadi Makmur Aluminium (CV Kristian Abadi), penyedia fabrikasi dan pemasangan aluminium & kaca dengan fokus area Tangerang.',
};

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero about-hero section-pad">
        <div className="container about-hero-grid">
          <Reveal>
            <p className="eyebrow">TENTANG · {siteConfig.legalName.toUpperCase()}</p>
            <h1>Detail yang baik<br /><span>tidak perlu berisik.</span></h1>
          </Reveal>
          <Reveal className="about-intro" delay={0.08}>
            <p>Abadi Makmur Aluminium adalah bisnis fabrikasi dan pemasangan aluminium & kaca berbasis Tangerang. Fokusnya sederhana: membantu kebutuhan bukaan dan pembagian ruang terasa rapi, fungsional, dan sesuai konteks bangunan.</p>
            <a className="text-link" href={whatsappHref({ sourcePath: '/tentang/' })} target="_blank" rel="noreferrer">Mulai konsultasi <span>↗</span></a>
          </Reveal>
        </div>
      </section>

      <section className="section about-visual-section">
        <div className="container about-visual-grid">
          <Reveal className="about-photo-large">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=86" alt="Referensi visual interior modern dengan elemen kaca" width="1300" height="1000" />
            <span className="reference-badge">REFERENSI VISUAL</span>
          </Reveal>
          <Reveal className="about-principle" delay={0.06}>
            <p className="eyebrow">PRINSIP KERJA</p>
            <h2>Ukur konteks.<br />Pilih sistem.<br /><span>Rapikan hasil.</span></h2>
            <p>Website ini tidak mengunci pengguna ke satu model produk. Kebutuhan akhir diarahkan oleh ukuran aktual, fungsi, bukaan, material, hardware, dan kondisi lapangan.</p>
          </Reveal>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">CARA BERPIKIR</p><h2>Tiga hal yang<br /><span>kami prioritaskan.</span></h2></div>
          </Reveal>
          <div className="principle-bento">
            <Reveal className="principle-card primary-card"><LineGlyph kind="measure" /><span>01</span><h3>Konteks lokasi</h3><p>Ukuran dan kondisi aktual lebih penting daripada mengandalkan asumsi dari foto atau denah awal.</p></Reveal>
            <Reveal className="principle-card dark-card" delay={0.05}><LineGlyph kind="frame" /><span>02</span><h3>Proporsi & fungsi</h3><p>Frame, kaca, arah bukaan, dan hardware harus bekerja sebagai satu sistem.</p></Reveal>
            <Reveal className="principle-card light-card" delay={0.1}><LineGlyph kind="install" /><span>03</span><h3>Hasil yang rapi</h3><p>Detail akhir diarahkan agar terasa konsisten dengan ruang dan mudah dipahami pengguna.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <Reveal>
            <p className="eyebrow light">TANGERANG · BANTEN</p>
            <h2>Punya kebutuhan<br />aluminium atau <em>kaca?</em></h2>
            <div className="hero-actions">
              <a className="button button-light" href={whatsappHref({ sourcePath: '/tentang/' })} target="_blank" rel="noreferrer">Konsultasi WhatsApp <span>↗</span></a>
              <Link className="button button-dark-ghost" href="/layanan/">Lihat layanan</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

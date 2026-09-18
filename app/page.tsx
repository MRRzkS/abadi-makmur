import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { LineGlyph } from '@/components/LineGlyph';
import { PortfolioCarousel } from '@/components/PortfolioCarousel';
import { WhatsAppPlanner } from '@/components/WhatsAppPlanner';
import { SystemShowcase } from '@/components/SystemShowcase';
import { services } from '@/lib/services';
import { siteConfig, whatsappHref } from '@/lib/site';

const homeFaq = [
  {
    q: 'Apakah Abadi Makmur melayani area Tangerang?',
    a: 'Ya. Fokus area layanan utama adalah Tangerang, Banten. Detail lokasi proyek dapat dikirim melalui WhatsApp untuk dikonfirmasi.',
  },
  {
    q: 'Bisa konsultasi untuk pintu, jendela, kusen, partisi kaca, dan shower box?',
    a: 'Bisa. Lima kategori tersebut menjadi fokus halaman layanan website, termasuk kebutuhan sliding system, kaca frameless, dan pekerjaan aluminium/kaca terkait.',
  },
  {
    q: 'Apakah ukuran dan model bisa disesuaikan?',
    a: 'Kebutuhan fabrikasi pada umumnya mengikuti kondisi aktual, fungsi ruang, ukuran bukaan, serta pilihan material dan hardware yang disepakati.',
  },
];

export default function HomePage() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. H. Buang, RT/RW 03/03, Kelurahan Cipete, Kecamatan Pinang',
      addressLocality: 'Kota Tangerang',
      addressRegion: 'Banten',
      addressCountry: 'ID',
    },
    areaServed: { '@type': 'City', name: 'Tangerang' },
    serviceType: services.map((service) => service.title),
    ...(siteConfig.whatsapp ? { telephone: `+${siteConfig.whatsapp}` } : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero section-pad">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow"><span /> FABRIKASI ALUMINIUM & KACA · TANGERANG</p>
            <h1>Presisi pada <em>frame.</em><br />Ringan pada <span>ruang.</span></h1>
            <p className="hero-lead">
              Pintu aluminium, jendela aluminium, kusen aluminium, partisi kaca, dan shower box dengan pendekatan yang rapi, modern, dan sesuai kebutuhan lokasi.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappHref({ sourcePath: '/' })} target="_blank" rel="noreferrer">
                Konsultasi WhatsApp <span>↗</span>
              </a>
              <Link className="button button-ghost" href="/layanan/">Lihat layanan <span>↗</span></Link>
            </div>
            <div className="hero-microproof" aria-label="Ringkasan layanan">
              <div><strong>05</strong><span>Layanan fokus</span></div>
              <div><strong>TGR</strong><span>Area utama</span></div>
              <div><strong>WA</strong><span>Jalur konsultasi</span></div>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={0.1}>
            <div className="hero-image-wrap">
              <img
                src="https://images.pexels.com/photos/5691521/pexels-photo-5691521.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Referensi visual teknisi memasang frame jendela pada interior modern yang terang"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
              <div className="hero-image-shade" />
              <div className="hero-glass-card top">
                <span className="status-dot" />
                <div><small>AREA LAYANAN</small><strong>Tangerang, Banten</strong></div>
              </div>
              <div className="hero-glass-card bottom">
                <small>ALUMINIUM × GLASS</small>
                <strong>Clean lines.<br />Better openings.</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trust-rail" aria-label="Kekuatan layanan">
        <div className="container trust-rail-inner">
          <span>Fabrikasi sesuai kebutuhan</span><i />
          <span>Hunian & komersial</span><i />
          <span>Aluminium + kaca</span><i />
          <span>Konsultasi langsung</span>
        </div>
      </section>

      <section className="section section-services" id="layanan">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">LAYANAN UTAMA</p>
              <h2>Lima kebutuhan.<br /><span>Satu standar visual.</span></h2>
            </div>
            <p>Setiap layanan memiliki halaman SEO khusus untuk pencarian lokal Tangerang, namun tetap terhubung dalam satu pengalaman yang konsisten.</p>
          </Reveal>

          <div className="service-bento">
            {services.map((service, index) => {
              const kinds = ['door', 'window', 'frame', 'partition', 'shower'] as const;
              return (
                <Reveal key={service.slug} className={`service-card service-card-${index + 1}`} delay={index * 0.04}>
                  <Link href={`/layanan/${service.slug}/`}>
                    <div className="service-card-top">
                      <LineGlyph kind={kinds[index]} />
                      <span className="service-index">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="service-keyword">{service.keyword}</p>
                      <h3>{service.shortTitle}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-link">Detail layanan <span>↗</span></div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SystemShowcase />

      <section className="section process-section">
        <div className="container process-grid">
          <Reveal className="process-intro">
            <p className="eyebrow">ALUR KERJA</p>
            <h2>Dari kebutuhan ke <span>instalasi.</span></h2>
            <p>Alur dibuat sederhana agar keputusan material, ukuran, dan konfigurasi bukaan dapat dibahas sebelum pekerjaan berjalan.</p>
          </Reveal>
          <div className="process-steps">
            <Reveal className="process-step">
              <span className="process-number">01</span>
              <LineGlyph kind="measure" />
              <div><h3>Konsultasi & ukuran</h3><p>Jelaskan jenis pekerjaan, lokasi, perkiraan ukuran, dan kondisi bukaan.</p></div>
            </Reveal>
            <Reveal className="process-step">
              <span className="process-number">02</span>
              <LineGlyph kind="frame" />
              <div><h3>Konfigurasi & fabrikasi</h3><p>Tentukan sistem, proporsi frame, kaca, dan detail kebutuhan sebelum produksi.</p></div>
            </Reveal>
            <Reveal className="process-step">
              <span className="process-number">03</span>
              <LineGlyph kind="install" />
              <div><h3>Pemasangan</h3><p>Instalasi diarahkan agar hasil akhir rapi dan fungsi bukaan sesuai kebutuhan ruang.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section portfolio-section dark-surface" data-nav-theme="dark">
        <div className="container">
          <Reveal className="section-heading split-heading portfolio-heading">
            <div>
              <p className="eyebrow">VISUAL REFERENCE</p>
              <h2>Material yang terasa<br /><span>lebih arsitektural.</span></h2>
            </div>
            <Link className="text-link" href="/portofolio/">Buka galeri <span>↗</span></Link>
          </Reveal>
          <PortfolioCarousel compact />
        </div>
      </section>

      <section className="section local-seo-section">
        <div className="container local-seo-grid">
          <Reveal className="local-seo-copy">
            <p className="eyebrow">LOCAL SEARCH · TANGERANG</p>
            <h2>Dicari lokal.<br /><span>Dijelaskan spesifik.</span></h2>
            <p>Struktur website memprioritaskan intent pengguna yang sudah dekat dengan keputusan: mencari jenis pekerjaan aluminium/kaca dan area pengerjaan Tangerang.</p>
          </Reveal>
          <Reveal className="keyword-panel glass-panel" delay={0.08}>
            {services.map((service, index) => (
              <Link key={service.slug} href={`/layanan/${service.slug}/`}>
                <span>0{index + 1}</span>
                <strong>{service.keyword}</strong>
                <small>Tangerang</small>
                <b>↗</b>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section inquiry-section">
        <div className="container inquiry-grid">
          <Reveal className="inquiry-copy">
            <p className="eyebrow">MULAI DARI KEBUTUHAN</p>
            <h2>Tidak perlu briefing yang <span>sempurna.</span></h2>
            <p>Cukup pilih layanan, tulis lokasi, dan tambahkan catatan singkat. Pesan akan disiapkan untuk diteruskan ke WhatsApp.</p>
          </Reveal>
          <Reveal delay={0.08}><WhatsAppPlanner /></Reveal>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2>Pertanyaan<br /><span>sebelum mulai.</span></h2>
          </Reveal>
          <div className="faq-list">
            {homeFaq.map((item, index) => (
              <Reveal key={item.q} className="faq-item" delay={index * 0.04}>
                <span>0{index + 1}</span>
                <div><h3>{item.q}</h3><p>{item.a}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner dark-surface" data-nav-theme="dark">
          <Reveal>
            <p className="eyebrow light">ABADI MAKMUR ALUMINIUM · TANGERANG</p>
            <h2>Ruang yang lebih rapi<br />dimulai dari <em>detail.</em></h2>
            <a className="button button-light" href={whatsappHref({ sourcePath: '/' })} target="_blank" rel="noreferrer">Konsultasi sekarang <span>↗</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

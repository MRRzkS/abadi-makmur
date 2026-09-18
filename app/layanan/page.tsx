import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { LineGlyph } from '@/components/LineGlyph';
import { services } from '@/lib/services';
import { whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Layanan Aluminium & Kaca Tangerang',
  description: 'Layanan Abadi Makmur Aluminium untuk pintu aluminium, jendela aluminium, kusen aluminium, partisi kaca, shower box, sliding, frameless glass dan pekerjaan aluminium kaca di Tangerang.',
};

export default function ServicesPage() {
  const kinds = ['door', 'window', 'frame', 'partition', 'shower'] as const;

  return (
    <>
      <section className="inner-hero services-page-hero section-pad">
        <div className="container services-hero-grid">
          <Reveal>
            <p className="eyebrow">LAYANAN · TANGERANG</p>
            <h1>Aluminium & kaca,<br /><span>dibuat sesuai ruang.</span></h1>
          </Reveal>
          <Reveal className="services-hero-copy" delay={0.08}>
            <p>Mulai dari pintu, jendela, kusen, partisi kaca, hingga shower box. Setiap kebutuhan diarahkan berdasarkan fungsi, ukuran aktual, sistem bukaan, dan konteks bangunan.</p>
            <a className="text-link" href={whatsappHref({ sourcePath: '/layanan/' })} target="_blank" rel="noreferrer">Konsultasi kebutuhan <span>↗</span></a>
          </Reveal>
        </div>
      </section>

      <section className="section services-page-section">
        <div className="container services-page-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} className={`services-page-card services-page-card-${index + 1}`} delay={index * 0.04}>
              <Link href={`/layanan/${service.slug}/`}>
                <div className="services-page-image">
                  <img src={service.image} alt={service.imageAlt} width="1000" height="760" loading="lazy" />
                  <span className="reference-badge">REFERENSI VISUAL</span>
                </div>
                <div className="services-page-content">
                  <div className="services-page-icon"><LineGlyph kind={kinds[index]} /></div>
                  <p className="service-keyword">{service.keyword}</p>
                  <h2>{service.shortTitle}</h2>
                  <p>{service.description}</p>
                  <div className="service-link">Buka detail layanan <span>↗</span></div>
                </div>
              </Link>
              <a
                className="services-page-whatsapp"
                href={whatsappHref({
                  sourcePath: `/layanan/${service.slug}/`,
                  service: service.shortTitle,
                })}
                target="_blank"
                rel="noreferrer"
              >
                Konsultasi {service.shortTitle} via WhatsApp <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <Reveal>
            <p className="eyebrow light">BUTUH YANG LEBIH SPESIFIK?</p>
            <h2>Sliding, frameless,<br />spandrel, atau <em>custom.</em></h2>
            <a className="button button-light" href={whatsappHref({ sourcePath: '/layanan/' })} target="_blank" rel="noreferrer">Tanyakan via WhatsApp <span>↗</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { LineGlyph } from '@/components/LineGlyph';
import { services } from '@/lib/services';
import { whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Layanan & Produk Aluminium Kaca Jabodetabek',
  description: 'Layanan dan produk Mestika Abadi Makmur Aluminium untuk pintu aluminium, jendela aluminium, kusen aluminium, partisi kaca, shower box, sliding, frameless glass dan kebutuhan aluminium kaca di Jabodetabek dan sekitarnya.',
};

export default function ServicesPage() {
  const kinds = ['door', 'window', 'frame', 'partition', 'shower'] as const;

  return (
    <>
      <section className="inner-hero services-page-hero section-pad">
        <div className="container services-hero-grid">
          <Reveal>
            <p className="eyebrow">LAYANAN DAN PRODUK · JABODETABEK</p>
            <h1>Pilih layanan dan produk<br /><span>aluminium & kaca.</span></h1>
          </Reveal>
          <Reveal className="services-hero-copy" delay={0.08}>
            <p>Melayani pintu aluminium, jendela aluminium, kusen aluminium, partisi kaca, dan shower box untuk rumah, ruko, kantor, serta bangunan komersial di Jabodetabek dan sekitarnya.</p>
            <a className="text-link" href={whatsappHref({ sourcePath: '/layanan/' })} target="_blank" rel="noreferrer">Konsultasi kebutuhan <span>↗</span></a>
          </Reveal>
        </div>
      </section>

      <section className="section services-page-section">
        <div className="container services-page-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              className={`services-page-card services-page-card-${index + 1}`}
              delay={index * 0.04}
            >
              <article className="services-page-card-shell">
                <div className="services-page-card-layout">
                  <div className="services-page-image">
                    <img src={service.image} alt={service.imageAlt} width="1000" height="760" loading="lazy" />
                    <span className="reference-badge">REFERENSI PEKERJAAN</span>
                  </div>

                  <div className="services-page-content">
                    <div className="services-page-icon"><LineGlyph kind={kinds[index]} /></div>
                    <p className="service-keyword">{service.keyword}</p>
                    <h2>{service.shortTitle}</h2>
                    <p>{service.description}</p>

                    <div className="services-page-actions">
                      <Link className="services-page-detail" href={`/layanan/${service.slug}/`}>
                        Buka detail <span>↗</span>
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
                        Konsultasi via WhatsApp <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
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

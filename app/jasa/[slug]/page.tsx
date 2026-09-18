import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LineGlyph } from '@/components/LineGlyph';
import { Reveal } from '@/components/Reveal';
import { WhatsAppPlanner } from '@/components/WhatsAppPlanner';
import { serviceBySlug, services } from '@/lib/services';
import { siteConfig, whatsappHref } from '@/lib/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = serviceBySlug[slug];
    if (!service) return {};
    return {
      title: service.title,
      description: service.metaDescription,
      keywords: [service.keyword, `${service.keyword} Tangerang`, 'aluminium Tangerang', 'kaca Tangerang'],
      openGraph: {
        title: `${service.title} | Abadi Makmur Aluminium`,
        description: service.metaDescription,
        type: 'website',
        images: [{ url: service.image, alt: service.imageAlt }],
      },
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.keyword,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
    },
    areaServed: { '@type': 'City', name: 'Tangerang' },
    description: service.metaDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="inner-hero service-hero section-pad">
        <div className="container inner-hero-grid">
          <Reveal className="inner-hero-copy">
            <Link className="back-link" href="/#layanan">← Semua layanan</Link>
            <p className="eyebrow">{service.keyword.toUpperCase()} · TANGERANG</p>
            <h1>{service.shortTitle}<br /><span>untuk ruang yang tepat.</span></h1>
            <p className="inner-lead">{service.description}</p>
            <div className="service-highlight">{service.highlight}</div>
            <a
              className="button button-primary"
              href={whatsappHref(`Halo Abadi Makmur Aluminium, saya ingin konsultasi ${service.shortTitle.toLowerCase()} di Tangerang.`)}
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi {service.shortTitle} <span>↗</span>
            </a>
          </Reveal>
          <Reveal className="inner-hero-image" delay={0.08}>
            <img src={service.image} alt={service.imageAlt} width="1100" height="1300" fetchPriority="high" />
            <span className="reference-badge">REFERENSI VISUAL</span>
          </Reveal>
        </div>
      </section>

      <section className="section detail-section">
        <div className="container detail-bento">
          <Reveal className="detail-card detail-main">
            <p className="eyebrow">KENAPA PENDEKATAN INI</p>
            <h2>Fungsi dulu.<br /><span>Baru detail visual.</span></h2>
            <p>Kebutuhan aluminium dan kaca sangat bergantung pada dimensi, arah bukaan, intensitas pemakaian, kondisi area, serta gaya bangunan. Karena itu keputusan desain sebaiknya tidak hanya berdasarkan foto referensi.</p>
          </Reveal>
          <Reveal className="detail-card detail-benefits" delay={0.04}>
            <LineGlyph kind="frame" />
            <p className="detail-label">FOKUS MANFAAT</p>
            <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </Reveal>
          <Reveal className="detail-card detail-use" delay={0.08}>
            <p className="detail-label">COCOK UNTUK</p>
            <div className="tag-cloud">{service.suitableFor.map((item) => <span key={item}>{item}</span>)}</div>
            <strong>{service.keyword}<br />Tangerang</strong>
          </Reveal>
          <Reveal className="detail-card detail-area" delay={0.12}>
            <p className="detail-label">AREA UTAMA</p>
            <span className="area-big">TGR</span>
            <p>Tangerang, Banten. Konfirmasi detail lokasi proyek melalui WhatsApp.</p>
          </Reveal>
        </div>
      </section>

      <section className="section service-process">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">PROSES</p><h2>Tiga langkah<br /><span>yang jelas.</span></h2></div>
            <p>Mulai dengan informasi minimum. Detail teknis dapat dikonfirmasi setelah kebutuhan dan lokasi dipahami.</p>
          </Reveal>
          <div className="three-process">
            <Reveal><span>01</span><h3>Kirim kebutuhan</h3><p>Jenis pekerjaan, lokasi, foto kondisi bila ada, serta ukuran perkiraan.</p></Reveal>
            <Reveal delay={0.04}><span>02</span><h3>Konfirmasi konfigurasi</h3><p>Bahas sistem, bukaan, frame, kaca, dan penyesuaian lapangan.</p></Reveal>
            <Reveal delay={0.08}><span>03</span><h3>Fabrikasi & pasang</h3><p>Pekerjaan dilanjutkan mengikuti detail yang telah disepakati.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section related-services">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">LAYANAN TERKAIT</p><h2>Bangun solusi<br /><span>secara utuh.</span></h2></div>
          </Reveal>
          <div className="related-grid">
            {services.filter((item) => item.slug !== service.slug).slice(0, 4).map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <Link href={`/jasa/${item.slug}/`}>
                  <span>0{index + 1}</span>
                  <h3>{item.shortTitle}</h3>
                  <p>{item.keyword} Tangerang</p>
                  <b>↗</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section compact-faq">
        <div className="container faq-grid">
          <Reveal><p className="eyebrow">FAQ · {service.shortTitle.toUpperCase()}</p><h2>Sebelum<br /><span>konsultasi.</span></h2></Reveal>
          <div className="faq-list">
            {service.faq.map((item, index) => (
              <Reveal key={item.q} className="faq-item" delay={index * 0.04}>
                <span>0{index + 1}</span><div><h3>{item.q}</h3><p>{item.a}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inquiry-section">
        <div className="container inquiry-grid">
          <Reveal className="inquiry-copy"><p className="eyebrow">KONSULTASI</p><h2>Siapkan brief<br /><span>dalam satu menit.</span></h2><p>Gunakan form cepat untuk membuat pesan WhatsApp tanpa perlu menyusun format sendiri.</p></Reveal>
          <Reveal delay={0.08}><WhatsAppPlanner /></Reveal>
        </div>
      </section>
    </>
  );
}

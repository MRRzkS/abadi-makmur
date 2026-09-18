import Link from 'next/link';
import { services } from '@/lib/services';
import { defaultWhatsAppMessage, siteConfig, whatsappHref } from '@/lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="eyebrow">CV KRISTIAN ABADI</p>
          <h2>Abadi Makmur<br />Aluminium.</h2>
          <p>Fabrikasi dan pemasangan aluminium & kaca untuk kebutuhan hunian dan komersial di Tangerang.</p>
        </div>
        <div>
          <p className="footer-label">Layanan utama</p>
          <div className="footer-links">
            {services.map((service) => (
              <Link key={service.slug} href={`/jasa/${service.slug}/`}>{service.shortTitle}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Navigasi</p>
          <div className="footer-links">
            <Link href="/portofolio/">Portofolio</Link>
            <Link href="/tentang/">Tentang</Link>
            <Link href="/kontak/">Kontak</Link>
            <a href={whatsappHref(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>{siteConfig.area}</span>
      </div>
    </footer>
  );
}

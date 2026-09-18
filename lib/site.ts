export const siteConfig = {
  name: 'Abadi Makmur Aluminium',
  legalName: 'CV Kristian Abadi',
  description:
    'Jasa fabrikasi dan pemasangan aluminium & kaca di Tangerang untuk pintu, jendela, kusen, sliding system, partisi kaca, frameless glass, spandrel door, dan shower box.',
  area: 'Tangerang, Banten',
  address: 'Jl. H. Buang, RT/RW 03/03, Kelurahan Cipete, Kecamatan Pinang, Kota Tangerang',
  addressShort: 'Jl. H. Buang, Cipete, Pinang, Kota Tangerang',
  whatsappDisplay: '+62 813-1909-449',
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://abadi-makmur-aluminium.example',
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '628131909449').replace(/\D/g, ''),
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Jl.%20H.%20Buang%2C%20Cipete%2C%20Pinang%2C%20Kota%20Tangerang',
  colors: {
    primary: '#D9362B',
    secondary: '#202124',
    accent: '#F28C28',
  },
};

export type WhatsAppInquiry = {
  sourcePath?: string;
  service?: string;
  details?: string[];
};

export function websiteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path;

  const cleaned = path.replace(/^\/+|\/+$/g, '');
  const normalized = cleaned ? `/${cleaned}/` : '/';
  return `${siteConfig.url}${normalized}`;
}

export function whatsappHref({
  sourcePath = '/',
  service,
  details = [],
}: WhatsAppInquiry = {}) {
  const subject = service || 'kebutuhan aluminium dan kaca';
  const source = websiteUrl(sourcePath);
  const message = [
    `Halo Abadi Makmur Aluminium, saya datang dari ${source} dan ingin konsultasi terkait ${subject}.`,
    ...details.filter(Boolean),
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

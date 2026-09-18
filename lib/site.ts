export const siteConfig = {
  name: 'Abadi Makmur Aluminium',
  legalName: 'CV Kristian Abadi',
  description:
    'Jasa fabrikasi dan pemasangan aluminium & kaca di Tangerang untuk pintu, jendela, kusen, sliding system, partisi kaca, frameless glass, spandrel door, dan shower box.',
  area: 'Tangerang, Banten',
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://abadi-makmur-aluminium.example',
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  colors: {
    primary: '#D9362B',
    secondary: '#202124',
    accent: '#F28C28',
  },
};

export function whatsappHref(message: string) {
  const query = `?text=${encodeURIComponent(message)}`;
  return siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}${query}`
    : `https://wa.me/${query}`;
}

export const defaultWhatsAppMessage =
  'Halo Abadi Makmur Aluminium, saya ingin konsultasi kebutuhan aluminium/kaca di Tangerang.';

export type Service = {
  slug: string;
  keyword: string;
  shortTitle: string;
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  highlight: string;
  benefits: string[];
  suitableFor: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'pintu-aluminium-tangerang',
    keyword: 'pintu aluminium',
    shortTitle: 'Pintu Aluminium',
    title: 'Pintu Aluminium Tangerang',
    description:
      'Pintu aluminium untuk rumah, toko, kantor, dan area komersial dengan pilihan swing maupun sliding, dikombinasikan dengan kaca sesuai kebutuhan ruang.',
    metaDescription:
      'Jasa pintu aluminium Tangerang untuk rumah, toko, kantor dan area komersial. Konsultasi model swing/sliding, ukuran dan kombinasi kaca via WhatsApp.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=86',
    imageAlt: 'Referensi visual pintu dan partisi kaca berbingkai aluminium pada interior modern',
    highlight: 'Swing · Sliding · Kaca',
    benefits: [
      'Rangka aluminium ringan dan rapi untuk penggunaan harian',
      'Pilihan bukaan disesuaikan dengan luas dan sirkulasi ruang',
      'Dapat dipadukan dengan kaca bening, buram, atau opsi sesuai kebutuhan proyek',
    ],
    suitableFor: ['Rumah tinggal', 'Ruko & toko', 'Kantor', 'Area servis dan komersial'],
    faq: [
      {
        q: 'Apakah pintu aluminium bisa dibuat sliding?',
        a: 'Bisa. Konfigurasi swing atau sliding ditentukan berdasarkan bukaan, fungsi ruang, dan kebutuhan akses di lokasi.',
      },
      {
        q: 'Apakah ukuran pintu bisa custom?',
        a: 'Ya. Pengerjaan fabrikasi idealnya mengikuti ukuran aktual di lokasi agar proporsi dan pemasangan lebih presisi.',
      },
    ],
  },
  {
    slug: 'jendela-aluminium-tangerang',
    keyword: 'jendela aluminium',
    shortTitle: 'Jendela Aluminium',
    title: 'Jendela Aluminium Tangerang',
    description:
      'Jendela aluminium untuk hunian dan bangunan komersial dengan pendekatan yang bersih, proporsional, serta mudah dipadukan dengan gaya fasad modern.',
    metaDescription:
      'Jasa jendela aluminium Tangerang untuk rumah dan bangunan komersial. Konsultasi ukuran, tipe bukaan, warna rangka dan pilihan kaca.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=86',
    imageAlt: 'Referensi visual jendela besar berbingkai gelap pada rumah modern',
    highlight: 'Ventilasi · Cahaya · Proporsi',
    benefits: [
      'Profil ramping membantu tampilan fasad terasa lebih bersih',
      'Konfigurasi bukaan dapat disesuaikan dengan kebutuhan ventilasi',
      'Pilihan kaca dapat diarahkan untuk privasi, cahaya, atau tampilan',
    ],
    suitableFor: ['Kamar & ruang keluarga', 'Fasad rumah', 'Ruko', 'Kantor'],
    faq: [
      {
        q: 'Tipe bukaan apa yang tersedia?',
        a: 'Pilihan umum meliputi sliding dan casement/swing. Rekomendasi akhirnya mengikuti kondisi bukaan dan penggunaan ruang.',
      },
      {
        q: 'Bisa dibuat dengan warna frame gelap?',
        a: 'Bisa, tergantung pilihan finishing/profil yang tersedia untuk proyek. Warna sebaiknya diselaraskan dengan fasad dan elemen interior.',
      },
    ],
  },
  {
    slug: 'kusen-aluminium-tangerang',
    keyword: 'kusen aluminium',
    shortTitle: 'Kusen Aluminium',
    title: 'Kusen Aluminium Tangerang',
    description:
      'Kusen aluminium sebagai basis bukaan pintu dan jendela yang rapi, stabil, dan mudah dipadukan dengan berbagai gaya arsitektur.',
    metaDescription:
      'Jasa kusen aluminium Tangerang untuk pintu dan jendela. Fabrikasi berdasarkan ukuran lokasi, kebutuhan bukaan dan tampilan bangunan.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=86',
    imageAlt: 'Referensi visual detail fasad dan bingkai bukaan arsitektur modern',
    highlight: 'Presisi · Rapi · Adaptif',
    benefits: [
      'Dibuat mengikuti kebutuhan ukuran aktual',
      'Visual frame yang bersih untuk hunian maupun komersial',
      'Mendukung berbagai konfigurasi pintu dan jendela',
    ],
    suitableFor: ['Renovasi', 'Bangunan baru', 'Ruko', 'Kantor & retail'],
    faq: [
      {
        q: 'Apakah kusen dibuat setelah survei?',
        a: 'Idealnya ukuran final dikonfirmasi dari kondisi aktual agar fabrikasi dan pemasangan tidak mengandalkan asumsi ukuran.',
      },
      {
        q: 'Apakah bisa untuk renovasi kusen lama?',
        a: 'Bisa dievaluasi. Kondisi bukaan, dinding, dan elemen lama perlu dilihat untuk menentukan pendekatan pemasangan yang tepat.',
      },
    ],
  },
  {
    slug: 'partisi-kaca-tangerang',
    keyword: 'partisi kaca',
    shortTitle: 'Partisi Kaca',
    title: 'Partisi Kaca Tangerang',
    description:
      'Partisi kaca untuk ruang kantor, toko, klinik, studio, atau hunian yang membutuhkan pembagian area tanpa membuat ruang terasa sempit dan gelap.',
    metaDescription:
      'Jasa partisi kaca Tangerang untuk kantor, toko dan hunian. Pilihan frameless atau kombinasi aluminium untuk ruang yang terasa terang dan modern.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=86',
    imageAlt: 'Referensi visual partisi kaca pada interior kantor modern',
    highlight: 'Frameless · Office · Light',
    benefits: [
      'Membagi ruang sambil menjaga aliran cahaya',
      'Tampilan minimal dan cocok untuk interior modern',
      'Dapat dikombinasikan dengan frame aluminium atau pendekatan frameless',
    ],
    suitableFor: ['Kantor', 'Retail', 'Klinik & studio', 'Hunian modern'],
    faq: [
      {
        q: 'Partisi kaca cocok untuk kantor kecil?',
        a: 'Cocok karena pembagian ruang tetap terasa terbuka secara visual. Layout perlu disesuaikan dengan sirkulasi dan privasi yang dibutuhkan.',
      },
      {
        q: 'Apakah tersedia opsi frameless?',
        a: 'Ya, pendekatan frameless dapat dipertimbangkan sesuai dimensi, kebutuhan pintu, sistem hardware, dan kondisi lokasi.',
      },
    ],
  },
  {
    slug: 'shower-box-tangerang',
    keyword: 'shower box',
    shortTitle: 'Shower Box',
    title: 'Shower Box Tangerang',
    description:
      'Shower box kaca untuk memisahkan area basah dan kering dengan tampilan minimal, cocok untuk kamar mandi rumah, apartemen, maupun properti komersial.',
    metaDescription:
      'Jasa shower box Tangerang dengan kaca untuk kamar mandi rumah, apartemen dan properti komersial. Konsultasi ukuran, bukaan dan hardware.',
    image:
      'https://images.unsplash.com/photo-1722348673643-34f971cbe686?auto=format&fit=crop&w=1800&q=86',
    imageAlt: 'Referensi visual shower box kaca pada kamar mandi minimal modern',
    highlight: 'Clean · Dry Zone · Glass',
    benefits: [
      'Membantu memisahkan area basah dan kering',
      'Tampilan transparan membuat kamar mandi terasa lebih ringan',
      'Konfigurasi pintu dan panel mengikuti layout ruang',
    ],
    suitableFor: ['Rumah tinggal', 'Apartemen', 'Guest house', 'Properti komersial'],
    faq: [
      {
        q: 'Apakah shower box harus full frameless?',
        a: 'Tidak. Sistem dapat disesuaikan dengan kebutuhan desain, struktur, hardware, ukuran, dan kondisi area kamar mandi.',
      },
      {
        q: 'Bagaimana menentukan ukuran shower box?',
        a: 'Ukuran sebaiknya mengacu pada area aktual, posisi sanitary, arah bukaan, dan ruang gerak pengguna.',
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;

export const portfolioReferences = [
  {
    title: 'Sliding aluminium + kaca',
    category: 'Pintu & Sliding',
    image:
      'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=84',
    alt: 'Referensi visual bukaan kaca besar pada interior modern',
  },
  {
    title: 'Partisi kaca kantor',
    category: 'Partisi',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=84',
    alt: 'Referensi visual partisi kaca kantor',
  },
  {
    title: 'Jendela aluminium modern',
    category: 'Jendela',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=84',
    alt: 'Referensi visual jendela dan fasad modern',
  },
  {
    title: 'Shower enclosure kaca',
    category: 'Shower Box',
    image:
      'https://images.unsplash.com/photo-1722348673643-34f971cbe686?auto=format&fit=crop&w=1400&q=84',
    alt: 'Referensi visual shower box kaca',
  },
  {
    title: 'Kaca & frame pada fasad',
    category: 'Kusen',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=84',
    alt: 'Referensi visual detail fasad dan frame modern',
  },
];

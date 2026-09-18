import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/layanan', '/portofolio', '/artikel', '/tentang', '/kontak'];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/jasa/${service.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}

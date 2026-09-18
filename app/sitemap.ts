import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site';
import { getArticleSlugs } from '@/lib/wordpress';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/layanan', '/portofolio', '/artikel', '/tentang', '/kontak'];
  const articleSlugs = await getArticleSlugs();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/layanan/${service.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...articleSlugs.map((slug) => ({
      url: `${siteConfig.url}/artikel/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];
}

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

function apiBase() {
  const raw = process.env.WORDPRESS_API_URL?.replace(/\/$/, '');
  if (!raw) return null;
  return raw.endsWith('/wp-json/wp/v2') ? raw : `${raw}/wp-json/wp/v2`;
}

export function wordpressConfigured() {
  return Boolean(apiBase());
}

export function plainText(html: string) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/\s+/g, ' ')
    .trim();
}

export function featuredImage(post: WordPressPost) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url
    ? { src: media.source_url, alt: media.alt_text || plainText(post.title.rendered) }
    : null;
}

export async function getArticles(limit = 8): Promise<WordPressPost[]> {
  const base = apiBase();
  if (!base) return [];

  try {
    const response = await fetch(
      `${base}/posts?status=publish&per_page=${limit}&_embed=wp:featuredmedia`,
    );
    if (!response.ok) return [];
    return (await response.json()) as WordPressPost[];
  } catch {
    return [];
  }
}

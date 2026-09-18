import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { featuredImage, getArticles, plainText } from '@/lib/wordpress';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Artikel Aluminium & Kaca',
  description: 'Artikel, panduan, inspirasi dan tips seputar pintu aluminium, jendela aluminium, kusen, partisi kaca, shower box dan perawatan aluminium kaca.',
};

export default async function ArticlesPage() {
  const posts = await getArticles(9);

  return (
    <>
      <section className="inner-hero article-hero section-pad">
        <div className="container article-hero-grid">
          <Reveal>
            <p className="eyebrow">ARTIKEL · KNOWLEDGE</p>
            <h1>Lebih paham sebelum<br /><span>memilih material.</span></h1>
          </Reveal>
          <Reveal className="article-hero-copy" delay={0.08}>
            <p>Panduan praktis seputar aluminium dan kaca untuk membantu memahami sistem bukaan, material, perawatan, dan pilihan yang lebih sesuai dengan kebutuhan ruang.</p>
          </Reveal>
        </div>
      </section>

      <section className="section article-section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="article-bento">
              {posts.map((post, index) => {
                const image = featuredImage(post);
                return (
                  <Reveal key={post.id} className={`article-card article-card-${(index % 5) + 1}`} delay={(index % 5) * 0.04}>
                    <Link href={`/artikel/${post.slug}/`}>
                      <div className="article-card-visual">
                        {image ? (
                          <img src={image.src} alt={image.alt} width="1000" height="720" loading="lazy" />
                        ) : (
                          <div className="article-placeholder" aria-hidden="true"><span>AM</span></div>
                        )}
                      </div>
                      <div className="article-card-body">
                        <p className="article-date">{new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(post.date))}</p>
                        <h2>{plainText(post.title.rendered)}</h2>
                        <p>{plainText(post.excerpt.rendered)}</p>
                        <span className="text-link">Baca artikel <b>↗</b></span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <Reveal className="article-empty">
              <p className="eyebrow">EDITORIAL SYSTEM READY</p>
              <h2>Artikel segera hadir.</h2>
              <p>Halaman ini sudah disiapkan untuk menerima artikel dari WordPress CMS. Setelah endpoint WordPress dihubungkan, artikel terbit akan tampil otomatis saat website dibangun ulang.</p>
              <div className="article-topics">
                <span>Pintu aluminium</span>
                <span>Jendela aluminium</span>
                <span>Partisi kaca</span>
                <span>Shower box</span>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

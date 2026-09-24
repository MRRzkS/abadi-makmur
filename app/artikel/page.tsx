import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ArticlesCollection } from "@/components/ArticlesCollection";
import { featuredImage, getArticles, plainText } from "@/lib/wordpress";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: { canonical: "/artikel/" },
  title: "Artikel Aluminium & Kaca",
  description:
    "Artikel, panduan, inspirasi dan tips seputar pintu aluminium, jendela aluminium, kusen, partisi kaca, shower box dan perawatan aluminium kaca.",
};

export default async function ArticlesPage() {
  const posts = await getArticles(9);

  return (
    <>
      <section className="inner-hero article-hero section-pad">
        <div className="container article-hero-grid">
          <Reveal>
            <p className="eyebrow">PANDUAN ALUMINIUM & KACA</p>
            <h1>
              Lebih yakin sebelum
              <br />
              <span>memilih layanan.</span>
            </h1>
          </Reveal>
          <Reveal className="article-hero-copy" delay={0.08}>
            <p>
              Panduan praktis seputar pintu, jendela, kusen aluminium, partisi
              kaca, shower box, perawatan, dan hal yang perlu dipertimbangkan
              sebelum pemasangan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section article-section">
        <div className="container">
          {posts.length > 0 ? (
            <ArticlesCollection
              posts={posts.map((post) => {
                const image = featuredImage(post);
                return {
                  id: post.id,
                  slug: post.slug,
                  date: new Intl.DateTimeFormat("id-ID", {
                    dateStyle: "medium",
                  }).format(new Date(post.date)),
                  title: plainText(post.title.rendered),
                  excerpt: plainText(post.excerpt.rendered),
                  image,
                };
              })}
            />
          ) : (
            <Reveal className="article-empty">
              <p className="eyebrow">PANDUAN & TIPS</p>
              <h2>Artikel segera hadir.</h2>
              <p>
                Kami sedang menyiapkan panduan seputar aluminium dan kaca agar
                Anda lebih mudah memahami pilihan material, perawatan, dan
                kebutuhan pemasangan.
              </p>
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

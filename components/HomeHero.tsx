import Link from "next/link";
import { whatsappHref } from "@/lib/site";

const heroImage =
  "https://images.pexels.com/photos/34880778/pexels-photo-34880778/free-photo-of-modern-minimalist-house-facade-in-jakarta.jpeg";

export function HomeHero() {
  return (
    <section
      className="home-hero"
      data-nav-theme="dark"
      aria-labelledby="home-hero-title"
    >
      <img
        className="home-hero-image"
        src={`${heroImage}?auto=compress&cs=tinysrgb&w=1600`}
        srcSet={[640, 960, 1600, 2400]
          .map(
            (width) =>
              `${heroImage}?auto=compress&cs=tinysrgb&w=${width} ${width}w`,
          )
          .join(", ")}
        sizes="100vw"
        alt="Fasad rumah modern dengan bukaan kaca lebar dan frame aluminium hitam"
        width="1600"
        height="2000"
        fetchPriority="high"
        loading="eager"
      />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="container home-hero-content">
        <p className="eyebrow">ALUMINIUM & KACA &middot; JABODETABEK</p>
        <h1 id="home-hero-title">
          Buka ruang.
          <br />
          <span>Hadirkan cahaya.</span>
        </h1>
        <p className="home-hero-lead">
          Pintu, jendela, kusen, partisi kaca, dan shower box. Dibuat sesuai
          ruang Anda, dari pengukuran hingga pemasangan.
        </p>
        <div className="home-hero-actions">
          <a
            className="button home-hero-primary"
            href={whatsappHref({ sourcePath: "/" })}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi WhatsApp <span aria-hidden="true">&#8599;</span>
          </a>
          <Link className="button home-hero-secondary" href="/layanan/">
            Lihat layanan <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
        <p className="home-hero-caption">
          Hunian & komersial <span aria-hidden="true">&middot;</span> Foto
          referensi
        </p>
      </div>
    </section>
  );
}

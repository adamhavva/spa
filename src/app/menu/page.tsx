import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Check } from "@/components/icons";
import {
  additionalServices,
  packages,
  priceDisclaimer,
  treatments,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Menu Treatments",
  description:
    "KAMA Spa menu — massage, body scrub, face ritual, head & scalp treatment, bath ritual, dan paket All Day Spa.",
};

const categoryLabels: Record<string, string> = {
  Massage: "Massage",
  Body: "Body",
  Face: "Facials",
  "Head & Scalp": "Head & Scalp",
  Bath: "Bath",
};

const menuBookPages = Array.from(
  { length: 10 },
  (_, i) => ({
    n: i + 1,
    src: `/img/kama/menu/menu-page-${String(i + 1).padStart(2, "0")}.jpg`,
  }),
);

export default function MenuPage() {
  const massage = treatments.filter((t) => t.category === "Massage");
  const body = treatments.filter((t) => t.category === "Body");

  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Menu</div>
                <h1 className="header-xxl">Each of our massage style is a nurturing journey of healing.</h1>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">
                  The journey through our signature touch is where tension fades and inner
                  peace is lovingly restored.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="massage" className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Massage</div>
                <h2 className="header-l">Signature Treatments</h2>
              </div>

              <div className="w-layout-grid whats-new_list">
                {[...massage, ...body].map((t) => (
                  <Link
                    key={t.slug}
                    href={`/menu/${t.slug}`}
                    className="treatment-card w-dyn-item"
                  >
                    <div className="treatment-card_image image-container">
                      <img src={t.image} alt={t.name} loading="lazy" className="image-cover" />
                    </div>
                    <div className="treatment-card_body">
                      <div className="eyebrow-s text-style-allcaps">{categoryLabels[t.category]}</div>
                      <h3 className="header-s">{t.name}</h3>
                      <div className="body-m text-color-gray">{t.tagline}</div>
                      <div className="treatment-card_price-row">
                        <span className="caption-s text-color-gray">
                          {t.prices[0].duration}
                        </span>
                        <span className="price-row_value">{t.prices[0].price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="spacer-large" />
              <div className="eyebrow-s text-color-gray">{priceDisclaimer}</div>
            </div>
          </div>
        </section>

        {/* Day Spa packages */}
        <section id="packages" className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">All Day Spa</div>
                <h2 className="header-l">Our spa bundles</h2>
                <p className="body-m text-color-gray">
                  Our thoughtfully curated spa bundles combine massages, treatments, and
                  rituals designed to pamper, restore balance, and leave you refreshed all day
                  long.
                </p>
              </div>

              <div className="w-layout-grid whats-new_list">
                {packages.map((p) => (
                  <Link key={p.slug} href={`/menu/${p.slug}`} className="package-card w-dyn-item">
                    <div className="package-card_image image-container">
                      <img src={p.image} alt={p.name} loading="lazy" className="image-cover" />
                    </div>
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">{p.subtitle}</div>
                      <h3 className="header-s">{p.name}</h3>
                      <div className="body-m text-color-gray">{p.description}</div>
                      <div className="package-includes">
                        {p.includes.map((inc) => (
                          <span key={inc.label} className="package-includes_item">
                            <Check />
                            {inc.label} {inc.minutes}
                          </span>
                        ))}
                      </div>
                      <div className="spacer-small" />
                      <div className="treatment-card_price-row">
                        <span className="caption-s text-color-gray">{p.duration}</span>
                        <span className="price-row_value">{p.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="spacer-large" />
              <div className="eyebrow-s text-color-gray">{priceDisclaimer}</div>
            </div>
          </div>
        </section>

        {/* Additional services */}
        <section id="body" className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Additional Service</div>
                <h2 className="header-l">Add-ons & Rituals</h2>
              </div>

              <div className="w-layout-grid whats-new_list">
                {additionalServices.map((s) => (
                  <div key={s.name} className="treatment-card w-dyn-item">
                    <div className="treatment-card_image image-container">
                      <img src={s.image} alt={s.name} loading="lazy" className="image-cover" />
                    </div>
                    <div className="treatment-card_body">
                      <h3 className="header-s">{s.name}</h3>
                      <div className="body-m text-color-gray">{s.description}</div>
                      <div className="treatment-card_price-row">
                        <span className="caption-s text-color-gray">Add-on</span>
                        <span className="price-row_value">{s.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="spacer-large" />
              <div className="eyebrow-s text-color-gray">{priceDisclaimer}</div>

              <div className="spacer-xlarge" />
              <Link href="/contact" className="button is-secondary is-icon w-inline-block">
                <div>Book Your Treatment</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Menu book gallery */}
        <section id="gallery" className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Menu Book</div>
                <h2 className="header-l">Galeri Menu KAMA Spa 2026</h2>
                <p className="body-m text-color-gray">
                  Jelajahi menu lengkap kami sebagaimana tampil di menu book resmi — atau
                  unduh PDF-nya untuk dibawa pulang.
                </p>
              </div>

              <div className="menu-gallery">
                {menuBookPages.map((page) => (
                  <a
                    key={page.src}
                    href="/img/kama/menu/kama-menu-2026.pdf"
                    target="_blank"
                    rel="noopener"
                    className="menu-gallery_item"
                    aria-label={`Open menu book page ${page.n}`}
                  >
                    <img src={page.src} alt={`KAMA Spa menu book — page ${page.n}`} loading="lazy" />
                  </a>
                ))}
              </div>

              <div className="spacer-large" />
              <a
                href="/img/kama/menu/kama-menu-2026.pdf"
                download
                className="button is-secondary is-icon w-inline-block"
              >
                <div>Download Menu (PDF)</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

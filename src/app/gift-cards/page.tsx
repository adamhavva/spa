import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "@/components/icons";
import { packages } from "@/data/content";
import { giftCards } from "@/data/pages";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "KAMA Gift Card — hadiahkan relaksasi. Ditukar untuk seluruh layanan di semua lokasi KAMA Spa dan tidak pernah kedaluwarsa.",
};

export default function GiftCardsPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">{giftCards.eyebrow}</div>
                <h1 className="header-xxl">
                  {giftCards.title} <span className="text-style-italic">KAMA Gift Card.</span>
                </h1>
                <div className="spacer-medium" />
                <p className="body-l text-color-gray">{giftCards.intro}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Denominations */}
        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Buy Gift Cards</div>
                <h2 className="header-l">Pilih nominal yang paling pas.</h2>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">
                  Semua gift card berlaku di seluruh treatment dan paket All Day Spa, di semua
                  lokasi KAMA Spa, dan tidak memiliki tanggal kedaluwarsa.
                </p>
              </div>
              <div className="w-layout-grid whats-new_list">
                {giftCards.denominations.map((card) => (
                  <div key={card.value} className="whats-new_card w-dyn-item">
                    <div className="image-container ratio16-11">
                      <img
                        src={card.image}
                        alt={card.label}
                        loading="lazy"
                        className="image-cover"
                      />
                    </div>
                    <div className="article-cart_inner-text">
                      <div className="article-card_tags">
                        <div className="eyebrow-s">{card.label}</div>
                      </div>
                      <h3 className="header-s">{card.value}</h3>
                      <div className="body-m text-color-gray">{card.body}</div>
                    </div>
                    <div className="spacer-xxlarge" />
                    <Link href="/contact" className="button is-tertiary whats-new-button w-button">
                      Beli Gift Card
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specials */}
        <section className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Specials</div>
                <h2 className="header-l">Perayaan & penawaran terbatas.</h2>
              </div>
              <div className="w-layout-grid whats-new_list">
                {giftCards.specials.map((special) => (
                  <div key={special.title} className="whats-new_card w-dyn-item">
                    <div className="image-container ratio16-11">
                      <img
                        src={special.image}
                        alt={special.title}
                        loading="lazy"
                        className="image-cover"
                      />
                    </div>
                    <div className="article-cart_inner-text">
                      <div className="article-card_tags">
                        <div className="eyebrow-s">{special.eyebrow}</div>
                      </div>
                      <h3 className="header-s">{special.title}</h3>
                      <div className="body-m text-color-gray">{special.body}</div>
                      <div className="spacer-small" />
                      <div className="caption-m text-weight-bold">{special.price}</div>
                      <div className="caption-s text-color-gray">{special.period}</div>
                    </div>
                    <div className="spacer-xxlarge" />
                    <Link href="/contact" className="button is-tertiary whats-new-button w-button">
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="section_quote">
          <div className="padding-section-global">
            <div className="padding-global">
              <div className="container-large">
                <div className="layout-row gap-xlarge">
                  <div className="sizing-grow layout-center">
                    <div className="eyebrow-s text-style-allcaps">Packaging</div>
                    <div className="spacer-small" />
                    <h3 className="header-l">{giftCards.packagingTitle}</h3>
                    <div className="spacer-medium" />
                    <p className="body-m text-color-gray">{giftCards.packagingBody}</p>
                    <div className="spacer-large" />
                    <Link href="/locations" className="button is-secondary is-icon w-inline-block">
                      <div>Visit Our Locations</div>
                      <div className="button_icon w-embed">
                        <ArrowRight />
                      </div>
                    </Link>
                  </div>
                  <div className="sizing-grow">
                    <div className="page-hero_image image-container">
                      <img
                        src="/img/the-heights-retail-p-800.jpg"
                        alt="KAMA Spa gift card packaging"
                        className="image-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature packages */}
        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Signature Packages</div>
                <h2 className="header-l">{giftCards.signatureTitle}</h2>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">{giftCards.signatureBody}</p>
              </div>
              <div className="w-layout-grid whats-new_list">
                {packages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/menu/${p.slug}`}
                    className="package-card w-dyn-item"
                  >
                    <div className="package-card_image image-container">
                      <img src={p.image} alt={p.name} loading="lazy" className="image-cover" />
                    </div>
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">{p.duration}</div>
                      <h3 className="header-s">{p.name}</h3>
                      <div className="body-m text-color-gray">{p.description}</div>
                      <div className="treatment-card_price-row">
                        <span className="caption-s text-color-gray">{p.subtitle}</span>
                        <span className="price-row_value">{p.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section_get-in-touch is-top-off">
          <div className="get-in-touch_container">
            <div className="get-in-touch_banner">
              <h4 className="header-l">Have any questions? Drop us a line.</h4>
              <Link
                href="/contact"
                className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block"
              >
                <div>Get In Touch</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

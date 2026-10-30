import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "@/components/icons";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "KAMA Spa adalah wellness sanctuary di jantung South Jakarta. Kombinasi teknik penyembuhan tradisional dan pendekatan wellness modern.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <h1 className="header-xxl">Who We Are</h1>
                <p className="body-l">
                  We exist to find ways to make truly great wellness accessible to everyone,
                  and believe taking care of yourself should be easy, affordable, &amp; fun.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout-row gap-xlarge">
                <div className="sizing-grow">
                  <div className="page-hero_image image-container">
                    <img
                      src="/img/We_We_Are_Image.webp"
                      alt="KAMA Spa interior"
                      className="image-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="sizing-grow layout-center">
                  <h4 className="header-l">
                    KAMA is your trusted partner in joyful rejuvenation, offering safe,
                    effective, and accessible treatments to restore your inner and outer glow.
                  </h4>
                  <div className="spacer-large" />
                  <p className="body-m text-color-gray">
                    KAMA Spa is a wellness sanctuary in the heart of South Jakarta. Combining
                    traditional healing techniques and modern wellness approaches, KAMA Spa
                    offers thoughtfully curated treatments designed to restore balance,
                    relaxation, and mindful presence.
                  </p>
                  <div className="spacer-medium" />
                  <p className="body-m text-color-gray">
                    More than relaxation — we create meaningful reset experiences.
                  </p>
                  <div className="spacer-large" />
                  <Link href="/menu" className="button is-secondary is-icon w-inline-block">
                    <div>Explore the Menu</div>
                    <div className="button_icon w-embed">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_quote">
          <div className="padding-section-global">
            <div className="padding-global">
              <div className="container-large">
                <div className="section-header">
                  <h2 className="header-l">Reviews</h2>
                  <p className="body-m text-color-gray">
                    We always value our guests&apos; opinions. We take pride in creating a
                    space where you can feel at home and fully comfortable. Through meticulous
                    attention to every detail, we aim to craft the perfect experience for you.
                    Your feedback is crucial in helping us improve and grow.
                  </p>
                </div>
                <div className="w-layout-grid whats-new_list">
                  {testimonials.map((t) => (
                    <div key={t.name} className="whats-new_card w-dyn-item">
                      <div className="article-cart_inner-text">
                        <div className="body-m text-color-gray">“{t.quote}”</div>
                        <div className="spacer-medium" />
                        <div className="caption-m text-weight-bold">{t.name}</div>
                        <div className="caption-s text-color-gray">{t.location}</div>
                        <div className="eyebrow-s">{t.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
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

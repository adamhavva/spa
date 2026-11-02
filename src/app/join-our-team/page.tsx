import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "@/components/icons";
import { locations } from "@/data/content";
import { careers } from "@/data/pages";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Bergabung dengan tim KAMA Spa di South Jakarta. Lowongan therapist, esthetician, concierge, housekeeping, dan spa manager.",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">{careers.eyebrow}</div>
                <h1 className="header-xxl">{careers.title}</h1>
                <div className="spacer-medium" />
                <p className="body-l text-color-gray">{careers.intro}</p>
                <div className="spacer-large" />
                <a href="mailto:jobs@kamaspa.id" className="button is-tertiary w-inline-block">
                  <div>See Available Positions</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Positions */}
        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Open Roles</div>
                <h2 className="header-l">Posisi yang sedang kami buka.</h2>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">{careers.positionsIntro}</p>
              </div>
              <div className="w-layout-grid whats-new_list grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {careers.positions.map((position) => (
                  <div
                    key={position.title}
                    className="whats-new_card w-dyn-item w-full min-w-0 max-w-none"
                  >
                    <div className="article-cart_inner-text min-w-0">
                      <h3 className="header-s">{position.title}</h3>
                      <div className="caption-s text-color-gray">{position.type}</div>
                      <div className="caption-s text-color-gray">{position.location}</div>
                    </div>
                    <div className="spacer-xxlarge" />
                    <a
                      href="mailto:jobs@kamaspa.id"
                      className="button is-tertiary whats-new-button w-button w-full max-w-none"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section_who-we-are">
          <div className="padding-global padding-section-global is-basic">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Main Benefits</div>
                <h2 className="header-l">Yang kami tawarkan kepada tim kami.</h2>
              </div>
              <div className="w-layout-grid benefits_grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {careers.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="benefits_main-card w-dyn-item w-full min-w-0"
                  >
                    <h4 className="header-xl">{benefit.value}</h4>
                    <div className="layout-row gap-xxsmall">
                      <div className="caption-m">{benefit.title}</div>
                    </div>
                    <div className="caption-s text-color-gray">{benefit.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Locations</div>
                <h2 className="header-l">Lokasi kami.</h2>
              </div>
              <div className="w-layout-grid whats-new_list grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations#${loc.slug}`}
                    className="location-card_component w-inline-block w-full min-w-0 max-w-none"
                  >
                    <div className="image-container aspect-ratio-square is-relative w-full h-auto">
                      <img
                        src={loc.image}
                        alt={`${loc.name} KAMA Spa`}
                        loading="lazy"
                        className="image-cover"
                      />
                      <div className="hover-overlay" />
                      <div className="special-tag">
                        <div className="badge">{loc.tag}</div>
                      </div>
                    </div>
                    <div className="caption-l">
                      {loc.name} | {loc.area}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team voices */}
        <section className="section_quote">
          <div className="padding-section-global">
            <div className="padding-global">
              <div className="container-large">
                <div className="section-header">
                  <h2 className="header-l">Cerita dari tim kami.</h2>
                </div>
                <div className="w-layout-grid slider_slide workers-reviews_grid overflow-x-auto snap-x">
                  {careers.reviews.map((review) => (
                    <div
                      key={review.name}
                      className="workers-reviews_card w-dyn-item snap-start"
                    >
                      <div className="body-m">“{review.quote}”</div>
                      <div className="workers-review_worker">
                        <div className="caption-s text-weight-semibold">{review.name}</div>
                        <div className="caption-s text-color-gray">{review.role}</div>
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

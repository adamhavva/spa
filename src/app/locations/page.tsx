import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Clock, LocationPin, WhatsApp } from "@/components/icons";
import { locations, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Temukan KAMA Spa di South Jakarta. Katalog treatment, jam buka, dan cara reservasi.",
};

export default function LocationsPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <h1 className="header-xxl">Locations</h1>
                <p className="body-m text-color-gray">
                  Discover our serene spa locations near you. Find your perfect getaway and
                  indulge in ultimate relaxation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="w-layout-grid whats-new_list">
                {locations.map((loc) => (
                  <div key={loc.slug} id={loc.slug} className="contact-card w-dyn-item">
                    <div className="contact-card_image image-container">
                      <img
                        src={loc.image}
                        alt={`${loc.name} KAMA Spa`}
                        loading="lazy"
                        className="image-cover"
                      />
                      <div className="special-tag is-bottom">
                        <div className="badge">{loc.tag}</div>
                      </div>
                    </div>
                    <div className="contact-card_body">
                      <h3 className="header-s">
                        {loc.name} | {loc.area}
                      </h3>
                      <div className="contact-meta">
                        <LocationPin />
                        <span>{loc.address}</span>
                      </div>
                      <div className="contact-meta">
                        <Clock />
                        <span>{loc.hours}</span>
                      </div>
                      <div className="contact-meta">
                        <WhatsApp />
                        <span>
                          <a href={site.phoneHref}>{loc.phone}</a>
                        </span>
                      </div>
                      <div className="spacer-small" />
                      <Link
                        href="/contact"
                        className="button is-secondary is-icon w-inline-block"
                      >
                        <div>Book Here</div>
                        <div className="button_icon w-embed">
                          <ArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
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

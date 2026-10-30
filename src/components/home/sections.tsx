import Link from "next/link";
import { ArrowLeft, ArrowRightLong, ArrowRight } from "@/components/icons";
import { journalPosts, locations, testimonials } from "@/data/content";

export function LocationsSection() {
  return (
    <section className="section_slider">
      <div className="padding-section-global home-locations">
        <div className="padding-global">
          <div className="container-large">
            <div className="content_wrapp home-location-text">
              <div className="section-header home-location-section">
                <h3 className="header-l home-location-header">Locations</h3>
                <p className="home-location-text">
                  KAMA locations are conveniently located throughout South Jakarta, with
                  more on the way.
                  <br />‍
                </p>
                <div className="icon-wrapper hide">
                  <button type="button" aria-label="Previous locations">
                    <div className="slider-arrow is-disabled w-embed">
                      <ArrowLeft />
                    </div>
                  </button>
                  <button type="button" aria-label="Next locations">
                    <div className="slider-arrow w-embed">
                      <ArrowRightLong />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="padding-global">
              <div className="container-large">
                <div className="layout-center home-loctions-button">
                  <Link
                    href="/locations"
                    className="button is-secondary is-icon locations-button w-inline-block"
                  >
                    <div>View All Locations</div>
                    <div className="button_icon w-embed">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slider_mask w-dyn-list">
              <div className="slider_slide is-locations-grid w-dyn-items">
                {locations.map((loc) => (
                  <div key={loc.slug} className="slider_item is-home-locations-tablet w-dyn-item">
                    <Link
                      href={`/locations#${loc.slug}`}
                      className="location-card_component w-inline-block"
                    >
                      <div className="image-container aspect-ratio-square is-relative">
                        <img src={loc.image} alt={`${loc.name} KAMA Spa`} className="image-cover" />
                        <div className="hover-overlay" />
                        <div className="special-tag">
                          <div className="badge">{loc.tag}</div>
                        </div>
                      </div>
                      <div className="caption-l">
                        {loc.name} | {loc.area}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatsNewSection() {
  return (
    <section id="home_whats_new" className="section_whats-new">
      <div className="padding-section-global">
        <div className="padding-global is-mobile-off">
          <div className="container-large">
            <div className="padding-global-mobile">
              <div className="section-header is-mobile">
                <h2 className="heading-style-h3 font-family-alternate">What’s New</h2>
              </div>
            </div>
            <div className="layout-column-desktop gap-xlarge">
              <div className="layout-row gap-large sizing-grow hide-mobile">
                <h2 className="header-l">What’s New</h2>
                <div className="newsletter-text_wrapp sizing-grow">
                  <div className="body-m text-color-gray">
                    We believe authentic beauty reaches far beyond the superficial, through
                    consistent self-care you let the beauty shine both externally and
                    internally. <br />‍
                    <span className="text-black-tablet">
                      Sign up to our newsletter to be informed about all our novelties.
                    </span>
                  </div>
                  <Link href="#footer" className="button is-secondary is-icon w-inline-block">
                    <div>
                      Subscribe <span className="show-until-1280">to Newsletter</span>
                    </div>
                    <div className="button_icon w-embed">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="slider_mask column-section">
                <div className="w-dyn-list">
                  <div role="list" className="whats-new_list w-dyn-items">
                    {journalPosts.map((post) => (
                      <div key={post.slug} role="listitem" className="whats-new_card w-dyn-item">
                        <div className="image-container ratio16-11">
                          <img src={post.image} alt="" loading="lazy" className="image-cover" />
                        </div>
                        <div className="article-cart_inner-text">
                          <div className="article-card_tags">
                            <div className="eyebrow-s">{post.tag}</div>
                            <div>·</div>
                            <div className="eyebrow-s">KAMA Journal</div>
                          </div>
                          <h3 className="header-s">{post.title}</h3>
                        </div>
                        <div className="spacer-xxlarge" />
                        <Link href="/journal" className="button is-tertiary whats-new-button w-button">
                          Learn More
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-gray" />
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section_quote">
      <div className="padding-section-global">
        <div className="padding-global">
          <div className="container-large">
            <div className="section-header">
              <h2 className="header-l">Reviews</h2>
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
  );
}

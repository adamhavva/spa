import Link from "next/link";
import { ArrowRight, ArrowRightThin } from "@/components/icons";
import { heroStats, membership, site } from "@/data/content";

export function Hero() {
  return (
    <header className="section_hero">
      <div className="padding-global no-padding">
        <div className="container-large">
          <div className="home_hero_container">
            <div className="text-center_wrapper">
              <h5 className="header-xs">
                <Link href="/menu">Massage • Spa • Corporate Wellness</Link>
              </h5>
              <div className="spacer-medium" />
              <h6 className="header-xxl">
                Relax. Refresh. (Repeat).
                <br />
              </h6>
              <div className="spacer-large" />
              <a href="#home_whats_new" className="body-m" aria-label="See what's new" />
            </div>

            <div className="home_hero_membership">
              <div className="membership_text-wrap">
                <div className="eyebrow-s text-style-allcaps">
                  <Link href="/about">
                    <strong>WELCOME TO KAMA SPA</strong>
                  </Link>
                </div>
                <div className="caption-m">
                  <Link href="/menu">
                    Your premier destination for massage and wellness services in South
                    Jakarta. Joyful rejuvenation awaits.
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="button is-text w-inline-block">
                <div>Book Now</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
            </div>

            <div className="home_hero_asset">
              <img
                src="/img/kama/01-incense.jpg"
                alt=""
                className="image-cover"
              />
              <div className="hero-overlay is-coral-circle" />
              <div className="hero-overlay is-blue-circle" />
              <div className="hero-overlay" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function HeroStats() {
  return (
    <section className="section_counter-banner bkg-coral-gradient">
      <div className="padding-global padding-section-medium is-relative">
        <div className="banner-wrapper">
          <div className="banner_text-wrapp">
            <div className="body-m">A sanctuary in the heart of South Jakarta</div>
            <div className="text-rich-text header-l w-richtext">
              <p>
                <strong>More than relaxation</strong>
                <br />
                <em>we create meaningful reset experiences.</em>
              </p>
            </div>
            <div className="spacer-small" />
            <Link href="/about" className="button is-dark w-button">
              Our Story
            </Link>
          </div>
          <div className="counter_content-wraper">
            <div className="body-m">KAMA at a glance</div>
            <div className="counter_wrapper">
              {heroStats.map((stat) => (
                <div key={stat.label} className="counter_item">
                  <div className="counter_numbers">
                    <div className="counter_number">{stat.value}</div>
                  </div>
                  <div className="eyebrow-s">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MembershipBanner() {
  return (
    <section className="section_banner">
      <div className="padding-global is-double specials">
        <div className="container-large specials">
          <div className="promo-card_component is-home-wrap specials">
            <div className="promo-card_content is-asset is-home-wrap specials">
              <img
                src="/img/kama/07-flower-bowl.jpg"
                loading="lazy"
                alt="KAMA Spa treatment room"
                className="image-cover custom-ratio is-home-img"
              />
            </div>
            <div className="promo-card_content specials">
              <div className="promo-card_content_text">
                <h3 className="header-xl">
                  <em>
                    KAMA Membership.
                    <br />‍
                  </em>
                  {membership.price}
                </h3>
                <div className="promo-card_spacer_texts" />
                <div className="body-m text-color-gray h-circle-text">{membership.body}</div>
                <div className="promo-card_spacer_button" />
                <Link href={membership.href} className="button width-fill w-inline-block">
                  <div>{membership.cta}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookingBanner() {
  return (
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
              <ArrowRightThin />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

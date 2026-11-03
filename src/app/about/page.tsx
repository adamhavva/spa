import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "@/components/icons";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "KAMA Spa adalah wellness sanctuary di jantung South Jakarta. Kombinasi teknik penyembuhan tradisional dan pendekatan wellness modern.",
};

const STAR_PATH =
  "M8 1.61803L9.32058 5.68237L9.43284 6.02786H9.79611H14.0696L10.6123 8.53976L10.3184 8.75329L10.4306 9.09878L11.7512 13.1631L8.29389 10.6512L8 10.4377L7.70611 10.6512L4.24877 13.1631L5.56936 9.09878L5.68162 8.75329L5.38772 8.53976L1.93039 6.02786H6.20389H6.56716L6.67942 5.68237L8 1.61803Z";

function HeroCircles() {
  return (
    <div className="hero-circles_component">
      <div className="hero-circles">
        <div className="svg-hero-circle is-front w-embed">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1511 1511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6" filter="url(#kama-filter-front)">
              <circle cx="755.5" cy="755.5" r="555.5" fill="#F08577" />
            </g>
            <defs>
              <filter
                id="kama-filter-front"
                x="0"
                y="0"
                width="1511"
                height="1511"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="svg-hero-circle is-back w-embed">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1640 1640"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6" filter="url(#kama-filter-back)">
              <circle cx="820" cy="820" r="676" fill="#CED9EF" />
            </g>
            <defs>
              <filter
                id="kama-filter-back"
                x="0"
                y="0"
                width="1640"
                height="1640"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReviewStars() {
  return (
    <div className="review_stars-group">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="review_star w-embed">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={STAR_PATH} fill="currentColor" stroke="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <header className="section_header">
          <div className="padding-global">
            <div className="container-large">
              <div className="header_content_outer is-who-we-are_wrapper">
                <div className="header_content_inner">
                  <h1 className="header-xxl">Who We Are</h1>
                  <div className="body-m text-wrapp_balance">
                    We exist to find ways to make truly great wellness accessible to
                    everyone, and believe taking care of yourself should be easy,
                    affordable, &amp; fun.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container aspect-ratio-1-3">
            <img
              src="/img/kama/06-bride.jpg"
              alt="KAMA Spa interior"
              className="image-cover fit-top-45"
              loading="lazy"
            />
          </div>
          <HeroCircles />
        </header>

        <Reveal as="section" className="section_who-we-are">
          <div className="padding-global padding-section-global is-who-we-are">
            <div className="container-large">
              <div className="our-list_header">
                <div className="eyebrow-s" />
                <h4 className="header-xl text-style-italic">
                  KAMA is your trusted <br />
                  partner in joyful rejuvenation, offering safe, effective, and
                  accessible treatments to restore your inner and outer glow.
                </h4>
              </div>
            </div>
          </div>
          <div className="padding-section-global is-top-off">
            <div className="slider_mask w-dyn-list">
              <div className="w-dyn-empty">
                <div />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section_reviews">
          <div className="padding-section-global">
            <div className="padding-global">
              <div className="container-large">
                <div className="hide-desktop">
                  <h4 className="header-l">Reviews</h4>
                  <div className="spacer-xxlarge" />
                </div>
                <div className="locations_review_component">
                  <div className="locations_review_header_desktop">
                    <h4 className="header-l hide-smaller-992">Reviews</h4>
                    <div className="body-m text-color-gray">
                      We always value our guests&apos; opinions. We take pride in
                      creating a space where you can feel at home and fully comfortable.
                      Through meticulous attention to every detail, we aim to craft the
                      perfect experience for you.{" "}
                      <span className="text-color-black">
                        Your feedback is crucial in helping us improve and grow.
                      </span>
                    </div>
                  </div>
                  <div className="w-dyn-list">
                    <div className="locations_review_list w-dyn-items">
                      {testimonials.map((t) => (
                        <div key={t.name} className="w-dyn-item">
                          <div className="review_card">
                            <ReviewStars />
                            <div className="review_content">
                              <div className="body-m">&ldquo;{t.quote}&rdquo;</div>
                              <div className="review_user">
                                <div className="caption-s text-weight-semibold">
                                  {t.name}
                                </div>
                                <div className="display-inlineflex gap-xxsmall">
                                  <div className="caption-s text-color-gray">
                                    {t.location}
                                  </div>
                                  <div className="caption-s text-color-gray">{t.role}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section_get-in-touch is-tablet-top">
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
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

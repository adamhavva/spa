import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { locations } from "@/data/content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Temukan KAMA Spa di South Jakarta. Katalog treatment, jam buka, dan cara reservasi.",
};

/* Decorative blurred circles behind the hero — matches the original markup. */
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

export default function LocationsPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <div className="section_header">
          <div className="padding-global">
            <div className="header_content_inner no-width">
              <div className="body-m text-wrapp_balance">
                Diskon 25% untuk kunjungan pertama.
                <br />
                Booking treatment dengan <strong>KAMA25.</strong>
              </div>
            </div>
            <div className="container-large">
              <div className="header_content_outer is-locations">
                <div className="header_location">
                  <div className="hero_locations_text">
                    <h1 className="header-xxl">Locations</h1>
                    <div className="body-m text-wrapp_balance">
                      Discover our serene spa locations near you. <br />
                      <span className="text-color-gray">
                        Find your perfect getaway and indulge in ultimate relaxation.
                      </span>
                    </div>
                  </div>
                  <div className="hero_locations_map_layout" id="map">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "var(--kama-periwinkle-50)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--kama-blue)",
                      }}
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroCircles />

        <div className="section_locations">
          <div className="padding-global padding-section-global locations">
            <div className="container-large locations-container">
              <div className="w-dyn-list">
                <div className="location-grid w-dyn-items">
                  {locations.map((loc) => (
                    <div key={loc.slug} id={loc.slug} className="w-dyn-item">
                      <Link
                        href="/contact"
                        className="location-card_component in-grid w-inline-block"
                      >
                        <div className="image-container aspect-ratio-square is-relative locations-grid-img">
                          <img
                            className="image-cover"
                            src={loc.image}
                            alt={`${loc.name} | ${loc.area} KAMA Spa`}
                            loading="lazy"
                          />
                          <div className="hover-overlay" />
                          <div className="special-tag is-location-badge">
                            <div className="badge is-location">{loc.tag}</div>
                          </div>
                        </div>
                        <div className="location-card_text-wrap">
                          <div className="caption-l">
                            {loc.name} | {loc.area}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

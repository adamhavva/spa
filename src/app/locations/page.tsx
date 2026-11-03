import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocationPin, WhatsApp } from "@/components/icons";
import { locations } from "@/data/content";
import { locationWhatsApp } from "@/lib/whatsapp";
import { Reveal } from "@/components/reveal";

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
        <Reveal as="div" className="section_header">
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
                    <iframe
                      title={`Peta ${locations[0].name} — ${locations[0].area}`}
                      src={locations[0].mapEmbed}
                      className="h-full w-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 bg-white/95 px-3 py-2 text-[0.6875rem] font-medium tracking-[0.08em] text-cocoa uppercase">
                      <LocationPin className="h-4 w-4 text-cocoa" aria-hidden="true" />
                      {locations[0].name} | {locations[0].area}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <HeroCircles />

        <Reveal as="div" className="section_locations">
          <div className="padding-global padding-section-global locations">
            <div className="container-large locations-container">
                <div className="w-dyn-list">
                  <div className="location-grid w-dyn-items">
                    {locations.map((loc) => (
                      <div key={loc.slug} id={loc.slug} className="w-dyn-item">
                        <article className="location-card_component in-grid w-inline-block flex h-full w-full flex-col">
                          <div className="image-container aspect-ratio-square is-relative locations-grid-img">
                            <iframe
                              title={`Peta ${loc.name} — ${loc.area}`}
                              src={loc.mapEmbed}
                              className="h-full w-full border-0"
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                            />
                            {/* The marker of the branch, on top of the map. */}
                            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 bg-white/95 px-2.5 py-1.5 text-[0.6875rem] font-medium tracking-[0.08em] text-cocoa uppercase">
                              <LocationPin className="h-3.5 w-3.5 text-cocoa" aria-hidden="true" />
                              {loc.name} | {loc.area}
                            </span>
                            <div className="hover-overlay" />
                            <div className="special-tag is-location-badge">
                              <div className="badge is-location">{loc.tag}</div>
                            </div>
                          </div>
                          <div className="location-card_text-wrap flex w-full flex-1 flex-col justify-start">
                            <div className="caption-l">
                              {loc.name} | {loc.area}
                            </div>
                            <p className="mt-1 text-caption text-cocoa/70">{loc.address}</p>
                            <div className="mt-auto flex flex-wrap gap-2 pt-4">
                              <a
                                className="btn btn-primary"
                                href={locationWhatsApp(loc)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <WhatsApp className="h-4 w-4" aria-hidden="true" />
                                WhatsApp
                              </a>
                              <a
                                className="btn btn-outline border-cocoa/40 text-cocoa"
                                href={loc.mapDirections}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Dapatkan Rute
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

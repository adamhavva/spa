import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocationMap } from "@/components/contact/location-map";
import { LocationInfo } from "@/components/contact/location-info";
import { locations } from "@/data/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi KAMA Spa untuk reservasi treatment di South Jakarta. Booking via WhatsApp atau formulir reservasi.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <Reveal as="section" className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <h1 className="header-xxl">Contact</h1>
                <p className="body-m text-color-gray">
                  Reserve your treatment, or just drop us a line — we&apos;ll help you find
                  the right ritual for what you need today.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <h2 className="header-l">Our Locations</h2>
              </div>
              <div id="contact-map">
                <LocationMap locations={locations} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {locations.map((loc) => (
                  <div key={loc.slug} className="contact-info-card">
                    <LocationInfo loc={loc} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section_get-in-touch is-top-off">
          <div className="get-in-touch_container">
            <div className="get-in-touch_banner">
              <h4 className="header-l">Want to experience KAMA first?</h4>
              <Link
                href="/menu"
                className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block"
              >
                <div>View The Menu</div>
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

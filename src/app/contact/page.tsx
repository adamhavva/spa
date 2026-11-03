import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ReservationForm } from "@/components/forms/reservation-form";
import { LocationCards } from "@/components/contact/location-cards";
import { LocationPin, WhatsApp } from "@/components/icons";
import { locations, site } from "@/data/content";
import { RESERVE_MESSAGE, waLink } from "@/lib/whatsapp";
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
              <div className="layout-row gap-xlarge">
                <div className="sizing-grow">
                  <div className="section-header">
                    <h2 className="header-l">Our Locations</h2>
                  </div>
                  <LocationCards locations={locations} />
                </div>

                {/* <div className="sizing-grow">
                  <div className="section-header">
                    <h2 className="header-l">Book a Treatment</h2>
                  </div>
                  <div className="package-card">
                    <div className="package-card_body">
                      <ReservationForm />
                    </div>
                  </div>
                  <div className="spacer-medium" />
                  <div className="contact-meta">
                    <WhatsApp />
                    <span>
                      Prefer WhatsApp?{" "}
                      <a href={waLink(RESERVE_MESSAGE)} className="text-style-link">
                        {site.phone}
                      </a>
                    </span>
                  </div>
                  <div className="spacer-small" />
                  <div className="contact-meta">
                    <LocationPin />
                    <span>{site.address}</span>
                  </div>
                  <div className="spacer-small" />
                  <div className="contact-meta">
                    <Clock />
                    <span>{site.hours}</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section_get-in-touch is-top-off">
          <div className="get-in-touch_container">
            <div className="get-in-touch_banner">
              <h4 className="header-l">Want to experience KAMA first?</h4>
              <Link href="/menu" className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block">
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

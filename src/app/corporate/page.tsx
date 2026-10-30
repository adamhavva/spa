import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Check } from "@/components/icons";
import {
  corporateBenefits,
  corporatePrograms,
  corporateSolutions,
} from "@/data/content";

const corporateInSpa = [
  "Private Group Experiences",
  "Employee Rewards",
  "Appreciation Events",
  "Team Wellness Days",
  "Leadership Retreats",
  "Company Celebrations",
];

const corporateSteps = [
  { title: "Discovery & Consultation", body: "Understand your goals" },
  { title: "Tailored Proposal", body: "Program and benefits designed for your company" },
  { title: "Program Activation", body: "Coordinated and delivered by KAMA" },
  { title: "Review & Optimization", body: "Tracking feedback and improving future programs" },
];

const corporateCollabs = [
  "/img/kama/corporate/06-collab-1.jpg",
  "/img/kama/corporate/07-collab-2.jpg",
  "/img/kama/corporate/08-collab-3.jpg",
];

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description:
    "KAMA Corporate Wellness Solutions — program wellness di kantor, pengalaman wellness tim, dan benefit kesehatan karyawan.",
};

export default function CorporatePage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Corporate Wellness Solutions</div>
                <h1 className="header-xxl">
                  Empowering healthier teams through meaningful wellness experiences.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div className="padding-global">
          <div className="container-large">
            <div className="image-container" style={{ aspectRatio: "16 / 9" }}>
              <img
                src="/img/kama/corporate/01-corporate-sign.jpg"
                alt="KAMA Spa — Corporate Wellness Solutions"
                className="image-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="corporate-split">
                <div>
                  <div className="image-container" style={{ aspectRatio: "4 / 5" }}>
                    <img
                      src="/img/kama/corporate/02-massage.jpg"
                      alt="Corporate wellness session"
                      className="image-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                <div style={{ maxWidth: "34rem" }}>
                  <h3 className="header-l">About Us</h3>
                  <div className="spacer-small" />
                  <p className="body-m text-color-gray">
                    <strong>KAMA Spa</strong> is a wellness sanctuary in the heart of South
                    Jakarta.
                  </p>
                  <div className="spacer-small" />
                  <p className="body-m text-color-gray">
                    Combining traditional healing techniques and modern wellness
                    approaches, KAMA Spa offers thoughtfully curated treatments designed
                    to restore balance, relaxation, and mindful presence.
                  </p>
                  <div className="spacer-medium" />
                  <p className="body-m text-style-italic">
                    More than relaxation — we create meaningful reset experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <h2 className="header-l">
                  Healthy Employees Build Stronger Companies
                </h2>
                <p className="body-m text-color-gray">
                  Employee wellness is no longer just a benefit—it has become an essential
                  investment in building a healthier, happier, and more productive workplace.
                </p>
              </div>
              <div className="layout-row gap-large">
                <ul className="benefit-list sizing-grow">
                  {corporateBenefits.map((b) => (
                    <li key={b} className="benefit-list_item">
                      <span className="benefit-list_icon">
                        <Check />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="sizing-grow">
                  <div className="text-rich-text header-l w-richtext">
                    <p>
                      <em>
                        Wellness is not an expense. It&apos;s an investment in your people.
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Why Partner with KAMA?</div>
                <h2 className="header-l">
                  Thoughtfully designed wellness experiences that go beyond massage.
                </h2>
                <p className="body-m text-color-gray">
                  Our goal isn&apos;t simply to provide massage. We create meaningful wellness
                  experiences for your people.
                </p>
              </div>

              <div className="w-layout-grid whats-new_list">
                {corporateSolutions.map((sol) => (
                  <div key={sol.title} className="package-card w-dyn-item">
                    <div className="package-card_body">
                      <h3 className="header-s">{sol.title}</h3>
                      <ul className="benefit-list">
                        {sol.items.map((item) => (
                          <li key={item} className="benefit-list_item">
                            <span className="benefit-list_icon">
                              <Check />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="in-office" className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">In-Office Program</div>
                <h2 className="header-l">
                  A Restorative Wellness Experience at Your Workplace
                </h2>
                <p className="body-m text-color-gray">Sample Programs*</p>
              </div>

              <div className="w-layout-grid whats-new_list">
                {corporatePrograms.map((prog) => (
                  <div key={prog.name} className="package-card w-dyn-item">
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">{prog.name}</div>
                      <div className="body-m text-color-gray">{prog.description}</div>
                      <ul className="benefit-list">
                        {prog.features.map((f) => (
                          <li key={f} className="benefit-list_item">
                            <span className="benefit-list_icon">
                              <Check />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="in-spa" className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="corporate-split">
                <div>
                  <div className="eyebrow-s text-style-allcaps">In-Spa Corporate Experience</div>
                  <h2 className="header-l">
                    Bring Your Team Together Through Wellness
                  </h2>
                  <p className="body-m text-color-gray">
                    Treat your employees to a private wellness experience at KAMA
                    Spa—designed to reward, reconnect, and recharge your team in a calm
                    and premium environment.
                  </p>
                  <div className="spacer-small" />
                  <h3 className="header-s">Ideal For:</h3>
                  <ul className="benefit-list">
                    {corporateInSpa.map((i) => (
                      <li key={i} className="benefit-list_item">
                        <span className="benefit-list_icon">
                          <Check />
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="image-container" style={{ aspectRatio: "4 / 5" }}>
                    <img
                      src="/img/kama/corporate/05-lounge.jpg"
                      alt="KAMA Spa lounge with team enjoying refreshments"
                      className="image-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">From Consultation to Partnership</div>
                <h2 className="header-l">A Simple 4-Step Collaboration Process</h2>
              </div>
              <div className="w-layout-grid whats-new_list">
                {corporateSteps.map((step, idx) => (
                  <div key={step.title} className="package-card w-dyn-item">
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">Step {idx + 1}</div>
                      <h3 className="header-s">{step.title}</h3>
                      <div className="body-m text-color-gray">{step.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Past Collaborations</div>
                <h2 className="header-l">Wellness in action — on location</h2>
              </div>
              <div className="corporate-split split-3">
                {corporateCollabs.map((src) => (
                  <div key={src}>
                    <div className="image-container" style={{ aspectRatio: "3 / 5" }}>
                      <img
                        src={src}
                        alt="KAMA corporate wellness collaboration"
                        className="image-cover"
                        loading="lazy"
                      />
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
              <h4 className="header-l">Let&apos;s build your wellness program.</h4>
              <a
                href="https://wa.me/6281314856565?text=Hi%20KAMA%20Spa%2C%20I%27d%20like%20to%20discuss%20a%20corporate%20wellness%20program."
                target="_blank"
                rel="noopener"
                className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block"
              >
                <div>Talk to Roy · +62 813-1485-6565</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </a>
              <a
                href="mailto:marketing@kamaspa.id"
                className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block"
              >
                <div>marketing@kamaspa.id</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

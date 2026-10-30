import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Check, ChevronDown } from "@/components/icons";
import { membership } from "@/data/pages";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "KAMA Membership — Rp 1,5jt per bulan. Satu essential service setiap bulan, harga anggota untuk semua treatment, diskon retail, dan benefit khusus.",
};

export default function MembershipPage() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">{membership.eyebrow}</div>
                <h1 className="header-xxl">{membership.title}</h1>
                <div className="spacer-medium" />
                <p className="body-l text-color-gray">{membership.intro}</p>
                <div className="spacer-large" />
                <div className="button-group">
                  <Link href="/contact" className="button is-tertiary sizing-grow w-inline-block">
                    <div>Join KAMA Now</div>
                  </Link>
                  <a href="/menu" className="button is-secondary sizing-grow w-inline-block">
                    <div>Lihat Menu</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main benefits */}
        <section className="section_who-we-are">
          <div className="padding-global padding-section-global is-basic">
            <div className="container-large">
              <div className="section-header">
                <h2 className="header-l">Main Benefits</h2>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">
                  {membership.price} Anda mendapatkan seluruh manfaat berikut, tanpa
                  komitmen jangka panjang.
                </p>
              </div>
              <div className="w-layout-grid grid_benefits">
                {membership.benefits.map((benefit) => (
                  <div key={benefit.title} className="benefits_card w-dyn-item">
                    <div className="benefits_text-wrap">
                      <h3 className="header-s">{benefit.title}</h3>
                      <div className="caption-s text-color-gray">{benefit.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essential services */}
        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="dropdowns_content">
                <div className="dropdowns_group-wrapper">
                  <h4 className="header-l">KAMA Essential Services</h4>
                  <div className="body-m text-color-gray">{membership.servicesIntro}</div>
                </div>
                <div className="dropdowns_group">
                  {membership.services.map((service) => (
                    <details
                      key={service.name}
                      className="dropdown_component border-black w-dropdown"
                    >
                      <summary className="dropdown_trigger w-dropdown-toggle">
                        <div className="sizing-grow">
                          <h5 className="header-s">{service.name}</h5>
                        </div>
                        <div className="dropdown_icon show-more w-embed">
                          <ChevronDown />
                        </div>
                      </summary>
                      <div className="dropdown_content w-dropdown-list">
                        <div className="dropdown_content-inner-2">
                          <div className="body-m text-color-gray">{service.description}</div>
                          <div className="spacer-small" />
                          <Link
                            href="/contact"
                            className="button is-tertiary is-icon is-small w-inline-block"
                          >
                            <div>Book Now</div>
                            <div className="button_icon w-embed">
                              <ArrowRight />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Membership Plans</div>
                <h2 className="header-l">Pilih yang paling sesuai dengan ritme Anda.</h2>
              </div>
              <div className="w-layout-grid whats-new_list">
                {membership.plans.map((plan) => (
                  <div key={plan.name} className="package-card w-dyn-item">
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">{plan.billed}</div>
                      <h3 className="header-s">{plan.name}</h3>
                      <div className="price-row">
                        <span className="price-row_duration">{plan.price}</span>
                        <span className="price-row_value">{plan.billed}</span>
                      </div>
                      <div className="body-m text-color-gray">{plan.note}</div>
                      <ul className="benefit-list">
                        {plan.features.map((feature) => (
                          <li key={feature} className="benefit-list_item">
                            <span className="benefit-list_icon">
                              <Check />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="spacer-small" />
                      <Link
                        href="/contact"
                        className="button is-tertiary is-icon w-inline-block"
                      >
                        <div>Join Now</div>
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

        {/* FAQ */}
        <section className="section_quote">
          <div className="padding-section-global">
            <div className="padding-global">
              <div className="container-large">
                <div className="dropdowns_content">
                  <div className="dropdowns_group-wrapper">
                    <h4 className="header-l">FAQ</h4>
                    <div className="body-m text-color-gray">
                      Masih ada yang belum jelas? Tim kami dengan senang hati membantu.
                    </div>
                  </div>
                  <div className="dropdowns_group">
                    {membership.faq.map((item) => (
                      <details
                        key={item.q}
                        className="dropdown_component border-black w-dropdown"
                      >
                        <summary className="dropdown_trigger w-dropdown-toggle">
                          <div className="sizing-grow">
                            <h5 className="header-s">{item.q}</h5>
                          </div>
                          <div className="dropdown_icon show-more w-embed">
                            <ChevronDown />
                          </div>
                        </summary>
                        <div className="dropdown_content w-dropdown-list">
                          <div className="dropdown_content-inner-2">
                            <div className="body-m text-color-gray">{item.a}</div>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
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

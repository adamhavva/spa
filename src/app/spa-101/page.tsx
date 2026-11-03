import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Check, ChevronDown, Clock } from "@/components/icons";
import { spa101 } from "@/data/pages";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Spa 101",
  description:
    "Spa 101 — apa yang perlu Anda ketahui sebelum datang ke KAMA Spa: ketibaan, kebijakan pembatalan, ruang loker, suasana tenang, dan kebijakan untuk tamu minor.",
};

const stepIcons = {
  clock: Clock,
  check: Check,
  arrow: ArrowRight,
} as const;

export default function Spa101Page() {
  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <Reveal as="section" className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">{spa101.eyebrow}</div>
                <h1 className="header-xxl">{spa101.title}</h1>
                <div className="spacer-medium" />
                <p className="body-l text-color-gray">{spa101.intro}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Before / During / After */}
        <Reveal as="section" className="section_who-we-are">
          <div className="padding-global padding-section-global is-basic">
            <div className="container-large">
              <div className="section-header">
                <h2 className="header-l">Apa yang terjadi selama kunjungan Anda.</h2>
              </div>
              <div className="w-layout-grid grid_benefits is-spa101 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {spa101.steps.map((step) => {
                  const Icon = stepIcons[step.icon];
                  return (
                    <div key={step.key} className="spa101_card w-dyn-item w-full max-w-none">
                      <div className="benefits_card">
                        <div className="icon-height-xmedium w-embed">
                          <Icon />
                        </div>
                        <div className="benefits_text-wrap">
                          <h3 className="header-s">{step.title}</h3>
                          <div className="caption-s text-color-gray">{step.subtitle}</div>
                        </div>
                      </div>
                      {step.items.map((item) => (
                        <div key={item.label} className="add-info">
                          <div className="eyebrow-s text-weight-bold">{item.label}</div>
                          <div className="caption-s text-color-gray">{item.body}</div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Policies */}
        <Reveal as="section" className="section_minor-policy">
          <div className="padding-global padding-minor-policy">
            <div className="container-large">
              <div className="dropdowns_content">
                <div className="dropdowns_group-wrapper">
                  <h4 className="header-l">Kebijakan kami</h4>
                  <div className="body-m text-color-gray">
                    Beberapa hal sederhana yang membuat kunjungan Anda tetap nyaman dan hening untuk semua orang.
                  </div>
                </div>
                <div className="dropdowns_group">
                  {spa101.policies.map((policy) => (
                    <details key={policy.title} className="dropdown_component border-black w-dropdown">
                      <summary className="dropdown_trigger w-dropdown-toggle">
                        <div className="sizing-grow">
                          <h5 className="header-s">{policy.title}</h5>
                          <div className="spa_minor-policy_dropdown_label caption-s text-color-gray">
                            {policy.label}
                          </div>
                        </div>
                        <div className="dropdown_icon show-more w-embed">
                          <ChevronDown />
                        </div>
                      </summary>
                      <div className="dropdown_content w-dropdown-list">
                        <div className="dropdown_content-inner-2">
                          <div className="body-m text-color-gray">{policy.body}</div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Minor policy */}
        <Reveal as="section" className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Minor policy</div>
                <h2 className="header-l">Kebijakan untuk tamu di bawah 18 tahun.</h2>
                <div className="spacer-medium" />
                <p className="body-m text-color-gray">
                  Semua layanan memerlukan formulir persetujuan orang tua yang sudah
                  dilengkapi sebelum layanan dimulai.
                </p>
              </div>
              <div className="w-layout-grid grid_benefits grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {spa101.minorPolicy.map((policy) => (
                  <div key={policy.label} className="benefits_card w-dyn-item">
                    <div className="benefits_text-wrap">
                      <h3 className="header-s">{policy.label}</h3>
                      <div className="caption-s text-color-gray">{policy.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section_get-in-touch is-top-off">
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

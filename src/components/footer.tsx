import Link from "next/link";
import { ArrowRight, Facebook, Instagram, TikTok, WhatsApp } from "./icons";
import { NewsletterForm } from "./forms/newsletter-form";
import { footerLinks, footerTagline, locations } from "@/data/content";

export function Footer() {
  return (
    <footer id="footer" className="section_footer">
      <div className="footer">
        <div className="container-large">
          <div className="newsletter_component">
            <div className="sizing-grow layout-align-center">
              <h3 className="header-l">
                Become a KAMA Member for Rp 1.5jt a month
              </h3>
            </div>
            <div className="button-group margin-left-auto-desktop">
              <Link
                href="/membership"
                className="button is-tertiary is-icon w-inline-block"
              >
                <div>Learn More</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
              <Link
                href="/membership"
                className="button is-secondary is-icon is-dark sizing-grow w-inline-block"
              >
                <div>Join KAMA Now</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>

          <div className="footer-content_outer">
            <div className="footer_social-quote">
              <div className="layout-row gap-large">
                <div className="eyebrow-s text-style-allcaps">CONNECT WITH US</div>
                <div className="icon-socials">
                  <a
                    href="https://www.instagram.com/kama__spa/"
                    className="footer-link-block w-inline-block"
                    aria-label="Instagram"
                  >
                    <div className="footer-icon w-embed">
                      <Instagram />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    className="footer-link-block w-inline-block"
                    aria-label="Facebook"
                  >
                    <div className="footer-icon w-embed">
                      <Facebook />
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    className="footer-link-block w-inline-block"
                    aria-label="TikTok"
                  >
                    <div className="footer-icon w-embed">
                      <TikTok />
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer_header">
                <h3 className="header-m text-style-italic">{footerTagline}</h3>
              </div>
            </div>

            <div className="footer_content">

              <div className="footer-links-grid_wrapp">
                <div className="w-layout-grid footer-links-grid">
                  {Object.entries(footerLinks).map(([group, links]) => (
                    <div key={group} className="footer-links_wrapper">
                      <div className="eyebrow-s text-style-allcaps text-weight-bold">
                        {group}
                      </div>
                      <div className="layout-row gap-xxsmall">
                        {links.map((link) => (
                          <Link key={link.label} href={link.href} className="footer_link w-inline-block">
                            <div className="caption-s">{link.label}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="footer-links_wrapper">
                    <div className="eyebrow-s text-style-allcaps text-weight-bold">
                      Locations
                    </div>
                    <div className="layout-row gap-xxsmall">
                      <Link href="/locations" className="footer_link caption-s">
                        All Locations
                      </Link>
                      {locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/locations#${loc.slug}`}
                          className="footer_link w-inline-block"
                        >
                          <div className="caption-s">
                            {loc.name} | {loc.area}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_footer-bottom">
        <div className="container-large">
          <div className="footer-bottom">
            <div className="layout-column">
              <div className="eyebrow-s text-style-allcaps">
                © 2026 KAMA Spa. All rights reserved.
              </div>
            </div>
            <div className="layout-column gap-medium margin-left-auto">
              <Link href="/privacy-policy" className="caption-s">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="caption-s">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import {
  ArrowRight,
  ChevronDown,
  Close,
  CloseCircle,
  Search,
  WhatsApp,
} from "./icons";
import { locations, nav, site } from "@/data/content";

const menuColumns = [
  {
    id: "services",
    label: "Menu",
    columns: [
      {
        title: "Treatments",
        links: [
          { label: "Massage", href: "/menu#massage" },
          { label: "Body & Scrub", href: "/menu#body" },
          { label: "Face Ritual", href: "/menu#face" },
          { label: "Head & Scalp", href: "/menu#head" },
          { label: "Bath Ritual", href: "/menu#bath" },
          { label: "All Day Spa Packages", href: "/menu#packages" },
        ],
      },
      {
        title: "Corporate",
        links: [
          { label: "Corporate Wellness", href: "/corporate" },
          { label: "In-Office Program", href: "/corporate#in-office" },
          { label: "In-Spa Experience", href: "/corporate#in-spa" },
          { label: "Wellness Benefits", href: "/corporate#benefits" },
        ],
      },
    ],
    highlights: [
      {
        image: "/img/kama/03-oil-bowl.jpg",
        badge: "new",
        eyebrow: "Just Rp 1.5jt a month",
        label: "Join KAMA Now",
        href: "/membership",
      },
      {
        image: "/img/kama/07-flower-bowl.jpg",
        badge: "gift",
        eyebrow: "Best. Gift. Ever.",
        label: "KAMA Gift Card",
        href: "/gift-cards",
      },
    ],
  },
];

export function Navigation() {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="navigation_holder navigation">
        <div className="navigation_main">
          <div className="navigation_component background-color-white">
            <div className="padding-global height-fill">
              <div className="container-large height-fill">
                <div className="w-layout-grid navigation_container">
                  <div className="navigation_actions">
                    <Link
                      href="/"
                      aria-current="page"
                      className="navigation_logo w-inline-block w--current"
                    >
                      <Logo className="code-embed-2" />
                    </Link>
                  </div>

                  <div className="navigation_container_links">
                    <div className="navigation_links">
                      {nav.primary.map((item) =>
                        item.mega ? (
                          <button
                            key={item.label}
                            type="button"
                            className="navigation_link"
                            onMouseEnter={() => setOpenMega(item.mega)}
                            onFocus={() => setOpenMega(item.mega)}
                            onClick={() =>
                              setOpenMega((c) => (c === item.mega ? null : item.mega!))
                            }
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link key={item.label} href={item.href} className="navigation_link">
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                    <button
                      type="button"
                      data-mobile-menu="open"
                      className="mobile-menu_button"
                      onClick={() => setMobileOpen(true)}
                      aria-label="Open menu"
                    >
                      <div className="mobile-menu_button_open navigation_link">Menu</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega menu */}
      {menuColumns.map((menu) => (
        <div
          key={menu.id}
          className="megamenu_component"
          style={{ display: openMega === menu.id ? "flex" : "none" }}
          onMouseLeave={() => setOpenMega(null)}
        >
          <div className="megamenu_container">
            <div className="megamenu_content" style={{ display: "flex" }}>
              <div className="megamenu_links_group">
                {menu.columns.map((col) => (
                  <div key={col.title} className="megamenu_links-column">
                    <div className="megamenu_links_group_header">
                      <div className="caption-m">{col.title}</div>
                    </div>
                    {col.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="megamenu_single-link"
                        onClick={() => setOpenMega(null)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="megamenu_highlights">
              {menu.highlights.map((h) => (
                <Link
                  key={h.label}
                  href={h.href}
                  className="megamenu_highlights_collection_item_content w-inline-block"
                  onClick={() => setOpenMega(null)}
                >
                  <div className="megamenu_highlights_collection_item_image">
                    <img src={h.image} alt="" className="image-cover" />
                    <div className="badge is-product">{h.badge}</div>
                  </div>
                  <div className="megamenu_highlights_collection_item_text">
                    <div className="text-color-gray">{h.eyebrow}</div>
                    <div className="text-style-1line">{h.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Mobile menu */}
      <div
        className="mobile-menu_component"
        style={{ display: mobileOpen ? "flex" : "none" }}
      >
        <div className="mobile-menu_content">
          <div className="mobile-menu_dropdowns">
            {menuColumns.map((menu) =>
              menu.columns.map((col) => (
                <div key={col.title} className="dropdown_component is-mobile-menu w-dropdown">
                  <div className="dropdown_trigger w-dropdown-toggle">
                    <div className="sizing-grow">
                      <div className="eyebrow-l">{col.title}</div>
                    </div>
                    <div className="dropdown_icon show-more w-embed">
                      <ChevronDown />
                    </div>
                  </div>
                  <nav className="dropdown_content w-dropdown-list">
                    <div className="dropdown_content-inner-2">
                      <div className="mobile-menu_links-list caption-s">
                        {col.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="caption-s"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              ))
            )}

            {nav.primary
              .filter((i) => !i.mega)
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="dropdown_trigger eyebrow-l"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <div className="mobile-menu_highlights">
            {menuColumns[0].highlights.map((h) => (
              <Link
                key={h.label}
                href={h.href}
                className="megamenu_highlights_collection_item_content is-mobile"
                onClick={() => setMobileOpen(false)}
              >
                <div className="image-container aspect-ratio-square is-relative">
                  <img src={h.image} alt="" className="image-cover" />
                  <div className="special-tag">
                    <div className="badge">{h.badge}</div>
                  </div>
                </div>
                <div className="layout-row gap-xxsmall">
                  <div className="navi-text text-color-gray">{h.eyebrow}</div>
                  <div className="navi-text">{h.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mobile-menu_actions">
          <div className="mobile-menu_actions_secondary">
            <a href={site.phoneHref} className="button is-mobile-button-action-secondary w-inline-block">
              <div className="navigation_icon w-embed">
                <WhatsApp />
              </div>
              <div>WhatsApp</div>
            </a>
            <Link
              href="/menu"
              className="button is-mobile-button-action-secondary is-last w-inline-block"
              onClick={() => setMobileOpen(false)}
            >
              <div>Menu</div>
              <div className="navigation_icon w-embed">
                <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="mobile-menu_book-now">
            <Link
              href="/contact"
              className="button width-fill"
              onClick={() => setMobileOpen(false)}
            >
              <div>Book Now</div>
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="modal_card_header_close_icon"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{ position: "fixed", top: "1rem", right: "1rem", width: "1.5rem", height: "1.5rem" }}
        >
          <Close />
        </button>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { ArrowRight, ChevronDown, Close, WhatsApp } from "./icons";
import { nav, site } from "@/data/content";

type MenuGroup = {
  id: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  highlights: {
    image: string;
    badge: string;
    eyebrow: string;
    label: string;
    href: string;
  }[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "services",
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
  {
    id: "corporate",
    columns: [
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
        image: "/img/kama/05-foot-bath.jpg",
        badge: "new",
        eyebrow: "Wellness at work",
        label: "In-Office Program",
        href: "/corporate#in-office",
      },
      {
        image: "/img/kama/09-leaf-drop.jpg",
        badge: "gift",
        eyebrow: "Best. Gift. Ever.",
        label: "KAMA Gift Card",
        href: "/gift-cards",
      },
    ],
  },
];

const megaMenuId = "navbar-mega-menu-click";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      /* Let the FlyonUI collapse script close the panel itself. */
      if (e.key === "Escape") toggleRef.current?.click();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* The FlyonUI collapse script owns the open/closed state; we only mirror
     it so the page can be scroll-locked while the menu is open. */
  const syncMenuState = () => {
    setMobileOpen(panelRef.current?.classList.contains("open") ?? false);
  };

  const linkColor = "text-base-content hover:text-base-content/70";
  const linkBase =
    "text-[0.875rem] transition-colors xl:text-[0.9375rem] whitespace-nowrap";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-tan/60 bg-base-100 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="container-kama" aria-label="Global">
          <div className="relative flex flex-wrap items-center justify-between py-3 xl:h-20 xl:flex-nowrap xl:py-0">
            {/* Brand + mobile toggle */}
            <div className="flex w-full items-center justify-between xl:w-auto">
              <Link
                href="/"
                aria-current="page"
                className="link link-neutral text-base-content text-xl font-bold no-underline"
              >
                <Logo className="h-5 w-auto lg:h-[22px]" />
              </Link>

              <div className="xl:hidden">
                <button
                  type="button"
                  ref={toggleRef}
                  /* FlyonUI's collapse script sets aria-expanded on this node. */
                  suppressHydrationWarning
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square h-10 w-10 p-0 text-base-content"
                  data-collapse={`#${megaMenuId}`}
                  aria-controls={megaMenuId}
                  aria-label="Toggle navigation"
                  onClick={syncMenuState}
                >
                  <span
                    className="collapse-open:hidden flex h-4 w-4 flex-col justify-center gap-[3px]"
                    aria-hidden="true"
                  >
                    <span className="h-px w-full bg-current" />
                    <span className="h-px w-full bg-current" />
                    <span className="h-px w-full bg-current" />
                  </span>
                  <span
                    className="collapse-open:block hidden h-4 w-4"
                    aria-hidden="true"
                  >
                    <Close className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>

            {/* Collapsible navigation panel — the `hidden`/`block`/`open`
                classes are toggled by the FlyonUI collapse script. */}
            <div
              id={megaMenuId}
              ref={panelRef}
              className="collapse hidden grow basis-full overflow-hidden transition-all duration-300 xl:block"
            >
              <div className="flex flex-col gap-2 max-xl:mt-3 max-xl:border max-xl:border-base-content/20 max-xl:p-2 xl:flex-row xl:items-center xl:justify-end xl:ps-5 xl:pe-0.5">
                {/* Plain links */}
                <ul className="menu gap-2 px-0 max-xl:w-fit max-xl:py-0 xl:menu-horizontal">
                  {nav.primary
                    .filter((item) => !item.mega)
                    .map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`${linkBase} ${linkColor} px-1.5`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                </ul>

                {/* Mega menu dropdowns */}
                {menuGroups.map((group) => (
                  <div
                    key={group.id}
                    className="dropdown [--adaptive:none] [--auto-close:inside] [--mega-menu:true] [--strategy:static] xl:[--strategy:absolute]"
                  >
                    <button
                      type="button"
                      className={`dropdown-toggle flex items-center gap-1 px-3 py-2 ${linkBase} ${linkColor} dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-xl:px-3`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      {group.id === "services" ? "Menu" : "Corporate Wellness"}
                      <ChevronDown className="h-3 w-3" />
                    </button>

                    <div
                      /* FlyonUI's script sets role/tabindex on this node before
                         React hydrates — ignore that attribute diff. */
                      suppressHydrationWarning
                      className="dropdown-menu dropdown-open:opacity-100 start-0 top-full hidden w-full min-w-60 max-w-[92vw] py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute max-xl:border max-xl:border-base-content/20 max-xl:shadow-none xl:w-[46rem] xl:min-w-0"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <ul className="menu gap-4 p-0 xl:menu-horizontal">
                        {group.columns.map((col) => (
                          <li key={col.title}>
                            <span className="menu-title eyebrow text-base-content/60">
                              {col.title}
                            </span>
                            <ul className="menu">
                              {col.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    className="text-[0.9375rem] transition-colors hover:text-base-content/70"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight cards */}
                      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-base-content/10 px-2 pt-4 max-xl:mt-2">
                        {group.highlights.map((h) => (
                          <Link
                            key={h.label}
                            href={h.href}
                            className="group block min-w-0"
                          >
                            <div className="relative aspect-square overflow-hidden bg-base-200">
                              <img
                                src={h.image}
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <span className="absolute left-2 top-2 bg-base-100 px-1.5 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-base-content">
                                {h.badge}
                              </span>
                            </div>
                            <div className="mt-2 flex flex-col gap-0.5">
                              <span className="text-caption text-base-content/60">
                                {h.eyebrow}
                              </span>
                              <span className="text-[0.8125rem]">{h.label}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* CTA */}
                <Link
                  href="/contact"
                  className="btn btn-primary ml-0 shrink-0 whitespace-nowrap px-4 py-2.5 text-[0.8125rem] xl:ml-2 xl:px-6 xl:py-3 xl:text-[0.9375rem]"
                >
                  {nav.bookNow}
                </Link>

                <a
                  href={site.phoneHref}
                  className="btn btn-outline flex-1 border-[#25d366]/40 text-cocoa xl:hidden"
                >
                  <WhatsApp className="h-4 w-4 text-[#25d366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer: the header is fixed, so page content needs room for it */}
      <div className="h-16 xl:h-20" aria-hidden="true" />
    </>
  );
}

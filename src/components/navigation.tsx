"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

export function Navigation({ overlay = false }: { overlay?: boolean }) {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeGroup = menuGroups.find((g) => g.id === openMega);

  /* Header sits on top of a dark hero → transparent until the user scrolls. */
  const transparent = overlay && !scrolled;
  const linkColor = transparent
    ? "text-white/90 hover:text-white"
    : "text-cocoa hover:text-cocoa/70";
  const burgerColor = transparent
    ? "border-white/40 text-white hover:bg-white hover:text-cocoa"
    : "border-cocoa/20 text-cocoa hover:bg-cocoa hover:text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          transparent
            ? "border-transparent bg-transparent"
            : scrolled
              ? "border-tan/60 bg-cream-soft/95 shadow-sm backdrop-blur"
              : "border-transparent bg-cream-soft"
        }`}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="container-kama">
          <div className="flex h-16 items-center justify-between gap-3 lg:h-20 lg:gap-6">
            {/* Brand */}
            <Link href="/" aria-current="page" className="shrink-0">
              <Logo
                className="h-5 w-auto lg:h-[22px]"
                variant={transparent ? "light" : "dark"}
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Primary"
              className="hidden shrink-0 items-center gap-2.5 lg:flex xl:gap-6"
            >
              {nav.primary.map((item) =>
                item.mega ? (
                  <button
                    key={item.label}
                    type="button"
                    aria-expanded={openMega === item.mega}
                    onMouseEnter={() => setOpenMega(item.mega)}
                    onFocus={() => setOpenMega(item.mega)}
                    onClick={() =>
                      setOpenMega((c) => (c === item.mega ? null : item.mega!))
                    }
                    className={`flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.875rem] transition-colors xl:text-[0.9375rem] ${linkColor} ${
                      openMega === item.mega && !transparent ? "text-cocoa/70" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`shrink-0 whitespace-nowrap text-[0.875rem] transition-colors xl:text-[0.9375rem] ${linkColor}`}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <Link
                href="/contact"
                className={`btn ml-1 shrink-0 whitespace-nowrap px-4 py-2.5 text-[0.8125rem] xl:ml-2 xl:px-6 xl:py-3 xl:text-[0.9375rem] ${
                  transparent ? "btn-light" : "btn-primary"
                }`}
              >
                {nav.bookNow}
              </Link>
            </nav>

            {/* Mobile actions */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className={`flex h-11 w-11 items-center justify-center border transition-colors ${burgerColor}`}
              >
                <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu (desktop) */}
        {activeGroup && (
          <div
            className="absolute inset-x-0 top-full hidden border-b border-tan/60 bg-white shadow-xl lg:block"
            onMouseEnter={() => setOpenMega(activeGroup.id)}
          >
            <div className="container-kama">
              <div className="grid gap-8 py-8 lg:grid-cols-1 lg:gap-10 lg:py-10 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-12 xl:py-12">
                {/* Link columns */}
                <div className="flex flex-wrap gap-x-10 gap-y-8 xl:gap-x-16">
                  {activeGroup.columns.map((col) => (
                    <div
                      key={col.title}
                      className="min-w-[11rem] flex-1 sm:max-w-[18rem]"
                    >
                      <div className="eyebrow mb-4 text-cocoa/60">{col.title}</div>
                      <div className="flex flex-col gap-2.5">
                        {col.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpenMega(null)}
                            className="text-[0.9375rem] transition-colors hover:text-cocoa/70"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlight cards */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:max-w-lg xl:w-[30rem] xl:max-w-none">
                  {activeGroup.highlights.map((h) => (
                    <Link
                      key={h.label}
                      href={h.href}
                      onClick={() => setOpenMega(null)}
                      className="group block min-w-0"
                    >
                      <div className="relative aspect-square overflow-hidden bg-cream">
                        <img
                          src={h.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-cocoa">
                          {h.badge}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-col gap-1">
                        <span className="text-caption text-cocoa/60">{h.eyebrow}</span>
                        <span className="font-display text-title-sm">{h.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer: the header is fixed, so pages without a dark hero need room for it */}
      {!overlay && (
        <div className="h-16 lg:h-20" aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] overflow-y-auto bg-cream-soft transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="container-kama flex min-h-full flex-col">
          {/* Drawer header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-cocoa/10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo className="h-5 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border border-cocoa/20 text-cocoa"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>

          {/* Drawer links */}
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.primary.map((item) => {
              const group = item.mega
                ? menuGroups.find((g) => g.id === item.mega)
                : undefined;
              const isOpen = group ? mobileGroup === group.id : false;

              if (!group) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-14 items-center border-b border-cocoa/10 font-display text-title"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="border-b border-cocoa/10">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(isOpen ? null : group.id)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between text-left font-display text-title"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-5 pb-5">
                        {group.columns.map((col) => (
                          <div key={col.title}>
                            <div className="eyebrow mb-2.5 text-cocoa/60">{col.title}</div>
                            <div className="flex flex-col">
                              {col.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex min-h-10 items-center text-body text-cocoa/80"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Drawer highlights */}
          <div className="mt-8">
            <div className="eyebrow mb-4 text-cocoa/60">Featured</div>
            <div className="grid grid-cols-2 gap-4">
              {menuGroups[0].highlights.map((h) => (
                <Link
                  key={h.label}
                  href={h.href}
                  onClick={() => setMobileOpen(false)}
                  className="group block min-w-0"
                >
                  <div className="relative aspect-square overflow-hidden bg-cream">
                    <img
                      src={h.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-cocoa">
                      {h.badge}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-col gap-0.5">
                    <span className="text-caption text-cocoa/60">{h.eyebrow}</span>
                    <span className="text-[0.8125rem]">{h.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer CTAs — sticky so they are always reachable */}
          <div className="sticky bottom-0 -mx-6 mt-8 flex gap-3 border-t border-cocoa/10 bg-cream-soft/95 px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10">
            <a
              href={site.phoneHref}
              className="btn btn-outline flex-1 border-cocoa/30 text-cocoa"
            >
              <WhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary flex-1"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

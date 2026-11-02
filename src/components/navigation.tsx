"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { ChevronDown, Close, WhatsApp } from "./icons";
import { nav, site } from "@/data/content";

type MenuGroup = {
  id: string;
  label: string;
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
  {
    id: "corporate",
    label: "Corporate Wellness",
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

/* Links that are not part of a dropdown group. */
const plainLinks = nav.primary.filter((item) => !item.mega);

/* Owner of the page scroll lock — only one navigation may hold it. */
let bodyLockToken: object | null = null;

/**
 * The contents of a dropdown group — the link columns plus the highlight
 * cards. Shared by the desktop mega menu and the mobile accordion.
 */
function GroupContent({
  group,
  onNavigate,
}: {
  group: MenuGroup;
  onNavigate?: () => void;
}) {
  return (
    <>
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
                    onClick={onNavigate}
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
            onClick={onNavigate}
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
    </>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  /* Latest route, readable from event handlers and cleanup functions. */
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Freeze the page behind the mobile menu. `position: fixed` is used instead
     of `overflow: hidden` because iOS Safari keeps scrolling with the latter.
     The scroll offset is restored when the menu closes. */
  useEffect(() => {
    if (!mobileOpen) return;

    const body = document.body;
    const scrollY = window.scrollY;
    const lockedPath = pathnameRef.current;
    const token = {};
    bodyLockToken = token;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      paddingRight: body.style.paddingRight,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      /* Another instance (a page kept in the router cache) may have taken
         over the lock in the meantime — only undo our own. */
      if (bodyLockToken !== token) return;

      bodyLockToken = null;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.paddingRight = previous.paddingRight;
      /* Only restore the scroll offset when the menu was closed on the same
         route — after a navigation the new page owns the scroll position. */
      if (pathnameRef.current === lockedPath) {
        window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
      }
    };
  }, [mobileOpen]);

  /* Navigating away closes whatever is open — otherwise the menu would still
     be open (and the page still frozen) on the next route. */
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  /* Escape closes the mobile menu. */
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenGroup(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  /* Escape closes the open dropdown; clicking outside of the header closes it
     as well. Clicks on the toggles themselves are left to their handler. */
  useEffect(() => {
    if (!openGroup) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenGroup(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const inHeader = headerRef.current?.contains(target) ?? false;
      const inPanel = panelRef.current?.contains(target) ?? false;
      if (!inHeader && !inPanel) setOpenGroup(null);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openGroup]);

  /* Growing past the `xl` breakpoint switches to the desktop navigation. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 80rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setOpenGroup(null);
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  const linkColor = "text-base-content hover:text-base-content/70";
  const linkBase =
    "text-[0.875rem] transition-colors xl:text-[0.9375rem] whitespace-nowrap";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b border-tan/60 bg-base-100 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="container-kama" aria-label="Global">
          {/* `relative` anchors the desktop mega menu to the nav row, so it
              lines up with the page gutter instead of the toggle. */}
          <div className="relative flex items-center justify-between py-3 xl:h-20">
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className="link link-neutral text-base-content text-xl font-bold no-underline"
            >
              <Logo className="h-5 w-auto lg:h-[22px]" />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation"
              className="btn btn-outline btn-secondary btn-sm btn-square h-10 w-10 shrink-0 p-0 text-base-content xl:hidden"
            >
              {mobileOpen ? (
                <Close className="h-4 w-4" aria-hidden="true" />
              ) : (
                <span
                  className="flex h-4 w-4 flex-col justify-center gap-[3px]"
                  aria-hidden="true"
                >
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                </span>
              )}
            </button>

            {/* Desktop navigation */}
            <div className="hidden xl:flex xl:items-center xl:justify-end xl:ps-5 xl:pe-0.5">
              {/* Plain links */}
              <ul className="menu gap-2 px-0 py-0 menu-horizontal">
                {plainLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpenGroup(null)}
                      className={`${linkBase} ${linkColor} px-1.5`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mega menu dropdowns */}
              {menuGroups.map((group) => {
                const isOpen = openGroup === group.id;

                return (
                  <div key={group.id}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenGroup(isOpen ? null : group.id)
                      }
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`desktop-group-${group.id}`}
                      className={`flex items-center gap-1 px-3 py-2 ${linkBase} ${linkColor} ${
                        isOpen ? "bg-base-content/10" : ""
                      }`}
                    >
                      {group.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id={`desktop-group-${group.id}`}
                      className={`dropdown-menu absolute start-0 top-full mt-0 w-[46rem] min-w-0 py-2 transition-opacity duration-150 before:absolute ${
                        isOpen ? "block opacity-100" : "hidden opacity-0"
                      }`}
                    >
                      <GroupContent
                        group={group}
                        onNavigate={() => setOpenGroup(null)}
                      />

                    </div>
                  </div>
                );
              })}

              {/* CTA */}
              <Link
                href="/contact"
                className="btn btn-primary ml-2 shrink-0 whitespace-nowrap px-6 py-3 text-[0.9375rem]"
              >
                {nav.bookNow}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu — a panel of its own that scrolls inside the viewport,
          so nothing gets cut off on short screens. */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-base-100 xl:hidden"
        >
          <div className="container-kama flex flex-col gap-1 py-4">
            {/* Plain links */}
            <ul className="menu w-full gap-1 px-0 py-0">
              {plainLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-[0.9375rem] transition-colors hover:text-base-content/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Dropdown groups as accordions */}
            {menuGroups.map((group) => {
              const isOpen = openGroup === group.id;

              return (
                <div
                  key={group.id}
                  className="border-t border-base-content/10 pt-1"
                >
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.id)}
                    aria-expanded={isOpen}
                    aria-controls={`mobile-group-${group.id}`}
                    className="flex w-full items-center justify-between py-2.5 text-[0.9375rem] text-base-content"
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`mobile-group-${group.id}`}
                      className="pb-3"
                    >
                      <GroupContent group={group} onNavigate={closeMobileMenu} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="btn btn-primary mt-3 w-full text-[0.8125rem]"
            >
              {nav.bookNow}
            </Link>

            <a
              href={site.phoneHref}
              className="btn btn-outline mt-1 w-full border-[#25d366]/40 text-cocoa"
            >
              <WhatsApp className="h-4 w-4 text-[#25d366]" />
              WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Spacer: the header is fixed, so page content needs room for it */}
      <div className="h-16 xl:h-20" aria-hidden="true" />
    </>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Location } from "@/data/content";
import { Close, Clock, LocationPin, WhatsApp } from "@/components/icons";

/**
 * The location list on /contact.
 *
 * Both the photo and the address open a map popup with the Google Maps
 * embed of that branch; the popup also links to Google Maps directions so
 * the guest can route to the spa in one tap.
 */
export function LocationCards({ locations }: { locations: Location[] }) {
  const [active, setActive] = useState<Location | null>(null);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const show = useCallback((loc: Location, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setActive(loc);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    lastTrigger.current?.focus();
  }, []);

  /* Escape closes the popup. */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  /* Lock the page behind the popup. */
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous;
    };
  }, [open]);

  /* Move focus into the popup when it opens. */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div key={loc.slug} className="contact-card">
            <button
              type="button"
              className="contact-card_image image-container block w-full cursor-pointer p-0"
              onClick={(event) => show(loc, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`Lihat peta ${loc.name} — ${loc.area}`}
            >
              <img
                src={loc.image}
                alt={`${loc.name} KAMA Spa`}
                loading="lazy"
                className="image-cover block"
              />
            </button>
            <div className="contact-card_body">
              <h3 className="header-s">
                {loc.name} | {loc.area}
              </h3>
              <button
                type="button"
                className="contact-meta cursor-pointer text-left transition hover:text-cocoa/70"
                onClick={(event) => show(loc, event.currentTarget)}
                aria-haspopup="dialog"
              >
                <LocationPin />
                <span className="underline decoration-dotted underline-offset-2">
                  {loc.address}
                </span>
              </button>
              <div className="contact-meta">
                <Clock />
                <span>{loc.hours}</span>
              </div>
              <div className="contact-meta">
                <WhatsApp />
                <span>{loc.phone}</span>
              </div>
              <a
                className="btn btn-outline mt-2 self-start border-cocoa/40 text-cocoa"
                href={loc.mapDirections}
                target="_blank"
                rel="noreferrer noopener"
              >
                Dapatkan Rute
              </a>
            </div>
          </div>
        ))}
      </div>

      {open && active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Peta lokasi ${active.name} — ${active.area}`}
        >
          <button
            type="button"
            aria-label="Tutup peta"
            className="absolute inset-0 cursor-default bg-cocoa/50 backdrop-blur-sm"
            onClick={close}
          />
          <div className="relative z-[1] flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm bg-base-100 shadow-[0_24px_48px_-28px_rgba(42,22,4,0.55)]">
            <div className="flex items-start justify-between gap-4 border-b border-tan/70 px-5 py-4">
              <div>
                <h3 className="header-s">
                  {active.name} | {active.area}
                </h3>
                <p className="mt-1 text-caption-s text-cocoa/70">{active.address}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Tutup peta"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cocoa/30 text-cocoa transition hover:bg-cocoa/5"
              >
                <Close className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-periwinkle-50">
              <iframe
                title={`Peta ${active.name} — ${active.area}`}
                src={active.mapEmbed}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-tan/70 px-5 py-4">
              <p className="text-caption-s text-cocoa/70">{active.hours}</p>
              <a
                className="btn btn-primary"
                href={active.mapDirections}
                target="_blank"
                rel="noreferrer noopener"
              >
                Dapatkan Rute
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

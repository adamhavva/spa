import { ArrowRight, Instagram } from "@/components/icons";
import { site } from "@/data/content";

const galleryImages = [
  "/img/IMG_5651-min.jpg",
  "/img/IMG_5652-min.jpg",
  "/img/IMG_5654-min.jpg",
  "/img/IMG_5653-min.jpg",
  "/img/IMG_5655-min.jpg",
  "/img/IMG_5656-min.jpg",
  "/img/IMG_5657-min.jpg",
  "/img/IMG_5658-min.jpg",
  "/img/IMG_5660-min.jpg",
  "/img/IMG_5659-min.jpg",
  "/img/IMG_5662-min.jpg",
  "/img/IMG_5661-min.jpg",
];

export function SocialsSection() {
  return (
    <section className="bg-cream-soft">
      <div className="container-kama py-14 md:py-16 lg:py-20">
        {/* Section header */}
        <div className="flex flex-col items-start gap-4 border-b border-cocoa/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={site.instagram}
              className="text-body text-cocoa/70 transition-colors hover:text-cocoa"
            >
              @kama__spa
            </a>
            <a
              href="https://www.instagram.com/explore/search/keyword/?q=%23kamaspa"
              className="font-display text-title-sm"
            >
              #kamaspa
            </a>
          </div>

          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[0.9375rem] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Follow Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Gallery grid */}
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {galleryImages.map((src, i) => (
            <li key={src} className="group relative aspect-square overflow-hidden bg-cream">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram post ${i + 1}`}
                className="absolute inset-0 z-10"
              />
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cocoa/0 opacity-0 transition-opacity duration-300 group-hover:bg-cocoa/40 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-white" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { journalPosts, locations, testimonials } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function LocationsSection() {
  return (
    <Reveal as="section" className="bg-cream-soft">
      <div className="container-kama py-14 md:py-16 lg:py-20">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:text-left">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-title md:text-[2.375rem] md:leading-[1.2]">
              Locations
            </h2>
            <p className="max-w-[46ch] text-body text-cocoa/70">
              KAMA locations are conveniently located throughout South Jakarta, with more on
              the way.
            </p>
          </div>

          <Link
            href="/locations"
            className="btn btn-outline shrink-0 border-cocoa/40"
          >
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Location grid */}
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {locations.map((loc) => (
            <li key={loc.slug} className="h-full">
              <Link href={`/locations#${loc.slug}`} className="group flex h-full flex-col">
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <img
                    src={loc.image}
                    alt={`${loc.name} KAMA Spa`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-cocoa">
                    {loc.tag}
                  </span>
                </div>
                <p className="mt-4 text-title-sm">
                  {loc.name} | {loc.area}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function WhatsNewSection() {
  return (
    <Reveal
      as="section"
      id="home_whats_new"
      className="scroll-mt-[calc(var(--kama-header-h)+1rem)] bg-cream-soft"
    >
      <div className="container-kama py-14 md:py-16 lg:py-20">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-title md:text-[2.375rem] md:leading-[1.2]">
              What’s New
            </h2>
            <p className="max-w-[52ch] text-body text-cocoa/70">
              We believe authentic beauty reaches far beyond the superficial, through
              consistent self-care you let the beauty shine both externally and internally.
            </p>
          </div>

          <Link
            href="#footer"
            className="btn btn-outline shrink-0 border-cocoa/40"
          >
            Subscribe to Newsletter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Journal grid */}
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {journalPosts.map((post) => (
            <li key={post.slug} className="flex h-full flex-col">
              <Link href="/journal" className="group flex h-full flex-col">
                <div className="aspect-[16/11] overflow-hidden bg-cream">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex flex-1 flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="eyebrow text-cocoa/60">{post.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span className="eyebrow text-cocoa/60">KAMA Journal</span>
                  </div>
                  <h3 className="font-display text-title-sm md:text-[1.375rem] md:leading-[1.3]">
                    {post.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.9375rem] underline underline-offset-4 transition-opacity hover:opacity-70">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function TestimonialsSection() {
  return (
    <Reveal as="section" className="bg-cream">
      <div className="container-kama py-14 md:py-16 lg:py-20">
        <h2 className="font-display text-title md:text-[2.375rem] md:leading-[1.2]">
          Reviews
        </h2>

        <ReviewsCarousel reviews={testimonials} />
      </div>
    </Reveal>
  );
}

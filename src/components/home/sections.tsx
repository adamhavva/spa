import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { journalPosts, testimonials } from "@/data/content";
import { Reveal } from "@/components/reveal";

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
              <Link href={post.href} className="group flex h-full flex-col">
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

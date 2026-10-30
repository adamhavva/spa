import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Check } from "@/components/icons";
import { packages, priceDisclaimer, treatments } from "@/data/content";

const allEntries = [...treatments, ...packages];

export function generateStaticParams() {
  return allEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = allEntries.find((e) => e.slug === slug);

  if (!entry) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: entry.name,
    description:
      entry.kind === "package"
        ? `${entry.subtitle}. ${entry.description}`
        : `${entry.tagline}. ${entry.description}`,
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = allEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout-row gap-large">
                <div className="sizing-grow">
                  <div className="eyebrow-s text-style-allcaps">
                    {entry.kind === "package" ? "All Day Spa" : entry.category}
                  </div>
                  <h1 className="header-xxl">{entry.name}</h1>
                  <div className="body-m text-color-gray">
                    {entry.kind === "package" ? entry.subtitle : entry.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout-row gap-xlarge">
                <div className="sizing-grow">
                  <div className="page-hero_image image-container">
                    <img
                      src={entry.image}
                      alt={entry.name}
                      className="image-cover"
                      loading="eager"
                    />
                  </div>

                  <div className="spacer-large" />

                  <p className="body-l">{entry.description}</p>

                  {entry.kind === "package" ? (
                    <>
                      <div className="spacer-large" />
                      <div className="text-rich-text header-l w-richtext">
                        <p>
                          <em>“{entry.quote}”</em>
                        </p>
                      </div>
                    </>
                  ) : entry.note ? (
                    <>
                      <div className="spacer-small" />
                      <div className="eyebrow-s text-style-allcaps">{entry.note}</div>
                    </>
                  ) : null}
                </div>

                <div className="sizing-grow">
                  <div className="package-card">
                    <div className="package-card_body">
                      <div className="eyebrow-s text-style-allcaps">Pricing</div>

                      {entry.kind === "package" ? (
                        <>
                          <div className="price-row">
                            <span className="price-row_duration">{entry.duration}</span>
                            <span className="price-row_value">{entry.price}</span>
                          </div>
                          <div className="spacer-small" />
                          <div className="eyebrow-s text-style-allcaps">Include</div>
                          <div className="package-includes">
                            {entry.includes.map((inc) => (
                              <span key={inc.label} className="package-includes_item">
                                <Check />
                                {inc.label} {inc.minutes}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : (
                        entry.prices.map((p) => (
                          <div key={p.duration} className="price-row">
                            <span className="price-row_duration">{p.duration}</span>
                            <span className="price-row_value">{p.price}</span>
                          </div>
                        ))
                      )}

                      <div className="spacer-small" />
                      <div className="eyebrow-s text-color-gray">{priceDisclaimer}</div>

                      <div className="spacer-medium" />
                      <Link href="/contact" className="button width-fill w-inline-block">
                        <div>Book This Treatment</div>
                      </Link>
                      <div className="spacer-xsmall" />
                      <Link
                        href="/locations"
                        className="button is-secondary is-text width-fill w-inline-block"
                      >
                        <div>View Locations</div>
                        <div className="button_icon w-embed">
                          <ArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

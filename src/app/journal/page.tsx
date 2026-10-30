import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "@/components/icons";
import { journalPosts } from "@/data/pages";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "KAMA Journal — cerita, panduan, dan kebiasaan kecil tentang massage, ritual, dan gaya hidup wellness dari tim KAMA Spa.",
};

export default function JournalPage() {
  const [featured, ...rest] = journalPosts;

  return (
    <>
      <Navigation />
      <main className="main-wrapper">
        <section className="page-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">Journal</div>
                <h1 className="header-xxl">Catatan dari ruang relaksasi.</h1>
                <div className="spacer-medium" />
                <p className="body-l text-color-gray">
                  Cerita, panduan, dan kebiasaan kecil tentang massage, ritual, dan cara membangun rutinitas yang benar-benar Anda nikmati.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured article */}
        <section className="padding-section-global">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout-row gap-xlarge">
                <div className="sizing-grow">
                  <div className="article_image image-container">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="image-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="sizing-grow layout-center">
                  <div className="tag_group eyebrow-s">
                    <div className="eyebrow-s">{featured.category}</div>
                    <div>·</div>
                    <div className="eyebrow-s">KAMA Journal</div>
                  </div>
                  <div className="spacer-small" />
                  <h2 className="header-l">{featured.title}</h2>
                  <div className="spacer-small" />
                  <p className="body-m text-color-gray">{featured.excerpt}</p>
                  <div className="spacer-small" />
                  <div className="published_date">
                    <div className="caption-s text-color-gray">{featured.date}</div>
                    <div className="caption-s text-color-gray">·</div>
                    <div className="caption-s text-color-gray">{featured.readTime} baca</div>
                  </div>
                  <div className="spacer-large" />
                  <Link href="/menu" className="button is-secondary is-icon w-inline-block">
                    <div>Explore Treatments</div>
                    <div className="button_icon w-embed">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="padding-section-global home-locations">
          <div className="padding-global">
            <div className="container-large">
              <div className="section-header">
                <div className="eyebrow-s text-style-allcaps">All Articles</div>
                <h2 className="header-l">Bacaan terbaru.</h2>
              </div>
              <div className="w-layout-grid articles_grid">
                {rest.map((post) => (
                  <article key={post.slug} id={post.slug} className="blog_item w-dyn-item">
                    <div className="article_image image-container">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="image-cover"
                      />
                    </div>
                    <div className="product_metadata_content is-article">
                      <div className="tag_group eyebrow-s">
                        <div className="eyebrow-s">{post.category}</div>
                        <div>·</div>
                        <div className="eyebrow-s">KAMA Journal</div>
                      </div>
                      <h3 className="header-s text-style-3lines">{post.title}</h3>
                      <div className="published_date">
                        <div className="caption-s text-color-gray">{post.date}</div>
                        <div className="caption-s text-color-gray">·</div>
                        <div className="caption-s text-color-gray">{post.readTime} baca</div>
                      </div>
                      <div className="spacer-small" />
                      {post.body.map((paragraph) => (
                        <p key={paragraph} className="body-m text-color-gray">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section_get-in-touch is-top-off">
          <div className="get-in-touch_container">
            <div className="get-in-touch_banner">
              <h4 className="header-l">Have any questions? Drop us a line.</h4>
              <Link
                href="/contact"
                className="button is-tertiary is-icon margin-left-auto-desktop w-inline-block"
              >
                <div>Get In Touch</div>
                <div className="button_icon w-embed">
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

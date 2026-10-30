import Link from "next/link";
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
];

export function SocialsSection() {
  return (
    <section className="section_socials">
      <div className="padding-global padding-section-socials">
        <div className="container-large">
          <div className="section-header no-padding">
            <div className="layout-row gap-xxsmall">
              <div className="caption-m text-color-gray">
                <a href={site.instagram}>@kama__spa</a>
              </div>
              <div className="caption-xl">
                <a href="https://www.instagram.com/explore/search/keyword/?q=%23kamaspa">
                  #kamaspa
                </a>
              </div>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="section-header_button w-inline-block"
            >
              <div>Follow Us</div>
              <div className="button_icon w-embed">
                <ArrowRight />
              </div>
            </a>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="social-gallery_layout w-dyn-items">
              {galleryImages.map((src, i) => (
                <div key={src} role="listitem" className="social-gallery_item w-dyn-item">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-gallery_link w-inline-block"
                    aria-label={`Instagram post ${i + 1}`}
                  />
                  <div className="hover-overlay">
                    <div className="social-icon w-embed">
                      <Instagram />
                    </div>
                  </div>
                  <img src={src} alt="" loading="lazy" className="image-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { WhatsApp } from "@/components/icons";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: {
    default: "KAMA Spa • Wellness Sanctuary di South Jakarta",
    template: "%s • KAMA Spa",
  },
  description:
    "KAMA Spa adalah wellness sanctuary di jantung South Jakarta. Memadukan teknik penyembuhan tradisional dengan pendekatan wellness modern untuk treatments, massage, dan corporate wellness.",
  keywords: [
    "KAMA Spa",
    "massage Jakarta",
    "spa South Jakarta",
    "day spa",
    "corporate wellness",
    "Sukma Laya",
    "Urip Padma",
  ],
  openGraph: {
    title: "KAMA Spa • Wellness Sanctuary di South Jakarta",
    description:
      "Combining traditional healing techniques and modern wellness approaches, KAMA Spa offers thoughtfully curated treatments designed to restore balance, relaxation, and mindful presence.",
    type: "website",
    locale: "id_ID",
    siteName: "KAMA Spa",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const whatsappHref = `https://wa.me/${site.phone.replace("+62 ", "62").replaceAll(" ", "")}`;

  return (
    <html
      lang="id"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-cream-soft font-sans text-cocoa">
        {children}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          className="fixed bottom-4 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-cocoa text-white shadow-lg shadow-black/20 transition hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
          aria-label="Chat via WhatsApp"
        >
          <WhatsApp />
        </a>
      </body>
    </html>
  );
}

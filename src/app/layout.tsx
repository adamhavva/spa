import type { Metadata } from "next";
import "./hiatus.css";
import "./custom.css";
import "./kama.css";
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
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          className="whatsapp-float"
          aria-label="Chat via WhatsApp"
        >
          <WhatsApp />
        </a>
      </body>
    </html>
  );
}

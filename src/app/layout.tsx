import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

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
  return (
    <html
      lang="id"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
      /* The inline script below sets `data-js` on <html> before React
         hydrates, so the attribute only exists on the client. React must not
         try to reconcile it. */
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-cream-soft font-sans text-cocoa">
        
        {/* Marks the document as script-enabled, so the scroll-reveal
            animations may hide their blocks. Without JS the content stays
            visible — the site must never depend on JavaScript to be read. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.js='true'",
          }}
        />
        {children}
        
        <WhatsAppButton />
      </body>
    </html>
  );
}

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BookingBanner, Hero, HeroStats, MembershipBanner } from "@/components/home/hero";
import {
  LocationsSection,
  TestimonialsSection,
  WhatsNewSection,
} from "@/components/home/sections";
import { SocialsSection } from "@/components/home/socials";

export default function Home() {
  return (
    <>
      <Navigation overlay />
      <main className="flex-1">
        <Hero />
        <MembershipBanner />
        <LocationsSection />
        <WhatsNewSection />
        <TestimonialsSection />
        <HeroStats />
        <SocialsSection />
        <BookingBanner />
      </main>
      <Footer />
    </>
  );
}

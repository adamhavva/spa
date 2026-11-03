import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BookingBanner, Hero, HeroStats, MembershipBanner } from "@/components/home/hero";
import { TestimonialsSection, WhatsNewSection } from "@/components/home/sections";
import { SocialsSection } from "@/components/home/socials";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <MembershipBanner />
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

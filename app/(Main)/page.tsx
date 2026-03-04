// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import { GallerySection } from "@/components/GallerySection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import { FetchProjectData } from "@/lib/FetchProjectData";

export default async function HomePage() {
  const { data } = await FetchProjectData();
  return (
    <main
      className="overflow-x-hidden"
      style={{ backgroundColor: "var(--main-background)" }}>
      <HeroSection
        keywords={data.keywords}
        {...data.hero}
        image={data.about.image ?? ""}
      />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        whyUsDescription={data.whyUs.description ?? ""}
      />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <StatsSection />
      <ServicesSection {...data.services} />
      <GallerySection gallery={data.gallery} />
      <HowItWorksSection />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <TestimonialsSection />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </main>
  );
}

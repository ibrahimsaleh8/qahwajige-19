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
import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import { FetchProjectData } from "@/lib/FetchProjectData";
import CustomSection from "@/components/CustomSection";
import HomeArticlesSection, {
  HomeArticle,
} from "@/components/HomeArticlesSection";

export default async function HomePage() {
  const { data } = await FetchProjectData();
  let homeArticles: HomeArticle[] = [];
  try {
    const articlesRes = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/articles/category/${encodeURIComponent("الصفحة-الرئيسية")}`,
    );
    if (articlesRes.ok) {
      const articlesData = await articlesRes.json();
      homeArticles = articlesData.data?.articles || [];
    }
  } catch (error) {
    console.error("Failed to fetch home articles:", error);
  }

  return (
    <main
      className="overflow-x-hidden"
      style={{ backgroundColor: "var(--main-background)" }}>
      <HeroSection
        keywords={data.keywords}
        {...data.hero}
        image={data.about.image ?? ""}
      />
      <GallerySection gallery={data.gallery} />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        whyUsDescription={data.whyUs.description ?? ""}
      />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />

      {data.customSections &&
        data.customSections.length > 0 &&
        data.customSections.map((customSection, index) => (
          <CustomSection
            key={customSection.id}
            {...customSection}
            index={index}
          />
        ))}
      <StatsSection />
      <ServicesSection {...data.services} />
      <HowItWorksSection />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <TestimonialsSection />
      {data.showContactSection && (
        <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
      )}

      <HomeArticlesSection articles={homeArticles} />
    </main>
  );
}

import Carousel from "@/components/Carousel";
import ExperienceSection from "@/components/ExperienceSection";
import HomeContent from "@/components/HomeContent";
import StoreLocator from "@/components/StoreLocator";

export default function Home() {
  return (
    <main>
      <Carousel />
      <HomeContent />
      <ExperienceSection />
      <StoreLocator />
    </main>
  )
}
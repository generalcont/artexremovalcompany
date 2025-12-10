import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AboutSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, Award } from "lucide-react";
import heroImage from "@/assets/artex-hero.jpg";

const features = ["Professional", "Certified", "Insured"];

export function HeroSection() {
  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional artex ceiling removal service"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-1/4 z-10 opacity-20">
        <div className="w-32 h-32 border-4 border-primary rounded-full animate-pulse-glow" />
      </div>
      <div className="absolute bottom-32 right-1/3 z-10 opacity-10">
        <div className="w-64 h-64 border-2 border-primary-foreground rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom flex items-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-2xl">
          {/* Hero Card */}
          <div className="animate-fade-up">
            {/* Trust badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">Certified Specialists</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Professional{" "}
              <span className="text-primary">Artex Removal</span>{" "}
              & Ceiling Services
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Transform your dated textured ceilings into smooth, modern finishes. 
              UK's trusted specialists for safe artex removal with asbestos testing included.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                Get Free Quote
              </Button>
              <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground" onClick={scrollToServices}>
                Our Services
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-primary-foreground/90 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Badge */}
          <div
            className="mt-8 inline-flex items-center gap-4 bg-card rounded-2xl p-4 shadow-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <span className="text-2xl font-bold text-foreground">4.9</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Google</p>
              <p className="text-sm font-semibold text-foreground">500+ Reviews</p>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

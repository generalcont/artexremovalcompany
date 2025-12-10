import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-cleaner.jpg";

const features = ["Professional", "Friendly", "Convenient"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional cleaning service"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
      </div>

      {/* Decorative leaves */}
      <div className="absolute top-32 right-1/3 z-10 animate-leaf-sway">
        <svg width="60" height="80" viewBox="0 0 60 80" className="text-primary opacity-60">
          <path
            fill="currentColor"
            d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
          />
        </svg>
      </div>
      <div className="absolute top-48 right-1/4 z-10 animate-leaf-sway" style={{ animationDelay: "0.5s" }}>
        <svg width="40" height="55" viewBox="0 0 60 80" className="text-eco-light opacity-50">
          <path
            fill="currentColor"
            d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom flex items-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-2xl">
          {/* Hero Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
              Sparkly Residential and Commercial{" "}
              <span className="text-primary">Cleaning Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stop wasting your precious free time cleaning, relax while we make
              your home sparkle!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg">
                Free Quote
              </Button>
              <Button variant="heroOutline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground font-medium">
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
              <Star className="w-6 h-6 text-sunny fill-sunny" />
              <span className="text-2xl font-bold text-foreground">4.8</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Google</p>
              <p className="text-sm font-semibold text-foreground">480 Reviews</p>
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

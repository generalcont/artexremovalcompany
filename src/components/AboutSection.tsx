import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "We always keep you up to date on your cleaning",
  "The cleaners treat your home like their own home",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional cleaning team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            {/* Decorative leaf */}
            <div className="absolute -top-8 -left-8 animate-float">
              <svg width="60" height="80" viewBox="0 0 60 80" className="text-primary/20">
                <path
                  fill="currentColor"
                  d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Content side */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title mt-4 mb-6">
              We Are the Best Option for a Sparkling Home
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Clany Eco, our mission is to provide the most convenient platform
              for connecting you with exceptional, professional cleaners who
              deliver outstanding results.
            </p>

            {/* Feature list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

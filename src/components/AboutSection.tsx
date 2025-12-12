import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import beforeAfterImage from "@/assets/artex-before-after.jpg";

const features = [
  "Fully trained and certified specialists",
  "Complete asbestos testing included",
  "Minimal disruption to your home",
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Clock, value: "24h", label: "Quote Response" },
];

export function AboutSection() {
  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={beforeAfterImage}
                alt="Before and after artex removal transformation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats badges */}
            <div className="absolute -bottom-6 left-6 right-6 bg-card rounded-2xl p-4 shadow-xl grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="section-label">About Us</span>
            <h2 className="section-title mt-4 mb-6">
              UK's Trusted Artex Removal Specialists
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Artex Removal Company has been transforming homes across the UK for over 
              a decade. We specialise in the safe removal of textured artex coatings, 
              providing smooth, modern ceiling finishes that add value to your property.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals understand the importance of safety, 
              especially when dealing with pre-1999 artex that may contain asbestos. 
              Every project includes comprehensive testing and uses approved removal methods.
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

            <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

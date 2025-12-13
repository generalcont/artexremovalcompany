import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import beforeAfterImage from "@/assets/artex-before-after.jpg";

const features = [
  "UKATA asbestos awareness certified team",
  "Complete dust containment on every job",
  "We test all pre-1999 artex before removal",
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Completed Projects" },
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
                alt="Before and after comparison showing textured artex ceiling transformed to smooth plaster finish"
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
              Why Artex Needs Professional Removal
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Artex and textured coatings applied before 1999 often contain chrysotile asbestos. 
              Disturbing these materials without proper testing and containment can release 
              harmful fibres into your home. Our team holds UKATA certification and follows 
              HSE guidelines on every project.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We start by taking samples for laboratory analysis. If asbestos is found, we use 
              licensed removal methods. If the coating is asbestos-free, we proceed with 
              mechanical removal and full dust extraction. The result is a smooth, paint-ready 
              ceiling that adds value to your property.
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
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

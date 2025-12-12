import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import artexService1 from "@/assets/artex-service-1.jpg";
import artexService2 from "@/assets/artex-service-2.jpg";
import artexService3 from "@/assets/artex-service-3.jpg";
import beforeAfterImage from "@/assets/artex-before-after.jpg";

const services = [
  {
    title: "Artex Ceiling Removal",
    description: "Complete removal of textured artex coatings from ceilings using safe, approved methods. We handle all types of artex patterns.",
    image: artexService1,
    href: "/services/artex-ceiling-removal",
    features: ["All pattern types", "Safe removal", "Clean prep"],
  },
  {
    title: "Smooth Plastering",
    description: "Professional skim coating and plastering to achieve a perfect smooth ceiling finish after artex removal.",
    image: artexService2,
    href: "/services/smooth-plastering",
    features: ["Expert finish", "Ready to paint", "Long lasting"],
  },
  {
    title: "Asbestos Testing",
    description: "Comprehensive asbestos testing for all pre-1999 artex coatings. Certified testing with fast results.",
    image: artexService3,
    href: "/services/asbestos-testing",
    features: ["Certified labs", "Fast results", "HSE compliant"],
  },
  {
    title: "Wall Artex Removal",
    description: "Expert removal of textured coatings from walls. Same professional service for your walls as our ceiling work.",
    image: artexService1,
    href: "/services/wall-artex-removal",
    features: ["Wall textures", "Smooth finish", "Full rooms"],
  },
  {
    title: "Ceiling Repair",
    description: "Professional repair of damaged ceilings, cracks, and imperfections. Restore your ceiling to perfect condition.",
    image: artexService2,
    href: "/services/ceiling-repair",
    features: ["Crack repairs", "Damage fixing", "Restoration"],
  },
  {
    title: "Textured Coating Removal",
    description: "Removal of all types of textured coatings including woodchip, popcorn, and stipple finishes.",
    image: artexService3,
    href: "/services/textured-coating-removal",
    features: ["Woodchip", "Popcorn", "Stipple"],
  },
];

const Services = () => {
  const scrollToQuoteForm = () => {
    window.location.href = "/#quote";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 gradient-navy">
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary flex items-center justify-center gap-2">
              Our Services
              <Shield className="w-4 h-4" />
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-4 mb-6">
              Professional Artex Removal Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Complete artex removal and ceiling renovation services across the UK. 
              From testing to finishing, we handle everything.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-border hover:border-primary">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-xl font-heading font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="section-label">Results</span>
              <h2 className="section-title mt-4 mb-6">See the Transformation</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our expert team transforms dated, textured artex ceilings into beautiful, 
                smooth modern finishes. See the difference our professional service makes.
              </p>
              <ul className="space-y-3 mb-8">
                {["Complete dust containment", "Asbestos safe procedures", "Ready for decoration"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                Get Your Free Quote
              </Button>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={beforeAfterImage}
                alt="Before and after artex removal"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Ceilings?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get your free, no-obligation quote today and discover how we can modernise your home.
          </p>
          <Button variant="accent" size="lg" onClick={scrollToQuoteForm}>
            Get Free Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

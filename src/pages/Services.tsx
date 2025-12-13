import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import artexService1 from "@/assets/artex-service-1.jpg";
import artexService2 from "@/assets/artex-service-2.jpg";
import artexService3 from "@/assets/artex-service-3.jpg";
import beforeAfterImage from "@/assets/artex-before-after.jpg";

const services = [
  {
    title: "Artex Ceiling Removal",
    description: "Removal of swirl, stipple, fan, and random-pattern artex from ceilings. We use scrapers and HEPA-filtered dust extraction to minimise airborne particles.",
    image: artexService1,
    href: "/services/artex-ceiling-removal",
    features: ["All pattern types", "Dust extraction", "Same-day removal"],
  },
  {
    title: "Smooth Plastering",
    description: "Two-coat skim finish applied over prepared ceilings. We use Thistle Multi-Finish plaster, applied at 2-3mm thickness. Ready for painting in 24-48 hours.",
    image: artexService2,
    href: "/services/smooth-plastering",
    features: ["Multi-Finish plaster", "2-3mm skim", "Paint-ready"],
  },
  {
    title: "Asbestos Testing",
    description: "Samples sent to UKAS-accredited laboratories for analysis under polarised light microscopy. Results within 3-5 working days. Required for all pre-1999 artex.",
    image: artexService3,
    href: "/services/asbestos-testing",
    features: ["UKAS labs", "3-5 day results", "HSE compliant"],
  },
  {
    title: "Wall Artex Removal",
    description: "Same removal process applied to textured wall coatings. Common in hallways and staircases of 1970s-1990s properties.",
    image: artexService1,
    href: "/services/wall-artex-removal",
    features: ["Wall textures", "Hallways", "Full rooms"],
  },
  {
    title: "Ceiling Repair",
    description: "Repair of damaged plasterboard, cracks, and water-damaged areas. Includes filling, taping joints, and skimming to match surrounding surfaces.",
    image: artexService2,
    href: "/services/ceiling-repair",
    features: ["Crack filling", "Board replacement", "Skim finish"],
  },
  {
    title: "Textured Coating Removal",
    description: "Removal of woodchip, popcorn, and other textured finishes. These coatings are typically asbestos-free but we test to confirm.",
    image: artexService3,
    href: "/services/textured-coating-removal",
    features: ["Woodchip", "Popcorn ceiling", "Stipple"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 gradient-navy">
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary flex items-center justify-center gap-2">
              Services
              <Shield className="w-4 h-4" />
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-4 mb-6">
              Artex Removal & Plastering Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We remove artex coatings from ceilings and walls, then apply smooth plaster finishes. 
              All work includes asbestos testing for properties built before 1999.
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
                      View Details
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
              <span className="section-label">Case Study</span>
              <h2 className="section-title mt-4 mb-6">Living Room Transformation</h2>
              <p className="text-muted-foreground text-lg mb-6">
                This 1976 semi-detached in Bristol had swirl-pattern artex throughout the ground floor. 
                We tested for asbestos (negative), removed all textured coatings, and applied a 
                smooth skim finish. The living room and dining room took two days in total.
              </p>
              <ul className="space-y-3 mb-8">
                {["Asbestos test: Negative", "Removal: 1 day", "Plastering: 1 day"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={beforeAfterImage}
                alt="Before and after: textured artex ceiling transformed to smooth plaster in Bristol living room"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteFormSection />

      <Footer />
    </div>
  );
};

export default Services;

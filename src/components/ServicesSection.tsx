import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import artexService1 from "@/assets/artex-service-1.jpg";
import artexService2 from "@/assets/artex-service-2.jpg";
import artexService3 from "@/assets/artex-service-3.jpg";
import beforeAfterImage from "@/assets/artex-before-after.jpg";

const services = [
  {
    title: "Artex Ceiling Removal",
    description: "Complete removal of textured artex coatings from ceilings. We safely remove all types of artex patterns leaving a smooth surface ready for decoration.",
    image: artexService1,
    link: "/services/artex-removal",
  },
  {
    title: "Smooth Plastering",
    description: "Professional skim coating and plastering services to achieve a perfect smooth ceiling finish after artex removal.",
    image: artexService2,
    link: "/services/plastering",
  },
  {
    title: "Asbestos Testing",
    description: "Comprehensive asbestos testing for pre-1999 artex coatings. Certified testing to ensure safe removal procedures.",
    image: artexService3,
    link: "/services/asbestos-testing",
  },
];

export function ServicesSection() {
  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Services</span>
          <h2 className="section-title mt-4">
            Professional Artex Removal Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From initial assessment to final finish, we provide complete artex removal 
            and ceiling renovation services across the UK.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn" onClick={scrollToQuoteForm}>
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Transformation</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-6">
                See the Difference
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our expert team transforms dated, textured artex ceilings into beautiful, 
                smooth modern finishes. Every project is completed to the highest standards 
                with minimal disruption to your home.
              </p>
              <ul className="space-y-3 mb-8">
                {["Complete dust containment", "Asbestos safe procedures", "Ready for decoration"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                Get Your Free Quote
              </Button>
            </div>
            <div className="relative">
              <img
                src={beforeAfterImage}
                alt="Before and after artex removal comparison"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

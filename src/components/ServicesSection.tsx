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
    description: "We remove swirl, stipple, and fan-pattern artex from ceilings using dust-controlled methods. Suitable for living rooms, bedrooms, and hallways.",
    image: artexService1,
    link: "/services/artex-ceiling-removal",
  },
  {
    title: "Smooth Plastering",
    description: "After removal, we apply a 2-3mm skim coat of multi-finish plaster. The surface is ready for painting within 48 hours of drying.",
    image: artexService2,
    link: "/services/smooth-plastering",
  },
  {
    title: "Asbestos Testing",
    description: "We send samples to a UKAS-accredited laboratory. Results typically arrive within 3-5 working days. Testing is required for all pre-1999 artex.",
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
            Artex Removal & Plastering Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From initial{" "}
            <Link to="/services/asbestos-testing" className="text-primary hover:underline">
              asbestos testing
            </Link>{" "}
            through to final{" "}
            <Link to="/services/smooth-plastering" className="text-primary hover:underline">
              smooth plastering
            </Link>, we handle every stage of the artex removal process.
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
                <Link to={service.link} className="inline-flex items-center gap-1 text-primary font-semibold group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground">
            We also offer{" "}
            <Link to="/services/wall-artex-removal" className="text-primary hover:underline font-medium">
              wall artex removal
            </Link>,{" "}
            <Link to="/services/ceiling-repair" className="text-primary hover:underline font-medium">
              ceiling repair
            </Link>, and{" "}
            <Link to="/services/textured-coating-removal" className="text-primary hover:underline font-medium">
              textured coating removal
            </Link>{" "}
            for woodchip, stipple, and other decorative finishes.{" "}
            <Link to="/services" className="text-primary hover:underline font-medium">
              View all our services
            </Link>.
          </p>
        </div>

        {/* Before/After Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Results</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-6">
                From Textured to Smooth
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                This living room ceiling in{" "}
                <Link to="/service-areas/bristol" className="text-primary hover:underline">
                  Bristol
                </Link>{" "}
                had stipple-pattern artex applied in 1985. We completed{" "}
                <Link to="/services/asbestos-testing" className="text-primary hover:underline">
                  asbestos testing
                </Link>{" "}
                (negative result), performed{" "}
                <Link to="/services/artex-ceiling-removal" className="text-primary hover:underline">
                  artex removal
                </Link>, and finished with a{" "}
                <Link to="/services/smooth-plastering" className="text-primary hover:underline">
                  smooth skim
                </Link>. The entire job took two days.
              </p>
              <ul className="space-y-3 mb-8">
                {["Asbestos test: Negative", "Removal time: 1 day", "Plastering: 1 day"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                Request a Quote
              </Button>
            </div>
            <div className="relative">
              <img
                src={beforeAfterImage}
                alt="Before and after comparison of artex ceiling removal in a Bristol living room"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

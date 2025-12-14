import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteFormSection } from "./QuoteFormSection";
import { Button } from "@/components/ui/button";
import { Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreas, createSlug } from "@/data/serviceAreas";
import { useMemo } from "react";

interface AreaPageLayoutProps {
  areaName: string;
  description: string;
  neighborhoods: string[];
}

export function AreaPageLayout({ areaName, description, neighborhoods }: AreaPageLayoutProps) {
  // Get other areas (excluding current one) for sidebar - show random selection
  const otherAreas = useMemo(() => {
    const currentSlug = createSlug(areaName);
    return serviceAreas
      .filter(area => area.slug !== currentSlug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, [areaName]);

  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy">
        <div className="container-custom text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary inline-flex items-center gap-2">
            Service Area
            <MapPin className="w-4 h-4" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
            Artex Removal in {areaName}
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Professional{" "}
            <Link to="/services/artex-ceiling-removal" className="text-primary hover:underline">
              artex ceiling removal
            </Link>{" "}
            and{" "}
            <Link to="/services/smooth-plastering" className="text-primary hover:underline">
              smooth plastering
            </Link>{" "}
            services in {areaName} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Title Section */}
              <div className="mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Artex Removal Services in {areaName}
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="leading-relaxed mb-6">
                  {description}
                </p>
                
                <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                  Our Services in {areaName}
                </h3>
                <p className="leading-relaxed mb-4">
                  We offer a complete range of artex and textured coating services to homeowners in {areaName}:
                </p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/artex-ceiling-removal" className="text-primary hover:underline font-medium">
                        Artex ceiling removal
                      </Link>{" "}
                      – complete removal of swirl, stipple, and fan-pattern artex from ceilings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/wall-artex-removal" className="text-primary hover:underline font-medium">
                        Wall artex removal
                      </Link>{" "}
                      – textured wall coatings removed with the same professional approach
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/asbestos-testing" className="text-primary hover:underline font-medium">
                        Asbestos testing
                      </Link>{" "}
                      – UKAS-accredited laboratory analysis for pre-1999 properties
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/smooth-plastering" className="text-primary hover:underline font-medium">
                        Smooth plastering
                      </Link>{" "}
                      – professional skim finish ready for painting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/ceiling-repair" className="text-primary hover:underline font-medium">
                        Ceiling repair
                      </Link>{" "}
                      – crack repair, water damage restoration, and localised fixes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <Link to="/services/textured-coating-removal" className="text-primary hover:underline font-medium">
                        Textured coating removal
                      </Link>{" "}
                      – woodchip, popcorn, stipple, and other decorative textures
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                  Why Choose Us in {areaName}?
                </h3>
                <p className="leading-relaxed">
                  Many properties in {areaName} were built or renovated during the 1970s and 1980s when artex 
                  was a popular ceiling finish. If your home was built before 1999, your artex may contain 
                  asbestos and should be tested before any work begins. We provide comprehensive{" "}
                  <Link to="/services/asbestos-testing" className="text-primary hover:underline">
                    asbestos testing
                  </Link>{" "}
                  and follow all HSE safety guidelines to protect your family during the removal process.
                </p>
              </div>

              {/* Areas We Serve */}
              {neighborhoods.length > 0 && (
                <div className="border-t border-border pt-12">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                    Areas We Cover Near {areaName}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Other Areas */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-heading text-xl font-bold text-foreground mb-6">
                  Other Service Areas
                </h4>
                <div className="space-y-3">
                  {otherAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-areas/${area.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {area.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link to="/service-areas" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View All Areas
                  </Button>
                </Link>
              </div>

              {/* Services Card */}
              <div className="bg-secondary rounded-2xl p-6 mt-6">
                <h4 className="font-heading text-xl font-bold text-foreground mb-4">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/artex-ceiling-removal" className="text-primary hover:underline">
                      Artex Ceiling Removal
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/smooth-plastering" className="text-primary hover:underline">
                      Smooth Plastering
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/asbestos-testing" className="text-primary hover:underline">
                      Asbestos Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/wall-artex-removal" className="text-primary hover:underline">
                      Wall Artex Removal
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ceiling-repair" className="text-primary hover:underline">
                      Ceiling Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/textured-coating-removal" className="text-primary hover:underline">
                      Textured Coating Removal
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-6 mt-6 text-primary-foreground">
                <h4 className="font-heading text-xl font-bold mb-4">
                  Request a Quote
                </h4>
                <p className="opacity-90 mb-6">
                  We cover {areaName} and the surrounding areas. Fill in the form below for a no-obligation quote.
                </p>
                <Button 
                  variant="accent" 
                  className="w-full"
                  onClick={scrollToQuoteForm}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteFormSection />

      <Footer />
    </div>
  );
}

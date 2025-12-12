import { Header } from "./Header";
import { Footer } from "./Footer";
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
    window.location.href = "/#quote";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy">
        <div className="container-custom text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary inline-flex items-center gap-2">
            Service Areas
            <MapPin className="w-4 h-4" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
            Artex Removal in {areaName}
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Professional artex ceiling removal and smooth plastering services in {areaName} and surrounding areas.
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
                <span className="section-label inline-flex items-center gap-2">
                  {areaName}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
                  Expert Artex Removal Services in {areaName}
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                {description}
              </p>

              {/* Areas We Serve */}
              {neighborhoods.length > 0 && (
                <div className="border-t border-border pt-12">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                    Areas We Cover
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

              {/* CTA Section */}
              <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      Ready to get started?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Get a free quote for your artex removal project in {areaName}.
                    </p>
                  </div>
                  <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                    Get Free Quote
                  </Button>
                </div>
              </div>
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

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-6 mt-6 text-primary-foreground">
                <h4 className="font-heading text-xl font-bold mb-4">
                  Get Your Free Quote
                </h4>
                <p className="opacity-90 mb-6">
                  Professional artex removal services in {areaName}. Contact us today for a free, no-obligation quote.
                </p>
                <Button 
                  variant="accent" 
                  className="w-full"
                  onClick={scrollToQuoteForm}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

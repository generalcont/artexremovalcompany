import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Check, Leaf, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface AreaPageLayoutProps {
  areaName: string;
  description: string;
  neighborhoods: string[];
}

const otherAreas = [
  { name: "Atlanta", href: "/service-areas/atlanta" },
  { name: "Miami", href: "/service-areas/miami" },
  { name: "Los Angeles", href: "/service-areas/los-angeles" },
  { name: "New York", href: "/service-areas/new-york" },
  { name: "Chicago", href: "/service-areas/chicago" },
];

export function AreaPageLayout({ areaName, description, neighborhoods }: AreaPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom text-center">
          <span className="section-label inline-flex items-center gap-2">
            Service Areas
            <Leaf className="w-4 h-4" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {areaName}
          </h1>
          
          {/* Decorative Leaves */}
          <div className="flex justify-center gap-4 mt-8">
            <Leaf className="w-12 h-12 text-primary animate-leaf-sway" style={{ animationDelay: "0s" }} />
            <Leaf className="w-16 h-16 text-primary animate-leaf-sway" style={{ animationDelay: "0.2s" }} />
            <Leaf className="w-12 h-12 text-primary animate-leaf-sway" style={{ animationDelay: "0.4s" }} />
          </div>
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
                  <Leaf className="w-4 h-4" />
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
                  The Ideal Cleaning Services in {areaName}
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                {description}
              </p>

              {/* Areas We Serve */}
              <div className="border-t border-border pt-12">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                  Areas we Serve
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

              {/* CTA Section */}
              <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      Ready to get started?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Get a free quote for your cleaning needs today.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/free-quote">
                      <Button variant="hero" size="lg">
                        Get Free Quote
                      </Button>
                    </Link>
                    <a href="tel:+11805678990">
                      <Button variant="heroOutline" size="lg" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </Button>
                    </a>
                  </div>
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
                      key={area.name}
                      to={area.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Leaf className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {area.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-6 mt-6 text-primary-foreground">
                <h4 className="font-heading text-xl font-bold mb-4">
                  Need Help?
                </h4>
                <p className="opacity-90 mb-6">
                  Our friendly team is here to help you with any questions about our cleaning services.
                </p>
                <a
                  href="tel:+11805678990"
                  className="flex items-center gap-3 bg-primary-foreground/20 rounded-lg p-4 hover:bg-primary-foreground/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+1 (180) 567-8990</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

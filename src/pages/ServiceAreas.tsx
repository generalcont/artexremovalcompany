import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    name: "Atlanta",
    href: "/service-areas/atlanta",
    description: "Serving Buckhead, Midtown, Virginia-Highland and more",
  },
  {
    name: "Miami",
    href: "/service-areas/miami",
    description: "Serving Miami Beach, Coral Gables, Brickell and more",
  },
  {
    name: "Los Angeles",
    href: "/service-areas/los-angeles",
    description: "Serving Beverly Hills, Santa Monica, Hollywood and more",
  },
  {
    name: "New York",
    href: "/service-areas/new-york",
    description: "Serving Manhattan, Brooklyn, Queens and more",
  },
  {
    name: "Chicago",
    href: "/service-areas/chicago",
    description: "Serving Lincoln Park, Wicker Park, Loop and more",
  },
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom text-center">
          <span className="section-label inline-flex items-center gap-2">
            Our Locations
            <Leaf className="w-4 h-4" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Service Areas
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            We provide professional eco-friendly cleaning services across multiple cities. 
            Find your area below.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {area.name}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                  View Area
                  <Leaf className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Don't see your area? Contact us to check availability.
            </p>
            <Link to="/free-quote">
              <Button variant="hero" size="lg">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

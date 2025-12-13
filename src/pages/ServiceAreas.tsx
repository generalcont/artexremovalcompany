import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { serviceAreas, getAreasGroupedByRegion } from "@/data/serviceAreas";
import { Input } from "@/components/ui/input";

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const groupedAreas = useMemo(() => getAreasGroupedByRegion(), []);
  const regionNames = useMemo(() => Object.keys(groupedAreas).sort(), [groupedAreas]);
  
  const filteredAreas = useMemo(() => {
    let areas = serviceAreas;
    
    if (selectedRegion) {
      areas = areas.filter(area => area.region === selectedRegion);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      areas = areas.filter(area => 
        area.name.toLowerCase().includes(query) ||
        area.region.toLowerCase().includes(query)
      );
    }
    
    return areas;
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom text-center">
          <span className="section-label inline-flex items-center gap-2">
            Coverage
            <MapPin className="w-4 h-4" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Service Areas
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            We provide artex removal and plastering services across the UK. 
            Find your area below or search by town or postcode.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search areas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedRegion === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(null)}
              >
                All Areas
              </Button>
              <Button
                variant={selectedRegion === "England" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(selectedRegion === "England" ? null : "England")}
              >
                England
              </Button>
              <Button
                variant={selectedRegion === "Scotland" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(selectedRegion === "Scotland" ? null : "Scotland")}
              >
                Scotland
              </Button>
              <Button
                variant={selectedRegion === "Wales" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(selectedRegion === "Wales" ? null : "Wales")}
              >
                Wales
              </Button>
              <Button
                variant={selectedRegion === "Northern Ireland" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(selectedRegion === "Northern Ireland" ? null : "Northern Ireland")}
              >
                N. Ireland
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredAreas.length} of {serviceAreas.length} service areas
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAreas.slice(0, 100).map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group bg-card rounded-xl p-4 border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {area.name}
                    </h3>
                    <p className="text-muted-foreground text-sm truncate">
                      {area.region}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredAreas.length > 100 && (
            <p className="text-center text-muted-foreground mt-8">
              Showing first 100 results. Use the search to find more specific areas.
            </p>
          )}

          {filteredAreas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No areas found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <QuoteFormSection />

      <Footer />
    </div>
  );
}

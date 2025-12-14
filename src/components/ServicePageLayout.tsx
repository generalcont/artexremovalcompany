import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { ChevronRight, Check, Shield } from "lucide-react";

interface RelatedService {
  name: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  taskList: string[];
  productsTitle: string;
  productsDescription: string[];
  relatedServices?: RelatedService[];
}

const services = [
  { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
  { name: "Smooth Plastering", href: "/services/smooth-plastering" },
  { name: "Asbestos Testing", href: "/services/asbestos-testing" },
  { name: "Wall Artex Removal", href: "/services/wall-artex-removal" },
  { name: "Ceiling Repair", href: "/services/ceiling-repair" },
  { name: "Textured Coating Removal", href: "/services/textured-coating-removal" },
];

export function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  description,
  taskList,
  productsTitle,
  productsDescription,
  relatedServices,
}: ServicePageLayoutProps) {
  // Filter out current service from sidebar
  const otherServices = services.filter(s => s.name !== title);
  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 gradient-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left Content */}
            <div className="animate-fade-up">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary flex items-center gap-2">
                Our Services
                <Shield className="w-4 h-4" />
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-4 mb-6">{title}</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">{subtitle}</p>
              <Button variant="hero" size="lg" onClick={scrollToQuoteForm}>
                Request a Quote
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt={title}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  {productsTitle}
                </h2>
                <div className="space-y-4">
                  {productsDescription.map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Task List Card */}
              <div className="bg-primary rounded-2xl p-8 lg:p-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-accent rounded-xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-foreground text-center mb-8">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {taskList.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 text-primary-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every project starts with a site visit to assess the ceiling condition and take measurements. 
                  For properties built before 1999, we take samples for{" "}
                  <Link to="/services/asbestos-testing" className="text-primary hover:underline">
                    asbestos testing
                  </Link>{" "}
                  before providing a fixed quote.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We use polythene sheeting to seal the work area and HEPA-filtered dust extractors during removal. 
                  All waste is bagged and removed from site. We hold £5 million public liability insurance and 
                  our team is UKATA asbestos awareness certified.
                </p>
                
                {/* Related Services Links */}
                {relatedServices && relatedServices.length > 0 && (
                  <div className="mt-8 p-6 bg-secondary rounded-xl">
                    <h3 className="font-heading font-bold text-foreground mb-4">Related Services</h3>
                    <p className="text-muted-foreground mb-4">
                      You may also be interested in:
                    </p>
                    <ul className="space-y-2">
                      {relatedServices.map((service) => (
                        <li key={service.href}>
                          <Link 
                            to={service.href} 
                            className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Services List */}
              <div className="bg-foreground rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h4 className="text-xl font-heading font-bold text-background mb-6">
                  Other Services
                </h4>
                <div className="space-y-3">
                  {otherServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center justify-between p-4 bg-card rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-accent rounded-2xl p-6 text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-foreground font-heading text-xl font-bold mb-4">
                  Need a quote?
                </p>
                <Button variant="hero" className="w-full" onClick={scrollToQuoteForm}>
                  Contact Us
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="bg-secondary rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">Fully Insured</p>
                    <p className="text-sm text-muted-foreground">£5m public liability</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  All work is covered by comprehensive public liability insurance.
                </p>
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

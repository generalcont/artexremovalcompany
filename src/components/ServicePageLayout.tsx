import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Check, Shield } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  taskList: string[];
  productsTitle: string;
  productsDescription: string[];
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
}: ServicePageLayoutProps) {
  const scrollToQuoteForm = () => {
    window.location.href = "/#quote";
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
                Get Free Quote
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
                <p className="text-primary-foreground/80 text-center mb-8">
                  Our comprehensive {title.toLowerCase()} service includes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {taskList.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 text-primary-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Why Choose Artex Removal Company?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 10 years of experience in artex removal and ceiling renovation, we've built a reputation for excellence across the UK. Our team of certified professionals uses the latest techniques and equipment to deliver outstanding results every time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Safety is our top priority. All our work is fully insured, and we hold all necessary certifications for asbestos awareness and safe removal. We provide complete dust containment to protect your home and ensure minimal disruption to your daily life.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Services List */}
              <div className="bg-foreground rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h4 className="text-xl font-heading font-bold text-background mb-6">
                  Our Services
                </h4>
                <div className="space-y-3">
                  {services.map((service) => (
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
                <p className="text-foreground font-medium mb-2">
                  Ready to transform your ceilings?
                </p>
                <p className="text-foreground font-heading text-xl font-bold mb-4">
                  Get your free quote today!
                </p>
                <Button variant="hero" className="w-full" onClick={scrollToQuoteForm}>
                  Request Quote
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="bg-secondary rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">Fully Insured</p>
                    <p className="text-sm text-muted-foreground">Complete peace of mind</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  All work is fully insured with public liability coverage up to £5 million.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get your free, no-obligation quote today. We'll respond within 24 hours.
            </p>
            <Button variant="accent" size="lg" onClick={scrollToQuoteForm}>
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

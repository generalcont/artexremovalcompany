import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import houseCleaningImage from "@/assets/house-cleaning.jpg";
import officeCleaningImage from "@/assets/office-cleaning.jpg";
import deepCleaningImage from "@/assets/deep-cleaning.jpg";
import moveCleaningImage from "@/assets/move-cleaning.jpg";

const services = [
  {
    title: "House Cleaning",
    description: "Keep your home spotless with our professional eco-friendly house cleaning service.",
    image: houseCleaningImage,
    href: "/services/house-cleaning",
  },
  {
    title: "Office Cleaning",
    description: "Create a productive and healthy workspace with our commercial cleaning solutions.",
    image: officeCleaningImage,
    href: "/services/office-cleaning",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for every corner, perfect for seasonal refreshes.",
    image: deepCleaningImage,
    href: "/services/deep-cleaning",
  },
  {
    title: "Move In/Out Cleaning",
    description: "Start fresh in your new space with our comprehensive move cleaning service.",
    image: moveCleaningImage,
    href: "/services/move-in-out-cleaning",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-secondary">
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="section-label flex items-center justify-center gap-2">
              Our Services
              <Leaf className="w-4 h-4 text-primary animate-leaf-sway" />
            </span>
            <h1 className="section-title mt-4 mb-6">
              Professional Eco-Friendly Cleaning Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a complete range of cleaning services designed to meet your needs while protecting the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-semibold text-cream">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-6">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free quote today and discover the ClanyEco difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-quote">
                <Button variant="accent" size="lg">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:+11805678990">
                <Button variant="heroOutline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Call +1 (180) 567-8990
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

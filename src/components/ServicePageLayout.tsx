import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, ChevronRight, Check, Leaf } from "lucide-react";

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
  { name: "House Cleaning", href: "/services/house-cleaning" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move In/Out Cleaning", href: "/services/move-in-out-cleaning" },
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left Content */}
            <div className="animate-fade-up">
              <span className="section-label flex items-center gap-2">
                Services
                <Leaf className="w-4 h-4 text-primary animate-leaf-sway" />
              </span>
              <h1 className="section-title mt-4 mb-6">{title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
              <Link to="/free-quote">
                <Button variant="hero" size="lg">
                  Free Quote
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <Leaf className="absolute -top-8 right-12 w-12 h-12 text-primary animate-float" />
                <Leaf className="absolute top-4 -right-4 w-8 h-8 text-primary/60 animate-leaf-sway" />
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>
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
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
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
                    <svg className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary-foreground text-center mb-8">
                  Our {title} Task List
                </h3>
                <p className="text-primary-foreground/80 text-center mb-8">
                  We do the work you may not have time for. Here are some of the cleaning tasks we can take care of for you:
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

              {/* Products Section */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                  The Right Cleaning Products
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At ClanyEco, we prioritize your space's health by using cleaning products that are both effective and safe. Our cleaners kill germs and remove dirt and grime while improving air quality, and are carefully selected to ensure they are safe for your family, pets, and the environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For those looking to reduce their environmental impact, we offer green cleaning options. Our eco-friendly solutions are free from harmful chemicals like parabens, phosphates, chlorine, and artificial fragrances, providing a cleaner, greener space while safeguarding both your health and the planet.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Services List */}
              <div className="bg-charcoal rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h4 className="text-xl font-heading font-semibold text-cream mb-6">
                  Choose Any Service
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
                  Looking for the cleaning service in New York?
                </p>
                <p className="text-foreground font-heading text-xl font-semibold mb-4">
                  Contact us now!
                </p>
                <a
                  href="tel:+11805678990"
                  className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 (180) 567-8990
                </a>
              </div>

              {/* FAQ CTA */}
              <div className="bg-secondary rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <p className="text-muted-foreground mb-4">
                  Check out our FAQ for all the details and answers you need!
                </p>
                <Link to="/faq">
                  <Button variant="heroOutline" className="w-full">
                    Read Our FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <span className="section-label">Get your free estimate</span>
              <h2 className="section-title mt-4">Get a Quote</h2>
            </div>

            <form className="bg-card rounded-2xl p-8 shadow-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Total square footage</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="1500 sq ft"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Choose a service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                  <option value="">Select a service</option>
                  <option value="house">House Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move In/Out Cleaning</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded border-border text-primary focus:ring-primary" />
                  <span className="text-sm text-muted-foreground">
                    By submitting this form, you agree to the processing of your personal data in accordance with the General Data Protection Regulation and our Privacy Policy.
                  </span>
                </label>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                I'd Like a Quote
              </Button>
            </form>

            {/* Satisfaction Guarantee */}
            <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">100% Satisfaction Guarantee</span>
              </div>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                Your satisfaction is our top priority! We proudly offer a 100% Happiness Guarantee on all our cleanings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

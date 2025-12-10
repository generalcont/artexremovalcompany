import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Residential Cleaning", href: "#" },
    { name: "Commercial Cleaning", href: "#" },
    { name: "Deep Cleaning", href: "#" },
    { name: "Move In/Out Cleaning", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-semibold">
                Clany<span className="text-primary">Eco</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Professional eco-friendly cleaning services for homes and businesses.
              Making your space sparkle since 2010.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+11805678990"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (180) 567-8990</span>
              </a>
              <a
                href="mailto:hello@clanyeco.com"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@clanyeco.com</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>123 Clean Street, City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ClanyEco. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

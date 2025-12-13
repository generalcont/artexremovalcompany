import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const footerLinks = {
  services: [
    { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
    { name: "Smooth Plastering", href: "/services/smooth-plastering" },
    { name: "Asbestos Testing", href: "/services/asbestos-testing" },
    { name: "Wall Artex Removal", href: "/services/wall-artex-removal" },
    { name: "Ceiling Repair", href: "/services/ceiling-repair" },
    { name: "Textured Coating Removal", href: "/services/textured-coating-removal" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Get a Quote", href: "/#quote" },
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
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="Artex Removal Company Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight">
                  Artex Removal
                </span>
                <span className="font-heading text-xs font-semibold text-primary leading-tight">
                  Company
                </span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Specialists in artex and textured ceiling removal across the UK. 
              We safely remove artex coatings and apply smooth plaster finishes.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@artexremovalcompany.co.uk"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@artexremovalcompany.co.uk</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Serving all areas across the UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Artex Removal Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

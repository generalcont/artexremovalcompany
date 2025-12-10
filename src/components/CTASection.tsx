import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Floating leaves */}
      <div className="absolute top-10 left-1/4 animate-float">
        <svg width="40" height="55" viewBox="0 0 60 80" className="text-primary-foreground/20">
          <path
            fill="currentColor"
            d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <svg width="50" height="70" viewBox="0 0 60 80" className="text-primary-foreground/20">
          <path
            fill="currentColor"
            d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary-foreground mb-6">
            Ready to Experience a Sparkling Clean Home?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Get your free quote today and let us transform your space into a clean, healthy haven.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              className="group"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+11805678990"
              className="inline-flex items-center gap-3 text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm opacity-80">Call us now</div>
                <div className="font-semibold">+1 (180) 567-8990</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

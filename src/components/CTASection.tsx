import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToQuoteForm = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready for Smooth, Modern Ceilings?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Get your free, no-obligation quote today and transform your dated textured 
            ceilings into beautiful smooth finishes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              className="group"
              onClick={scrollToQuoteForm}
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

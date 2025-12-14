import { FileText, Wrench, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: FileText,
    title: "1. Quote & Testing",
    description: "Fill in the form below with your room details. If your property was built before 1999, we'll arrange asbestos sampling before providing a fixed quote.",
    color: "bg-primary",
  },
  {
    icon: Wrench,
    title: "2. Removal Day",
    description: "We seal the room with polythene sheeting, remove the artex using scrapers and dust extractors, then bag and dispose of all waste.",
    color: "bg-artex-navy",
  },
  {
    icon: CheckCircle,
    title: "3. Plastering",
    description: "We apply a smooth plaster skim coat, typically 2-3mm thick. After 24-48 hours of drying, your ceiling is ready for primer and paint.",
    color: "bg-accent",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-title mt-4">Our Artex Removal Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here's exactly what happens when you book us for{" "}
            <Link to="/services/artex-ceiling-removal" className="text-primary hover:underline">
              artex ceiling removal
            </Link>{" "}
            or{" "}
            <Link to="/services/wall-artex-removal" className="text-primary hover:underline">
              wall artex removal
            </Link>.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info with links */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All projects include{" "}
            <Link to="/services/asbestos-testing" className="text-primary hover:underline font-medium">
              asbestos testing
            </Link>{" "}
            for pre-1999 properties and professional{" "}
            <Link to="/services/smooth-plastering" className="text-primary hover:underline font-medium">
              smooth plastering
            </Link>{" "}
            to complete the transformation. Need{" "}
            <Link to="/services/ceiling-repair" className="text-primary hover:underline font-medium">
              ceiling repairs
            </Link>{" "}
            instead of full removal? We can help with that too.
          </p>
        </div>

        {/* Connecting line for desktop */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-artex-navy" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-artex-navy to-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

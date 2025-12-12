import { FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Get Your Quote",
    description: "Fill in our quick form with your project details. We'll respond within 24 hours with a competitive quote.",
    color: "bg-primary",
  },
  {
    icon: Wrench,
    title: "Professional Removal",
    description: "Our certified team safely removes all artex, with dust containment and asbestos testing if required.",
    color: "bg-artex-navy",
  },
  {
    icon: CheckCircle,
    title: "Smooth Finish",
    description: "We apply a flawless smooth plaster finish, ready for you to paint and enjoy your transformed ceiling.",
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
          <h2 className="section-title mt-4">Simple 3-Step Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From initial quote to beautiful smooth ceilings, we make the process 
            simple and stress-free.
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
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
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

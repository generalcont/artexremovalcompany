import { FileText, Sparkles, Coffee } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Free Quote",
    description: "Tell us about your home and choose the date you want.",
    color: "bg-primary",
  },
  {
    icon: Sparkles,
    title: "Clean",
    description: "Our seasoned team of full-time cleaners will transform your home.",
    color: "bg-eco-light",
  },
  {
    icon: Coffee,
    title: "Relax",
    description: "Sit back and enjoy how amazing your home or business looks now.",
    color: "bg-sunny",
  },
];

export function HowItWorksSection() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label inline-flex items-center gap-2">
            <svg width="20" height="26" viewBox="0 0 60 80" className="text-primary">
              <path
                fill="currentColor"
                d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
              />
            </svg>
            How it works
          </span>
          <h2 className="section-title mt-4">Quick and Easy</h2>
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
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                {/* Leaf decoration */}
                <div className="absolute -bottom-2 -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="32" viewBox="0 0 60 80" className="text-primary/30">
                    <path
                      fill="currentColor"
                      d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10" />
      </div>
    </section>
  );
}

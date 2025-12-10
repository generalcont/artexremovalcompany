import { FileText, Wrench, Clock, Shield, Leaf, Users } from "lucide-react";

const reasons = [
  {
    icon: FileText,
    title: "Free Quote & Instant Pricing",
    description: "Get instant pricing and get your free quote cleaning all online.",
  },
  {
    icon: Wrench,
    title: "Equipment & Supplies Provided",
    description: "We bring all the necessary cleaning supplies and equipment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book your cleaning at a time that works best for your schedule.",
  },
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "All our cleaners are fully insured and background checked.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally safe cleaning products for your family.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our team undergoes rigorous training for quality service.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-cream">
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
            Why Choose Us
          </span>
          <h2 className="section-title mt-4">
            We Are Experienced & We Have Expert Teams
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

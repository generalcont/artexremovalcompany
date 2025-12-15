import { Shield, Wrench, Clock, Award, CheckCircle, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All work is covered by comprehensive insurance, giving you complete peace of mind.",
  },
  {
    icon: Wrench,
    title: "HEPA Dust Extraction",
    description: "We use industrial vacuum systems with HEPA filters to capture fine particles during removal.",
  },
  {
    icon: Clock,
    title: "Single Room in One Day",
    description: "Most bedrooms and living rooms are fully removed and ready for plastering within 8 hours.",
  },
  {
    icon: Award,
    title: "UKATA Asbestos Certified",
    description: "Our team holds UKATA asbestos awareness certification, renewed annually.",
  },
  {
    icon: CheckCircle,
    title: "UKAS Laboratory Testing",
    description: "Samples are analysed by accredited labs following HSG 248 guidelines.",
  },
  {
    icon: Users,
    title: "Direct Employment",
    description: "We employ our plasterers directly — no subcontractors, consistent quality.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title mt-4">
            Our Credentials
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            These are the standards and certifications that define how we work.
          </p>
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

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
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

import { Shield, Wrench, Clock, Award, CheckCircle, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Certified",
    description: "All work is fully insured with certified asbestos awareness training.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description: "We use industry-leading tools and dust containment systems.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most rooms completed in just one day with minimal disruption.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every project finished to the highest standards with warranty included.",
  },
  {
    icon: CheckCircle,
    title: "Asbestos Testing Included",
    description: "Free asbestos testing for all pre-1999 artex before removal begins.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 10 years experience with 500+ successful projects completed.",
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
            The Artex Removal Experts You Can Trust
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We're not just another decorating company - we're specialists dedicated 
            to safe, professional artex removal.
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

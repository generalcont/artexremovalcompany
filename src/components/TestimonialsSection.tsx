import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "London",
    rating: 5,
    text: "Had swirl artex removed from our 1970s semi. The team tested for asbestos first (came back clear), then finished the entire lounge ceiling in one day. The plasterer did a proper skim — no patching, no shortcuts.",
    date: "November 2024",
  },
  {
    name: "James T.",
    location: "Manchester",
    rating: 5,
    text: "Our house was built in 1978 so asbestos was a real concern. They took samples from three rooms, sent them to a lab, and gave us the all-clear within a week. Removal and plastering followed shortly after. Very straightforward process.",
    date: "October 2024",
  },
  {
    name: "Emma W.",
    location: "Birmingham",
    rating: 5,
    text: "We had four rooms done over three days — living room, dining room, and two bedrooms. The dust containment actually worked; our furniture was covered but didn't need cleaning afterwards. Fair price for the quality.",
    date: "November 2024",
  },
  {
    name: "David C.",
    location: "Bristol",
    rating: 5,
    text: "I'd tried to scrape off the artex myself and made a mess of it. These guys came in, sorted the damage I'd caused, removed the rest properly, and skimmed the lot. Should have called them first.",
    date: "September 2024",
  },
  {
    name: "Rachel G.",
    location: "Leeds",
    rating: 5,
    text: "Cottage ceilings with that old stipple finish. After removal and plastering, it looks like a completely different house. The plasterer took his time to get the finish right — no rushing.",
    date: "October 2024",
  },
  {
    name: "Michael B.",
    location: "Glasgow",
    rating: 5,
    text: "Bedroom ceilings in a 1985 build. They tested for asbestos (negative), set up sheeting everywhere, and removed the lot. The HEPA vacuum they used kept the dust under control. Good clean work.",
    date: "August 2024",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Reviews</span>
          <h2 className="section-title mt-4">
            What Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recent feedback from homeowners who've used our artex removal service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-secondary rounded-2xl px-8 py-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Google Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years Trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

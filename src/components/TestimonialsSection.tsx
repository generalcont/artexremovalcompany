import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London",
    rating: 5,
    text: "Absolutely brilliant service! The team removed all the artex from our living room ceiling and left it perfectly smooth. Very professional and tidy work.",
    date: "2 weeks ago",
  },
  {
    name: "James Thompson",
    location: "Manchester",
    rating: 5,
    text: "We were worried about asbestos in our 1970s ceiling but they handled everything professionally. Testing came back clear and the removal was done in one day!",
    date: "1 month ago",
  },
  {
    name: "Emma Williams",
    location: "Birmingham",
    rating: 5,
    text: "Transformed our entire house - 4 rooms done in 3 days. The smooth finish is incredible. Worth every penny and the price was very competitive.",
    date: "3 weeks ago",
  },
  {
    name: "David Chen",
    location: "Bristol",
    rating: 5,
    text: "From quote to completion, the process was seamless. Great communication throughout and the end result exceeded our expectations. Highly recommend!",
    date: "1 week ago",
  },
  {
    name: "Rachel Green",
    location: "Leeds",
    rating: 5,
    text: "The before and after is unbelievable! Our dated cottage ceilings now look like a modern new build. Professional team who really know their craft.",
    date: "2 months ago",
  },
  {
    name: "Michael Brown",
    location: "Glasgow",
    rating: 5,
    text: "Had artex removed from bedroom ceilings. Clean, efficient work with excellent dust containment. The smooth plastering finish is flawless.",
    date: "3 weeks ago",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it - hear from hundreds of satisfied customers 
            who have transformed their homes with our artex removal services.
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
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

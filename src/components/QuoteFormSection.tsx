import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Send, Shield, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Shield, text: "Free no-obligation quote" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Award, text: "Competitive pricing" },
];

export function QuoteFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postcode: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours with your free quote.",
    });

    setFormData({
      name: "",
      email: "",
      postcode: "",
      serviceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="quote" className="py-24 gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Request Your Free Quote Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Fill out the form and our team will provide you with a detailed, 
              no-obligation quote for your artex removal project.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Get Your Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="postcode">Postcode *</Label>
                  <Input
                    id="postcode"
                    placeholder="e.g. SW1A 1AA"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="artex-removal">Artex Removal</SelectItem>
                      <SelectItem value="plastering">Smooth Plastering</SelectItem>
                      <SelectItem value="asbestos-testing">Asbestos Testing</SelectItem>
                      <SelectItem value="full-service">Full Service (All)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project (room size, number of rooms, any specific requirements...)"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Request Free Quote
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

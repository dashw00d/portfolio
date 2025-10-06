import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Local Plumbing Co.",
      content: "Our website was costing us customers every day. Ryan fixed our slow loading times and now our leads have increased by 40%. Worth every penny.",
      rating: 5,
      company: "Local Plumbing Co."
    },
    {
      name: "Mike Chen",
      role: "Founder, SaaS Startup",
      content: "Built our entire customer portal in 6 weeks. The timeline and budget were exactly what we agreed on. Highly recommend for any business owner.",
      rating: 5,
      company: "SaaS Startup"
    },
    {
      name: "Jennifer Davis",
      role: "Marketing Director",
      content: "Our emails were going straight to spam. Ryan fixed our infrastructure and now our deliverability is at 98%. Game changer for our business.",
      rating: 5,
      company: "Professional Services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-zinc-600">Real feedback from real business owners</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 relative">
              <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-20" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-zinc-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                <div className="text-sm text-zinc-600">{testimonial.role}</div>
                <div className="text-xs text-zinc-500 mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

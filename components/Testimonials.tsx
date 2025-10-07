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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-highlight-50/70 to-white py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-24 bg-gradient-to-b from-brand-900/15 via-highlight-200/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-24 bg-gradient-to-t from-brand-950/35 via-brand-900/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(3,54,73,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-zinc-600">Real feedback from real business owners</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
              <Quote className="h-8 w-8 text-brand-500 mb-4 opacity-20" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                ))}
              </div>

              <p className="text-zinc-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
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

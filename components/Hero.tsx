import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pb-12 pt-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Available for projects
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6">
          I fix the tech problems that cost you customers
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 mb-8 leading-relaxed">
          Your site's too slow. Your emails hit spam. Leads aren't tracked. Google can't find you. <span className="text-zinc-900 font-semibold">I solve these problems</span> so you can focus on running your business.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">
            Let's talk about your business
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/>
          </a>
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700 hover:border-zinc-400 hover:shadow-md transition-all">
            <Mail className="h-4 w-4"/> Email me
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            10+ years building for businesses
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Laravel, Tailwind, and modern tools
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Plain English, no BS
          </div>
        </div>
      </div>
    </section>
  );
}

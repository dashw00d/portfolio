import React from "react";
import Link from "next/link";

const CASES = [
  {
    sector: "Local Services",
    title: "Invisible on Google → booked out",
    summary: "Location pages + review engine + structured data that moved them from page 4 to the top map pack.",
    before: "12 organic leads/mo",
    after: "42 organic leads/mo",
    tags: ["Local SEO", "GBP optimisation", "Content architecture"],
  },
  {
    sector: "DTC Ecommerce",
    title: "9s checkout → 0.9s, 40% more conversions",
    summary: "Image optimisation, database tuning, and edge caching gave their campaigns room to scale.",
    before: "9.1s LCP",
    after: "0.9s LCP",
    tags: ["Performance", "MySQL tuning", "Vercel Edge"],
  },
  {
    sector: "SaaS",
    title: "Portal shipped in 6 weeks, not 6 months",
    summary: "Customer dashboard integrating billing, roles, and usage analytics built on Laravel + Livewire.",
    before: "No self-serve access",
    after: "1k users onboarded",
    tags: ["Laravel", "Livewire", "Product delivery"],
  },
  {
    sector: "Professional Services",
    title: "Emails hitting spam? 98% inbox rate now",
    summary: "Deliverability overhaul: DNS, dedicated sending domains, and warming schedule with reporting.",
    before: "60% delivery",
    after: "98% delivery",
    tags: ["SPF/DKIM", "Sendgrid", "Warm up"],
  },
];

export default function Examples() {
  return (
    <section id="examples" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl">Proof it works in the real world</h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-600">
              Each project starts by quantifying the leak, then ends with a before/after you can show investors, partners, or your team.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
          >
            View in-depth demos
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-5 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-blue-500">
                <span>{item.sector}</span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-600">
                  Case snapshot
                </span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{item.summary}</p>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">Before</p>
                  <p className="mt-1 font-semibold text-zinc-800">{item.before}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-500">After</p>
                  <p className="mt-1 font-semibold text-emerald-600">{item.after}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

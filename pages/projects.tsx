import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const DEMOS = [
  {
    title: "Conversion-Ready Service Landing Page",
    caption: "Speed + authority for local operators",
    description:
      "A modular Next.js build that scores 99/100 on Lighthouse, includes pre-written testimonials, FAQs, and contact forms wired to HubSpot.",
    metrics: [
      { label: "Page load", value: "0.9s" },
      { label: "Lead uplift", value: "+180%" },
    ],
    technologies: ["Next.js", "Tailwind", "HubSpot"],
    previewLink: "",
  },
  {
    title: "Deliverability Dashboard",
    caption: "Keep email revenue online",
    description:
      "A Laravel + Livewire console that monitors SPF/DKIM, bounce rates, and sender scores. Alerts your team in Slack before deliverability drops.",
    metrics: [
      { label: "Inbox rate", value: "98%" },
      { label: "Setup time", value: "5 days" },
    ],
    technologies: ["Laravel", "Livewire", "Postmark"],
    previewLink: "",
  },
  {
    title: "Attribution Scorecard",
    caption: "See where every lead came from",
    description:
      "Client-ready Notion-style dashboard backed by Supabase. Breaks down traffic sources, revenue, and campaign ROI with exportable reports.",
    metrics: [
      { label: "Integrations", value: "GA4, Meta, GSheets" },
      { label: "Launch", value: "2 weeks" },
    ],
    technologies: ["Next.js", "Supabase", "Notion API"],
    previewLink: "",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Project Demos - Ryan Stefan</title>
        <meta
          name="description"
          content="Preview demo builds and case studies that show how Ryan Stefan helps business owners fix tech pain points fast."
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-zinc-900">
        <section className="relative overflow-hidden px-6 pb-24 pt-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              Demo library
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              See the playbooks in action
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              A curated look at systems I deliver for owners—landing pages, dashboards, and automations that solve the problems we chat about on our intro call.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-10 lg:grid-cols-3">
            {DEMOS.map((demo) => (
              <article
                key={demo.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-blue-500">{demo.caption}</p>
                  <h2 className="text-2xl font-semibold text-zinc-900">{demo.title}</h2>
                  <p className="text-sm leading-relaxed text-zinc-600">{demo.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 text-sm">
                  {demo.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">{metric.label}</p>
                      <p className="mt-1 font-semibold text-zinc-900">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-medium text-blue-600">
                  {demo.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-500/10 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  {demo.previewLink ? (
                    <Link
                      href={demo.previewLink}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      View walkthrough
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-zinc-400">Walkthrough video coming soon</span>
                  )}
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Ship-ready
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white/70 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
              Want a tailored walkthrough?
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Drop me a line with your stack and goals. I’ll prep a live demo showing exactly how we’d solve it.
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

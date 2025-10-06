import React from "react";
import { ArrowRight, Mail, ShieldCheck, Rocket, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-blue-50" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Booking projects for Q2
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight text-zinc-900 md:text-7xl">
            Fix the leaks that cost your business revenue
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-zinc-600 md:text-xl">
            Slow pages, missing leads, emails in spam—those are revenue leaks. I pair full-stack engineering with business context to stop them fast, usually inside 30 days.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Diagnose my tech stack
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              <Mail className="h-4 w-4" />
              Email Ryan directly
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <ShieldCheck className="h-4 w-4" />
                Deliverability
              </div>
              <p className="text-2xl font-bold text-zinc-900">98% inbox rate</p>
              <p className="text-sm text-zinc-500">for a pro services firm in 14 days</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <Rocket className="h-4 w-4" />
                Performance
              </div>
              <p className="text-2xl font-bold text-zinc-900">2.3s → 0.9s</p>
              <p className="text-sm text-zinc-500">checkout load time for a DTC brand</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <LineChart className="h-4 w-4" />
                Leads
              </div>
              <p className="text-2xl font-bold text-zinc-900">3.5× pipeline</p>
              <p className="text-sm text-zinc-500">for a local services business</p>
            </div>
          </div>
        </div>

        <div className="relative hidden rounded-3xl border border-blue-200/40 bg-white/80 p-8 shadow-xl backdrop-blur lg:block">
          <div className="absolute inset-x-6 -top-8 h-24 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70 blur-3xl" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-500">Quick diagnostic</p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                100% actionable
              </span>
            </div>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-center gap-3 rounded-2xl border border-blue-100/60 bg-blue-50/60 px-4 py-3 text-blue-900">
                <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                SPF, DKIM, and DMARC audit delivered with fixes
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-emerald-100/60 bg-emerald-50/60 px-4 py-3 text-emerald-900">
                <Rocket className="h-4 w-4 flex-shrink-0" />
                Core Web Vitals and caching tuned for conversions
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-purple-100/60 bg-purple-50/60 px-4 py-3 text-purple-900">
                <LineChart className="h-4 w-4 flex-shrink-0" />
                Attribution dashboards to show every lead touchpoint
              </li>
            </ul>
            <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-500">
              "Ryan translated our tech mess into revenue wins in a week." — Operations Director, SaaS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

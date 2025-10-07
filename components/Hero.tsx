import React from "react";
import { ArrowRight, Mail, ShieldCheck, Rocket, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="paw-trail-layer" />
        {/* Large gradient orbs */}
        <div className="absolute left-1/2 top-[-20%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl animate-pulse" />
        <div className="absolute right-[-10%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-highlight-200/40 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-brand-50" />

        {/* Floating geometric shapes */}
        <div className="absolute left-[20%] bottom-[30%] h-8 w-8 bg-gradient-to-br from-warning-400/20 to-warning-600/20 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute right-[8%] bottom-[20%] h-20 w-3 bg-gradient-to-b from-brand-400/30 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.8s'}} />

        {/* Decorative lines */}
        <div className="absolute left-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-brand-300/20 to-transparent" />
        <div className="absolute right-0 top-1/3 w-px h-24 bg-gradient-to-b from-transparent via-accent-300/20 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success-500" />
            Booking projects for Q2
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight bg-gradient-to-r from-zinc-900 via-brand-900 to-accent-900 bg-clip-text text-transparent md:text-7xl">
            Fix the leaks that cost your business revenue
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-zinc-600 md:text-xl">
            Slow pages, missing leads, emails in spam—those are revenue leaks. I pair full-stack engineering with business context to stop them fast, usually inside 30 days.
          </p>

          {/* Profile section with photo placeholder */}
          <div className="mb-10 flex items-center gap-6">
            <div className="relative">
              <div className="h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 shadow-lg">
                {/* Replace with your photo: */}
                <img
                  src="/images/ryan_stefan.png"
                  alt="Ryan Stefan"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="h-full w-full rounded-xl bg-zinc-200 flex items-center justify-center">
                  <div className="text-2xl font-bold text-zinc-500">RY</div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-success-500 border-2 border-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900">Ryan Stefan</div>
              <div className="text-sm text-zinc-500">Full-Stack Developer & Business Problem Solver</div>
            </div>
          </div>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
            >
              Diagnose my tech stack
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:ryan@dashwood.net"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700 shadow-sm transition hover:border-brand-300 hover:text-brand-600"
            >
              <Mail className="h-4 w-4" />
              Email Ryan directly
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur border-l-4 border-l-brand-500">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-600">
                <ShieldCheck className="h-4 w-4" />
                Deliverability
              </div>
              <p className="text-2xl font-bold text-zinc-900">98% inbox rate</p>
              <p className="text-sm text-zinc-500">Expect 98% inbox rates when we migrate you to SendGrid and lock in SPF/DKIM.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur border-l-4 border-l-success-500">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-success-600">
                <Rocket className="h-4 w-4" />
                Performance
              </div>
              <p className="text-2xl font-bold text-zinc-900">2.3s → 0.6s</p>
              <p className="text-sm text-zinc-500">Expect 0.6s loads through DOM pruning, bundle slimming, and edge caching.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm backdrop-blur border-l-4 border-l-accent-500">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-600">
                <LineChart className="h-4 w-4" />
                Leads
              </div>
              <p className="text-2xl font-bold text-zinc-900">3.5× pipeline</p>
              <p className="text-sm text-zinc-500">Expect 3.5× pipeline when attribution and follow-up automations click into place.</p>
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-3xl border border-brand-900/25 bg-gradient-to-br from-brand-900 via-accent-900 to-brand-800 p-8 text-white shadow-2xl lg:block">
          <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(232,221,203,0.18),_transparent_70%)]" />
          <div className="relative space-y-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-highlight-200/80">
                  Quick diagnostic
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  48-hour revenue leak clean-up
                </h3>
              </div>
              <div className="space-y-1 text-right text-xs text-highlight-200/70">
                <p className="font-semibold tracking-[0.35em] uppercase text-highlight-200/90">Includes</p>
                <p className="text-highlight-100/80">Audit call, findings deck, day-by-day action sheet.</p>
              </div>
            </div>

            <div className="grid gap-4 text-sm">
              <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/30">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Deliverability audit</p>
                  <p className="text-highlight-100/80">SPF, DKIM, DMARC fixes plus inbox warm-up playbook</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-success-500/30">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Speed remediation</p>
                  <p className="text-highlight-100/80">Core Web Vitals, caching, and hosting tuned for launches</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/30">
                  <LineChart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Attribution clarity</p>
                  <p className="text-highlight-100/80">Dashboards that surface every leak across ads and forms</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-highlight-200/80">
                <span>Client note</span>
                <span className="h-px flex-1 bg-white/20" />
                <span>Emergency rescue</span>
              </div>
              <p className="text-highlight-50/90 leading-relaxed">
                &ldquo;When our hosting company dropped support for our platform, Ryan came in and moved everything to a custom server overnight, saving us from a nightmare!&rdquo;
              </p>
              <p className="text-highlight-200/70">— CEO, Staffing Agency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition to Problems section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
        <svg
          className="w-full h-[120px] text-brand-50"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,60L80,65C160,70,320,80,480,75C640,70,800,50,960,45C1120,40,1280,50,1360,55L1440,60L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

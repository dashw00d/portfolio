import React from "react";
import { PhoneCall, ClipboardCheck, Wrench, Sparkles, Clock, Target, Code2 } from "lucide-react";

const STEPS = [
  {
    title: "Map the pain",
    description:
      "We hop on a 30-minute call. You walk me through the symptoms, I dig into the data and surface the hidden blockers.",
    icon: PhoneCall,
    outcome: "Recorded call + next steps inside 24 hours",
  },
  {
    title: "Ship the action plan",
    description:
      "You get a plain-English plan covering fixes, cost, timeline, and impact. Shareable with partners or your internal team.",
    icon: ClipboardCheck,
    outcome: "Scope + ROI summary inside 48 hours",
  },
  {
    title: "Execute + debrief",
    description:
      "I implement, test, and report back with before/after numbers. Then you decide if we continue or wrap.",
    icon: Wrench,
    outcome: "Weekly progress Loom + final playbook",
  },
];

const PRINCIPLES = [
  {
    icon: Clock,
    title: "Fast response",
    copy: "Slack & email replies within one business day, emergencies faster.",
  },
  {
    icon: Target,
    title: "ROI first",
    copy: "If a fix won't grow or protect revenue, I'll point you to a better investment.",
  },
  {
    icon: Code2,
    title: "Hands on keys",
    copy: "No hand-offs. I write the code, configure tooling, and own the rollout.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-8 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[5%] top-1/2 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute left-1/2 bottom-12 h-56 w-56 rounded-full bg-purple-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            How we'd work together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Clear plan, fast execution, and measurable outcomes. No retainers unless you ask for one.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            {STEPS.map((step, idx) => (
              <article
                key={step.title}
                className="group rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-sm font-bold text-blue-600">
                        {idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      {step.outcome}
                    </div>
                  </div>
                </div>
              </article>
            ))}
            <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50/80 p-8 shadow-lg shadow-blue-200/50 backdrop-blur-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Pilot project cadence</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Most first engagements wrap in 2–4 weeks on a fixed fee.</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50"
                >
                  Hold a discovery call
                </a>
              </div>
            </div>
          </div>

          <div className="lg:relative">
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">What never changes</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Every engagement keeps communication tight and decisions simple.
                </p>
              </div>
              <div className="grid gap-4">
                {PRINCIPLES.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-3xl border border-slate-200/60 bg-white/90 p-7 shadow-md shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-500/20 group-hover:to-indigo-500/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

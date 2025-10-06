import React, { useMemo } from "react";
import { ServerCrash, MailX, UserX, EyeOff } from "lucide-react";
import TerminalBlock from "./TerminalBlock";

export default function Problems() {
  const terminalLines = useMemo(() => ([
    "Checking your site...",
    "> Slow load times killing conversions?",
    "> Emails disappearing into spam?",
    "> Leads slipping through cracks?",
    "> Google ranking nowhere to be found?",
    "I can fix that."
  ]), []);

  const problems = [
    {
      icon: ServerCrash,
      title: "Site crashes when you need it most",
      description: "Peak hours, big campaigns, Black Friday—your server gives up. Every minute down = money out the door.",
      fix: "I stabilise hosting, set up autoscaling, and monitor so you're ready for traffic spikes.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-white",
      textColor: "text-red-900",
      iconBg: "bg-red-100"
    },
    {
      icon: MailX,
      title: "Your emails never reach customers",
      description: "Confirmations, receipts, updates—all in spam. Customers think you're ignoring them. Trust evaporates.",
      fix: "Run a deliverability audit, repair DNS, and build a warm-up plan so inbox placement sticks.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-white",
      textColor: "text-orange-900",
      iconBg: "bg-orange-100"
    },
    {
      icon: UserX,
      title: "Leads fill out forms... then nothing",
      description: "No tracking, no follow-up, no pipeline. You're paying for traffic that disappears into a black hole.",
      fix: "Integrate CRM + analytics, wire alerts, and build automations so every lead is captured.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-white",
      textColor: "text-amber-900",
      iconBg: "bg-amber-100"
    },
    {
      icon: EyeOff,
      title: "Invisible on Google",
      description: "Competitors show up first. You're on page 3. Customers searching for exactly what you offer can't find you.",
      fix: "Repair technical SEO, structure content, and build authority so you show up where buyers look.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-white",
      textColor: "text-yellow-900",
      iconBg: "bg-yellow-100"
    }
  ];

  const proofPoints = [
    { value: "28%", label: "avg conversion lift after fixes" },
    { value: "< 30 days", label: "to resolve priority issues" },
    { value: "12+", label: "industries supported to date" }
  ];

  return (
    <section id="problems" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="mx-auto mb-4 max-w-3xl text-4xl font-bold text-zinc-900 lg:text-5xl">
          Spot the leak → deploy the fix
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600">
          These are the headaches owners describe on our first call. I pair diagnostics with a playbook that's proven to stop the bleeding fast.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-1 shadow-sm">
            <div className="rounded-[1.45rem] border border-blue-100/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-100/60 p-6">
              <TerminalBlock title="common red flags" lines={terminalLines} />
            </div>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 text-left shadow-sm">
            <p className="text-xl font-semibold text-zinc-900">
              Score a no-fluff site audit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              I'll review performance, deliverability, and lead flows, then we walk the findings together on a 20-minute video call.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Hold my spot
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-500">
              What owners care about
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 text-center">
                  <p className="text-2xl font-semibold text-zinc-900">{point.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group grid gap-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[auto,1fr]"
            >
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${problem.iconBg}`}>
                <problem.icon className={`h-6 w-6 ${problem.textColor}`} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${problem.textColor}`}>
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {problem.description}
                </p>
                <div className={`mt-4 rounded-2xl border border-blue-100/70 bg-blue-50/60 p-4 text-sm font-medium text-blue-900 shadow-inner`}
                >
                  <span className="uppercase tracking-widest text-xs text-blue-500">The fix</span>
                  <p className="mt-2 leading-relaxed">{problem.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

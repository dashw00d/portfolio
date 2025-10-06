import React from "react";
import { Zap, Database, Globe, Search, MessageSquare, Shield, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">
            Fixed-fee playbooks
          </p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Same-week fixes, one owner</h2>
          <p className="text-lg text-zinc-300">
            Whether it's performance, deliverability, or attribution, the goal is revenue. Here's how we tackle each lever and what you walk away with.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/15 p-3">
                <Zap className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold">Stabilise the core</h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Speed audits, hosting refactors, production monitoring, automated backups.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" /> Hardened infrastructure &amp; recovery plans
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-400" /> Core Web Vitals under 1s FCP
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4 text-blue-400" /> Query and cache tuning for spikes
              </li>
            </ul>
            <div className="rounded-2xl border border-blue-500/40 bg-blue-500/10 p-4 text-xs uppercase tracking-widest text-blue-200">
              Result: uptime + confidence during promotions
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/15 p-3">
                <MessageSquare className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold">Make every lead count</h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Trace every form, text, and email so sales teams never guess what happened.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4 text-emerald-300" /> CRM + pipeline automation, zero manual CSVs
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-300" /> Inbox placement monitoring &amp; reputation boosts
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-300" /> Live dashboards that show lead source ROI
              </li>
            </ul>
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs uppercase tracking-widest text-emerald-200">
              Result: follow-ups within minutes, not days
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-purple-500/15 p-3">
                <Search className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold">Scale the winners</h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Once the leaks are sealed, we turn the channels that work into predictable growth.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-300" /> SEO roadmaps tied to revenue targets
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple-300" /> High-converting landing pages &amp; funnels
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-300" /> Experiment sprints with clear success metrics
              </li>
            </ul>
            <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-4 text-xs uppercase tracking-widest text-purple-200">
              Result: compounding organic &amp; paid returns
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

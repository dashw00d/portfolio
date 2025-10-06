import React from "react";
import { Zap, Database, Globe, Search, MessageSquare, Shield, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-900 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">What I actually do</h2>
          <p className="text-xl text-zinc-300">I'm a full-stack developer who understands business problems. Here's the range.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-lg">Fix slow sites</h3>
            </div>
            <p className="text-sm text-zinc-400">Your site loads in 8 seconds. I'll get it under 3. Faster load = more sales. Simple math.</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-bold text-lg">Email & SMS delivery</h3>
            </div>
            <p className="text-sm text-zinc-400">Set up proper infrastructure so your messages actually reach people. SPF, DKIM, sender reputation—the works.</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Database className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-bold text-lg">Lead tracking & CRM</h3>
            </div>
            <p className="text-sm text-zinc-400">Build systems that capture every lead, track every touchpoint, automate follow-ups. No more guessing.</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Search className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="font-bold text-lg">SEO that actually works</h3>
            </div>
            <p className="text-sm text-zinc-400">Get you on page 1 for terms that matter. Local SEO, technical fixes, content structure. Real rankings.</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <MessageSquare className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="font-bold text-lg">Custom web apps</h3>
            </div>
            <p className="text-sm text-zinc-400">Build tools your business actually needs. Customer portals, booking systems, dashboards. Laravel + Livewire.</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="font-bold text-lg">Server & infrastructure</h3>
            </div>
            <p className="text-sm text-zinc-400">Set up reliable hosting, backups, monitoring, security. Your site stays up while you sleep.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <p className="text-lg text-blue-200">
            <span className="font-bold">Bottom line:</span> If it's a tech problem costing you customers or revenue, I can probably fix it. If I can't, I'll tell you who can.
          </p>
        </div>
      </div>
    </section>
  );
}

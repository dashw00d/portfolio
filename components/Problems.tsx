import React, { useMemo } from "react";
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

  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <TerminalBlock title="diagnosing common issues" lines={terminalLines} />

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Here's what I keep seeing</h2>
            <p className="text-lg text-zinc-600">Business owners paying for websites that actively hurt them. I step in and actually fix the problems.</p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-red-400 bg-red-50/50 p-4 rounded-r-xl">
              <div className="font-bold text-red-900 mb-1">Site crashes when you need it most</div>
              <p className="text-sm text-red-800">Peak hours, big campaigns, Black Friday—your server gives up. Every minute down = money out the door.</p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50/50 p-4 rounded-r-xl">
              <div className="font-bold text-orange-900 mb-1">Your emails never reach customers</div>
              <p className="text-sm text-orange-800">Confirmations, receipts, updates—all in spam. Customers think you're ignoring them. Trust evaporates.</p>
            </div>

            <div className="border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-xl">
              <div className="font-bold text-amber-900 mb-1">Leads fill out forms... then nothing</div>
              <p className="text-sm text-amber-800">No tracking, no follow-up, no pipeline. You're paying for traffic that disappears into a black hole.</p>
            </div>

            <div className="border-l-4 border-yellow-400 bg-yellow-50/50 p-4 rounded-r-xl">
              <div className="font-bold text-yellow-900 mb-1">Invisible on Google</div>
              <p className="text-sm text-yellow-800">Competitors show up first. You're on page 3. Customers searching for exactly what you offer can't find you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

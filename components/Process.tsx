import React from "react";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 mb-4">How we'd work together</h2>
        <p className="text-xl text-zinc-600">No long contracts. No retainers unless you want one. We solve the problem, you get results.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">1</div>
          <h3 className="font-bold text-xl mb-2">You tell me the problem</h3>
          <p className="text-zinc-600">30-minute call. I listen, ask questions, and figure out what's actually broken.</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">2</div>
          <h3 className="font-bold text-xl mb-2">I give you a plan</h3>
          <p className="text-zinc-600">Plain English breakdown: what I'll fix, how long it takes, what it costs. No surprises.</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">3</div>
          <h3 className="font-bold text-xl mb-2">I fix it</h3>
          <p className="text-zinc-600">You get updates as I work. When it's done, it's done right. Then you decide if you need more.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="border border-zinc-200 bg-white rounded-xl p-6">
          <div className="text-2xl mb-2">💬</div>
          <div className="font-bold text-zinc-900 mb-2">I speak human</div>
          <p className="text-sm text-zinc-600">No jargon. I explain what's wrong and why it matters to your bottom line.</p>
        </div>

        <div className="border border-zinc-200 bg-white rounded-xl p-6">
          <div className="text-2xl mb-2">⚡</div>
          <div className="font-bold text-zinc-900 mb-2">I move fast</div>
          <p className="text-sm text-zinc-600">Small fixes in days. Full projects in weeks. I don't drag things out.</p>
        </div>

        <div className="border border-zinc-200 bg-white rounded-xl p-6">
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-bold text-zinc-900 mb-2">I focus on ROI</div>
          <p className="text-sm text-zinc-600">If a fix won't make you money or save you money, I'll tell you not to do it.</p>
        </div>

        <div className="border border-zinc-200 bg-white rounded-xl p-6">
          <div className="text-2xl mb-2">🔧</div>
          <div className="font-bold text-zinc-900 mb-2">I actually build things</div>
          <p className="text-sm text-zinc-600">Not just advice. I write the code, set up the servers, and make it work.</p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-zinc-900 mb-4">Got a problem?</h2>
        <p className="text-2xl text-zinc-600">Let's talk. I'll tell you if I can help.</p>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-6">👋</div>
          <h3 className="text-2xl font-bold mb-4">Send me an email</h3>
          <p className="text-blue-100 mb-8 text-lg">Tell me what's not working. I'll get back to you within 24 hours with thoughts on whether I can help—no obligation, no sales pitch.</p>

          <a href="mailto:you@example.com" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all mb-6">
            <Mail className="h-5 w-5"/>
            you@example.com
          </a>

          <div className="pt-6 border-t border-blue-400/30">
            <p className="text-blue-100 text-sm mb-3">What to include:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-400/20 rounded-lg p-3">
                <div className="font-semibold mb-1">What's broken</div>
                <div className="text-blue-100">The actual problem you're facing</div>
              </div>
              <div className="bg-blue-400/20 rounded-lg p-3">
                <div className="font-semibold mb-1">Why it matters</div>
                <div className="text-blue-100">How it's affecting your business</div>
              </div>
              <div className="bg-blue-400/20 rounded-lg p-3">
                <div className="font-semibold mb-1">Your timeline</div>
                <div className="text-blue-100">How urgent this is</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-zinc-500">
        <p>Based in Dallas, TX • Working with businesses across the US</p>
      </div>
    </section>
  );
}

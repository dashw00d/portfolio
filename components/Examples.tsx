import React from "react";

export default function Examples() {
  return (
    <section id="examples" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Recent problems I've solved</h2>
          <p className="text-xl text-zinc-600">Every business is different. Here's the kind of work I do.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="text-sm font-semibold text-blue-600 mb-2">Local Service Business</div>
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Google couldn't find them. Now they're #1.</h3>
            <p className="text-sm text-zinc-600 mb-4">Built location pages, fixed technical SEO, set up Google Business properly. Went from page 4 to top 3 in 60 days. Calls increased 3x.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">Local SEO</span>
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">Technical fixes</span>
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">Content strategy</span>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="text-sm font-semibold text-purple-600 mb-2">E-commerce Site</div>
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Slow checkout killing sales. Fixed it.</h3>
            <p className="text-sm text-zinc-600 mb-4">Load time was 9 seconds. Optimized images, rewrote slow queries, set up proper caching. Got it to 2.3 seconds. Cart abandonment dropped 40%.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">Performance</span>
              <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">Database optimization</span>
              <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">CDN setup</span>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="text-sm font-semibold text-green-600 mb-2">SaaS Startup</div>
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Built their customer portal from scratch</h3>
            <p className="text-sm text-zinc-600 mb-4">Needed custom dashboards, billing integration, user management. Built with Laravel + Livewire. Launched in 6 weeks instead of 6 months.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">Custom development</span>
              <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">Laravel</span>
              <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">API integration</span>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="text-sm font-semibold text-orange-600 mb-2">Professional Services</div>
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Emails going to spam. Fixed infrastructure.</h3>
            <p className="text-sm text-zinc-600 mb-4">Set up proper DNS records, configured SendGrid correctly, built email warming process. Delivery rate went from 60% to 98%.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full">Email deliverability</span>
              <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full">DNS config</span>
              <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full">Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

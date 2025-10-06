import React, { useState } from "react";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type ContactState = "idle" | "submitting" | "success" | "error";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  project: string;
  timeline: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  company: "",
  project: "",
  timeline: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    if (!formData.name || !formData.email || !formData.project) {
      setErrorMessage("Name, email, and project summary are required.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.message ?? "Something went wrong. Try again.");
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send message right now."
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Tell me about the problem</h2>
          <p className="mt-4 text-lg text-blue-200">
            You’ll hear back within one business day with next steps. No pushy sales call, just an honest assessment.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-blue-500/30 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">What to include</p>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
                <span className="block text-xs font-semibold uppercase tracking-widest text-blue-200">1. Symptoms</span>
                <span className="mt-1 block text-base text-white">What’s breaking, slow, or costing you money right now?</span>
              </li>
              <li className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
                <span className="block text-xs font-semibold uppercase tracking-widest text-blue-200">2. Impact</span>
                <span className="mt-1 block text-base text-white">How is this affecting revenue, leads, or customer trust?</span>
              </li>
              <li className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
                <span className="block text-xs font-semibold uppercase tracking-widest text-blue-200">3. Timeline</span>
                <span className="mt-1 block text-base text-white">What’s your launch window or critical deadline?</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-100">
              Prefer email? <a href="mailto:letmegoblind@gmail.com" className="font-semibold text-white underline underline-offset-4">letmegoblind@gmail.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-blue-500/40 bg-white/10 p-8 shadow-xl shadow-blue-950/30 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-blue-500/40 bg-blue-900/30 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-blue-500/40 bg-blue-900/30 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Company / Website
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-blue-500/40 bg-blue-900/30 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                What do you need help with? *
              </label>
              <textarea
                id="project"
                name="project"
                required
                value={formData.project}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full rounded-xl border border-blue-500/40 bg-blue-900/30 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                placeholder="Slow checkout, no deliverability visibility, missing lead attribution..."
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Desired launch or deadline
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                value={formData.timeline}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-blue-500/40 bg-blue-900/30 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                placeholder="In production by end of May"
              />
            </div>

            {status === "error" && errorMessage && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                <AlertCircle className="h-4 w-4" />
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                Thanks! I’ll review and reach out shortly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <p className="text-xs text-blue-200/70">
              You’re not opting into anything. I only use this info to prep for our call and keep your project moving.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

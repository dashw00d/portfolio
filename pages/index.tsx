import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Services from "../components/Services";
import Process from "../components/Process";
import Examples from "../components/Examples";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fix Your Tech Problems - Business-Focused Developer</title>
        <meta name="description" content="I fix the tech problems that cost you customers. Slow sites, email deliverability, lead tracking, SEO. Laravel, Tailwind, modern tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web developer, Laravel, SEO, email deliverability, lead tracking, business websites" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Fix Your Tech Problems - Business-Focused Developer" />
        <meta property="og:description" content="I solve tech problems that cost businesses customers. Performance, email, SEO, and custom development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-zinc-50 via-brand-50/20 to-white text-zinc-900">
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Examples />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

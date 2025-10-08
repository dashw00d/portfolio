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
        <title>Fix Your Tech Problems - Business-Focused Developer | Ryan Stefan</title>
        <meta name="description" content="I fix the tech problems that cost you customers. Slow sites, email deliverability, lead tracking, SEO. Laravel, Tailwind, modern tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web developer, Laravel, SEO, email deliverability, lead tracking, business websites, Ryan Stefan, dashwood" />
        <meta name="author" content="Ryan Stefan" />

        {/* Open Graph */}
        <meta property="og:title" content="Fix Your Tech Problems - Business-Focused Developer" />
        <meta property="og:description" content="I solve tech problems that cost businesses customers. Performance, email, SEO, and custom development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashwood.net" />
        <meta property="og:site_name" content="Ryan Stefan - Dashwood" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fix Your Tech Problems - Business-Focused Developer" />
        <meta name="twitter:description" content="I solve tech problems that cost businesses customers. Performance, email, SEO, and custom development." />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dashwood.net" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Dashwood - Ryan Stefan",
              "description": "Business-focused web development solving technical problems that cost you customers.",
              "url": "https://dashwood.net",
              "telephone": "(737) 205-9226",
              "email": "ryan@dashwood.net",
              "founder": {
                "@type": "Person",
                "name": "Ryan Stefan",
                "jobTitle": "Web Developer",
                "email": "ryan@dashwood.net"
              },
              "areaServed": "Worldwide",
              "serviceType": ["Web Development", "SEO Optimization", "Email Deliverability", "Performance Optimization"]
            })
          }}
        />
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

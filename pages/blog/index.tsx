import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, BlogPostMeta } from "@/lib/blog";
import { GetStaticProps } from "next";

interface BlogPageProps {
  posts: BlogPostMeta[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Dev Blog - Ryan Stefan | Daily Development Insights</title>
        <meta
          name="description"
          content="Daily development blog by Ryan Stefan. Practical solutions, architecture decisions, and code insights from real-world projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web development blog, programming blog, Next.js, Laravel, React, dev insights, Ryan Stefan"
        />
        <meta name="author" content="Ryan Stefan" />

        {/* Open Graph */}
        <meta property="og:title" content="Dev Blog - Ryan Stefan" />
        <meta
          property="og:description"
          content="Daily development insights, code solutions, and architecture decisions from real-world projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashwood.net/blog" />
        <meta property="og:site_name" content="Ryan Stefan - Dashwood" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dev Blog - Ryan Stefan" />
        <meta
          name="twitter:description"
          content="Daily development insights and practical code solutions."
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dashwood.net/blog" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Ryan Stefan Dev Blog",
              description:
                "Daily development blog covering web development, architecture decisions, and practical coding solutions.",
              url: "https://dashwood.net/blog",
              author: {
                "@type": "Person",
                name: "Ryan Stefan",
                jobTitle: "Web Developer",
                email: "ryan@dashwood.net",
                telephone: "(737) 205-9226",
              },
            }),
          }}
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-white via-brand-50/30 to-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-highlight-200/40 blur-3xl" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-brand-50/50 to-brand-50" />

          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 shadow-sm">
              Dev Blog
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Building in public
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600">
              Daily insights on web development, architecture decisions, and
              practical solutions from real-world projects. Code-heavy, no fluff.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="relative overflow-hidden px-6 pb-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-50 via-white to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(205,179,128,0.12),_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />

          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg text-zinc-600">
                No posts yet. Check back soon for daily dev insights.
              </p>
            </div>
          ) : (
            <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  tags={post.tags}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

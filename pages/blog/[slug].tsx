import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { getAllPostSlugs, getPostBySlug, BlogPost as BlogPostType } from "@/lib/blog";

interface BlogPostPageProps {
  post: BlogPostType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPostPage({ post, mdxSource }: BlogPostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Ryan Stefan</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta name="author" content={post.author} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://dashwood.net/blog/${post.slug}`} />
        <meta property="og:site_name" content="Ryan Stefan - Dashwood" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://dashwood.net/blog/${post.slug}`} />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: post.author,
                email: "ryan@dashwood.net",
              },
              keywords: post.tags.join(", "),
              url: `https://dashwood.net/blog/${post.slug}`,
            }),
          }}
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-white via-brand-50/20 to-white text-zinc-900 py-20">
        <BlogPost
          title={post.title}
          date={post.date}
          tags={post.tags}
          readingTime={post.readingTime}
        >
          <MDXRemote {...mdxSource} />
        </BlogPost>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      post,
      mdxSource,
    },
  };
};

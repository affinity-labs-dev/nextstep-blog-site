import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogFAQ from "@/components/BlogFAQ";
import { getPostContent } from "@/data/blogContent";
import { blogPosts, categorySlugMap } from "@/data/blogPosts";
import { getImageForCategory, getImageForSlug } from "@/data/blogImages";
import { getOgImageForCategory } from "@/data/ogImages";
import { blogFAQs } from "@/data/blogFAQs";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Redirect to standalone HTML page for the survey.
  // Uses <meta http-equiv="refresh"> so crawlers see the redirect in
  // prerendered HTML without needing JavaScript execution.
  if (slug === "consulting-survey-2025") {
    if (typeof window !== "undefined") {
      window.location.replace("/consulting-survey-2025.html");
    }
    return (
      <>
        <Helmet>
          <title>Redirecting to Consulting Survey 2025 | NextStep</title>
          <meta httpEquiv="refresh" content="0;url=/consulting-survey-2025.html" />
          <link rel="canonical" href="https://blog.getnextstep.com/consulting-survey-2025.html" />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <p>Redirecting&hellip;</p>
      </>
    );
  }
  
  const post = slug ? getPostContent(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  // Convert markdown-style content to HTML-like structure
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inList = false;

    const formatText = (text: string): string => {
      return text
        .replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="font-semibold text-foreground">$1</strong>'
        )
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          (_match, linkText, url) => {
            const isExternal = url.startsWith("http");
            if (isExternal) {
              return `<a href="${url}" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
            }
            return `<a href="${url}" class="text-primary hover:underline">${linkText}</a>`;
          }
        );
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.slice(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith("#### ")) {
        flushList();
        elements.push(
          <h4 key={index} className="text-lg font-semibold text-foreground mt-6 mb-2">
            {trimmedLine.slice(5)}
          </h4>
        );
      } else if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmedLine.slice(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground mb-2">
            {trimmedLine.slice(2, -2)}
          </p>
        );
      } else if (trimmedLine.startsWith("- ")) {
        inList = true;
        listItems.push(trimmedLine.slice(2));
      } else if (trimmedLine.match(/^\d+\.\s/)) {
        inList = true;
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ""));
      } else if (trimmedLine === "") {
        flushList();
      } else if (trimmedLine) {
        flushList();
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formatText(trimmedLine) }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  // Calculate word count for structured data
  const wordCount = post.content.split(/\s+/).filter(word => word.length > 0).length;
  
  // Get the article image URL
  const articleImage = `https://blog.getnextstep.com${getOgImageForCategory(post.category)}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: articleImage,
    author: {
      "@type": "Organization",
      "@id": "https://getnextstep.com/#organization",
      name: "NextStep",
      url: "https://getnextstep.com",
      logo: {
        "@type": "ImageObject",
        url: "https://blog.getnextstep.com/assets/nextstep-logo-updated.png?v=20260105",
      },
      sameAs: [
        "https://www.linkedin.com/company/getnextstep",
        "https://twitter.com/getnextstep",
      ],
    },
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    wordCount: wordCount,
    articleSection: post.category,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "NextStep",
      url: "https://getnextstep.com",
      logo: {
        "@type": "ImageObject",
        url: "https://blog.getnextstep.com/assets/nextstep-logo-updated.png?v=20260105",
        width: 189,
        height: 40,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blog.getnextstep.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleBody: post.content.replace(/[#*\-\[\]()]/g, '').replace(/\n+/g, ' ').slice(0, 3000).trim(),
    isPartOf: {
      "@type": "Blog",
      name: "NextStep Blog",
      url: "https://blog.getnextstep.com",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://blog.getnextstep.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.category,
        item: `https://blog.getnextstep.com/blog/category/${categorySlugMap[post.category] || post.category.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://blog.getnextstep.com/blog/${post.slug}`,
      },
    ],
  };

  const faqs = blogFAQs[post.slug] || [];
  
  const faqStructuredData = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>{`${post.title.length > 65 ? post.title.slice(0, 62) + '...' : post.title} | NextStep`}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://blog.getnextstep.com/blog/${post.slug}`} />
        <link rel="alternate" hreflang="en" href={`https://blog.getnextstep.com/blog/${post.slug}`} />
        <meta name="author" content={post.author} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://blog.getnextstep.com/blog/${post.slug}`} />
        <meta property="og:site_name" content="NextStep Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={articleImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={`${post.title} - ${post.category}`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.modifiedDate} />
        <meta property="article:section" content={post.category} />
        <meta property="article:author" content={post.author} />
        {post.keywords.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getnextstep" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={articleImage} />
        <meta name="twitter:image:alt" content={`${post.title} - ${post.category}`} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        {faqStructuredData && (
          <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Breadcrumb */}
          <nav className="max-w-4xl mx-auto px-4 py-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
              <li>
                <Link to="/" className="inline-link py-2 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to={`/blog/category/${categorySlugMap[post.category] || post.category.toLowerCase()}`} className="inline-link py-2 hover:text-primary transition-colors">
                  {post.category}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground truncate max-w-[300px] py-2" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto px-4 pb-8">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:underline py-2 min-h-[48px]"
              >
                <ArrowLeft size={18} />
                <span className="text-base">Back to all articles</span>
              </Link>

              <Link to={`/blog/category/${categorySlugMap[post.category] || post.category.toLowerCase()}`} className="inline-link text-base font-medium text-primary bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors">
                {post.category}
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-4 pb-8">
            {(() => {
              const heroImg = getImageForSlug(slug!) || getImageForCategory(post.category);
              return (
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${heroImg.smWebp} 400w, ${heroImg.webp} 800w`}
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <source
                    type="image/jpeg"
                    srcSet={`${heroImg.smJpg} 400w, ${heroImg.jpg} 800w`}
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <img
                    src={heroImg.jpg}
                    alt={`Featured image for ${post.title} - ${post.category} article`}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl"
                    width={896}
                    height={384}
                    decoding="async"
                    fetchpriority="high"
                  />
                </picture>
              );
            })()}
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto px-4 pb-16">
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Share Section */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-muted-foreground text-base">Found this helpful? Share it with your network.</p>
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      url: window.location.href,
                    });
                  }}
                  className="inline-flex items-center gap-2 text-primary hover:underline py-3 px-4 min-h-[48px] -ml-4 sm:ml-0"
                >
                  <Share2 size={18} />
                  <span className="text-base">Share</span>
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <BlogFAQ faqs={faqs} />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="bg-muted/30 py-16">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} {...relatedPost} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Join thousands of consultants who've found their dream roles through NextStep. Get curated opportunities delivered to your inbox.
              </h2>
              <a
                href="https://getnextstep.com/auth/choose-type"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 min-h-[48px] rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;

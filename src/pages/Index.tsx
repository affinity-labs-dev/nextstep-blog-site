import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import BlogCTA from "@/components/BlogCTA";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { getOgImageForCategory } from "@/data/ogImages";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NextStep Blog | Career Advice for Ex-Consultants</title>
        <meta
          name="description"
          content="Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni."
        />
        <meta name="keywords" content="consulting exit opportunities, ex-consultant careers, McKinsey alumni jobs, BCG career transition, Bain exit strategy, management consulting to tech, consulting to private equity" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://blog.getnextstep.com" />
        <link rel="alternate" hreflang="en" href="https://blog.getnextstep.com" />

        {/* Open Graph */}
        <meta property="og:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta property="og:description" content="Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.getnextstep.com" />
        <meta property="og:site_name" content="NextStep Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://blog.getnextstep.com/og-homepage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="NextStep Blog - Career advice for ex-consultants from McKinsey, BCG, and Bain" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getnextstep" />
        <meta name="twitter:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta name="twitter:description" content="Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni." />
        <meta name="twitter:image" content="https://blog.getnextstep.com/og-homepage.jpg" />
        <meta name="twitter:image:alt" content="NextStep Blog - Career advice for ex-consultants from McKinsey, BCG, and Bain" />

        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://getnextstep.com/#organization",
            "name": "NextStep",
            "description": "NextStep is a career platform helping ex-consultants from McKinsey, BCG, and Bain transition to industry roles in tech, private equity, and corporate strategy.",
            "url": "https://getnextstep.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://blog.getnextstep.com/assets/nextstep-logo-updated.png?v=20260105",
              "width": 189,
              "height": 40
            },
            "sameAs": [
              "https://www.linkedin.com/company/getnextstep",
              "https://twitter.com/getnextstep"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://getnextstep.com"
            },
            "foundingDate": "2025"
          })}
        </script>

        {/* Structured Data: WebSite with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NextStep Blog",
            "url": "https://blog.getnextstep.com",
            "description": "Career advice and insights for consultants transitioning to industry roles",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "NextStep",
              "url": "https://getnextstep.com"
            }
          })}
        </script>

        {/* Structured Data: Blog with blogPost references */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "NextStep Blog",
            "description": "Career advice and insights for consultants transitioning to industry roles",
            "url": "https://blog.getnextstep.com",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "NextStep",
              "url": "https://getnextstep.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.getnextstep.com/assets/nextstep-logo-updated.png?v=20260105"
              }
            },
            "blogPost": blogPosts
              .filter(p => p.slug !== "consulting-survey-2025")
              .map(p => ({
                "@type": "BlogPosting",
                "headline": p.title,
                "url": `https://blog.getnextstep.com/blog/${p.slug}`,
                "description": p.excerpt,
                "image": `https://blog.getnextstep.com${getOgImageForCategory(p.category)}`,
                "author": {
                  "@type": "Organization",
                  "@id": "https://getnextstep.com/#organization",
                  "name": "NextStep"
                }
              }))
          })}
        </script>

        {/* Structured Data: CollectionPage + ItemList for blog listing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "NextStep Blog | Career Advice for Ex-Consultants",
            "description": "Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni.",
            "url": "https://blog.getnextstep.com",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": blogPosts
                .filter(p => p.slug !== "consulting-survey-2025")
                .map((p, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "url": `https://blog.getnextstep.com/blog/${p.slug}`,
                  "name": p.title
                }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <BlogHero />
          <BlogGrid />
          <BlogCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

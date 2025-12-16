import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import BlogCTA from "@/components/BlogCTA";
import Footer from "@/components/Footer";

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
        <link rel="canonical" href="https://blog.getnextstep.com" />
        
        <meta property="og:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta property="og:description" content="Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.getnextstep.com" />
        <meta property="og:image" content="https://blog.getnextstep.com/og-homepage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta name="twitter:description" content="Discover expert career advice for ex-consultants. Exit opportunities, interview strategies, and success stories from McKinsey, BCG, and Bain alumni." />
        <meta name="twitter:image" content="https://blog.getnextstep.com/og-homepage.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NextStep",
            "description": "NextStep is a career platform helping ex-consultants from McKinsey, BCG, and Bain transition to industry roles in tech, private equity, and corporate strategy.",
            "url": "https://getnextstep.com",
            "logo": "https://blog.getnextstep.com/favicon.png",
            "sameAs": [
              "https://www.linkedin.com/company/getnextstep",
              "https://twitter.com/getnextstep"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://getnextstep.com"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "NextStep Blog",
            "description": "Career advice and insights for consultants transitioning to industry roles",
            "url": "https://blog.getnextstep.com",
            "publisher": {
              "@type": "Organization",
              "name": "NextStep",
              "url": "https://getnextstep.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.getnextstep.com/favicon.png"
              }
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

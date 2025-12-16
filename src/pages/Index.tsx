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
        <title>NextStep Blog | Career Advice for Ex-Consultants | Exit Opportunities</title>
        <meta 
          name="description" 
          content="Expert career insights for consultants transitioning to industry roles. Discover exit opportunities, interview tips, salary guides, and success stories from McKinsey, BCG, and Bain alumni." 
        />
        <meta name="keywords" content="consulting exit opportunities, ex-consultant careers, McKinsey alumni jobs, BCG career transition, Bain exit strategy, management consulting to tech, consulting to private equity" />
        <link rel="canonical" href="https://getnextstep.com/blog" />
        
        <meta property="og:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta property="og:description" content="Expert career insights for consultants transitioning to industry roles. Exit opportunities, interview tips, and success stories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getnextstep.com/blog" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NextStep Blog | Career Advice for Ex-Consultants" />
        <meta name="twitter:description" content="Expert career insights for consultants transitioning to industry roles." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "NextStep Blog",
            "description": "Career advice and insights for consultants transitioning to industry roles",
            "url": "https://getnextstep.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "NextStep",
              "url": "https://getnextstep.com"
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

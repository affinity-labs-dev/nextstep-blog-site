import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts, slugToCategoryMap, categorySlugMap } from "@/data/blogPosts";
import { getOgImageForCategory } from "@/data/ogImages";

const categoryDescriptions: Record<string, string> = {
  "Career Transitions": "Expert guides on transitioning from management consulting to industry roles. Discover exit opportunities, plan your career move, and learn from those who've successfully made the leap.",
  "Tech Careers": "How to break into tech from consulting. Product management, strategy, and operations roles at top companies like Google, Meta, Amazon, and high-growth startups.",
  "Interview Prep": "Insider tips on acing consulting case interviews and industry interviews. Frameworks, practice strategies, and advice from ex-MBB interviewers.",
  "Private Equity": "Everything you need to know about transitioning from consulting to private equity. Recruiting timelines, skill development, and interview preparation.",
  "Work-Life Balance": "Real stories and practical advice on finding work-life balance after consulting. Explore roles that offer intellectual challenge without the burnout.",
  "Compensation": "Salary benchmarks, negotiation tactics, and compensation guides for ex-consultants moving to tech, PE, startups, and corporate roles.",
  "Career Decisions": "Frameworks for making major career decisions after consulting. Startup vs. corporate, industry choice, and timing your exit.",
  "Networking": "Networking strategies designed for consultants and career changers. Build relationships that open doors without cold outreach fatigue.",
  "Success Stories": "Inspiring career journeys from alumni of McKinsey, BCG, Bain, and other top consulting firms. See where they are now and how they got there.",
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = slug ? slugToCategoryMap[slug] : undefined;

  if (!categoryName) {
    return <Navigate to="/" replace />;
  }

  const posts = blogPosts.filter(
    (p) => p.category === categoryName && p.slug !== "consulting-survey-2025"
  );

  const description = categoryDescriptions[categoryName] || `Articles about ${categoryName} for ex-consultants.`;
  const canonicalUrl = `https://blog.getnextstep.com/blog/category/${slug}`;
  const ogImage = `https://blog.getnextstep.com${getOgImageForCategory(categoryName)}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} - NextStep Blog`,
    description,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://blog.getnextstep.com/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blog.getnextstep.com" },
      { "@type": "ListItem", position: 2, name: categoryName, item: canonicalUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${categoryName} Articles | NextStep Blog`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="en" href={canonicalUrl} />

        <meta property="og:title" content={`${categoryName} Articles | NextStep Blog`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="NextStep Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getnextstep" />
        <meta name="twitter:title" content={`${categoryName} Articles | NextStep Blog`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <nav className="max-w-7xl mx-auto px-4 py-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-base text-muted-foreground">
              <li>
                <Link to="/" className="inline-link py-2 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground py-2" aria-current="page">{categoryName}</li>
            </ol>
          </nav>

          <header className="max-w-7xl mx-auto px-4 pb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {description}
            </p>
          </header>

          <section className="max-w-7xl mx-auto px-4 pb-16">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No articles in this category yet.</p>
            )}
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Explore more career advice for ex-consultants
              </h2>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 min-h-[48px] rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                View All Articles
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;

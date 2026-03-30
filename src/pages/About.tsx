import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About NextStep",
    url: "https://blog.getnextstep.com/about",
    description: "NextStep is an AI-powered career platform connecting ex-consultants from McKinsey, BCG, and Bain with strategic business roles. Founded in 2025 by Ahmed E., a former top-tier management consultant.",
    publisher: {
      "@type": "Organization",
      "@id": "https://getnextstep.com/#organization",
      name: "NextStep",
      url: "https://getnextstep.com",
      foundingDate: "2025",
    },
  };

  return (
    <>
      <Helmet>
        <title>About NextStep | Career Platform for Ex-Consultants</title>
        <meta name="description" content="NextStep is an AI-powered career platform connecting ex-consultants from McKinsey, BCG, and Bain with strategic business roles. Learn about our mission, team, and editorial approach." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://blog.getnextstep.com/about" />
        <meta property="og:title" content="About NextStep | Career Platform for Ex-Consultants" />
        <meta property="og:description" content="NextStep connects ex-consultants with strategic roles. Learn about our mission, team, and how the platform works." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.getnextstep.com/about" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <div className="max-w-3xl mx-auto px-4 py-16">

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About NextStep</h1>

            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NextStep exists to fix the broken process of connecting consulting talent with the right strategic roles. Too many ex-consultants spend months navigating job boards, cold outreach, and opaque recruiting pipelines — while companies miss out on exceptional talent because they can't filter the signal from the noise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built an AI-powered platform that matches ex-consultants from McKinsey, BCG, Bain, and other top firms with strategy, operations, product, and leadership roles at companies that actually value their background. It's free for both sides.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">How It Works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <span><strong className="text-foreground">For candidates:</strong> Set your background and preferences once. Receive a curated shortlist of matched roles every week — no applications, no spam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <span><strong className="text-foreground">For companies:</strong> Post a role and receive a vetted shortlist of best-match candidates within days, without sifting through hundreds of unqualified applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <span><strong className="text-foreground">AI matching:</strong> We use semantic understanding of business context — not keyword matching — to connect people with roles that actually fit.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Who We Are</h2>
              <div className="border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground text-lg">Ahmed E.</p>
                <p className="text-sm text-primary mb-3">Co-Founder, NextStep</p>
                <p className="text-muted-foreground leading-relaxed">
                  Ahmed spent 6+ years at a top-tier management consulting firm advising companies on strategy, operations, and organizational change across multiple industries. After experiencing firsthand how difficult the consulting exit process can be — and watching talented colleagues struggle to find roles that matched their skills — he founded NextStep to build a better path. The blog reflects the career advice he wishes he'd had.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Editorial Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every article on this blog is written or reviewed by people with direct experience in management consulting and career transitions. We aim to provide specific, actionable guidance — not generic career advice.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are transparent about our commercial relationship: NextStep operates a career platform that connects ex-consultants with strategic roles. The blog exists to provide genuine value to the consulting community. We do not recommend specific companies or services in exchange for payment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you spot an error, have a story to share, or want to contribute, reach out at{" "}
                <a href="mailto:zero@mail.getnextstep.com" className="text-primary hover:underline">zero@mail.getnextstep.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Get Started</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://getnextstep.com/auth/choose-type"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 min-h-[48px] rounded-full text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Join NextStep — It's Free
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-4 min-h-[48px] rounded-full text-base font-medium hover:bg-muted transition-colors"
                >
                  Browse the Blog
                </Link>
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;

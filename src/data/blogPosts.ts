export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "consulting-exit-opportunities-2026",
    title: "Top Exit Opportunities for Consultants in 2026: A Complete Guide",
    excerpt: "Explore the most lucrative and fulfilling career paths for ex-consultants, from private equity to tech startups. Learn which industries are actively recruiting consulting talent and how to position yourself for success.",
    category: "Career Transitions",
    readTime: "8 min read",
    date: "Dec 15, 2025",
    featured: true
  },
  {
    slug: "mckinsey-to-tech-transition",
    title: "From McKinsey to Tech: How to Land a Product Manager Role",
    excerpt: "A step-by-step guide for transitioning from management consulting to product management in top tech companies like Google, Meta, and fast-growing startups.",
    category: "Tech Careers",
    readTime: "6 min read",
    date: "Dec 12, 2025"
  },
  {
    slug: "consulting-interview-case-study-tips",
    title: "Mastering Case Interviews: Strategies from Ex-BCG Consultants",
    excerpt: "Insider tips on acing consulting case interviews from professionals who have conducted hundreds of interviews at top firms.",
    category: "Interview Prep",
    readTime: "10 min read",
    date: "Dec 10, 2025"
  },
  {
    slug: "private-equity-consulting-background",
    title: "Breaking Into Private Equity with a Consulting Background",
    excerpt: "How your consulting experience positions you uniquely for PE roles, and what additional skills you need to make the transition successfully.",
    category: "Private Equity",
    readTime: "7 min read",
    date: "Dec 8, 2025"
  },
  {
    slug: "work-life-balance-after-consulting",
    title: "Finding Work-Life Balance After Consulting: Real Stories",
    excerpt: "Ex-consultants share their experiences transitioning to roles with better work-life balance without sacrificing career growth or compensation.",
    category: "Work-Life Balance",
    readTime: "5 min read",
    date: "Dec 5, 2025"
  },
  {
    slug: "salary-negotiation-ex-consultants",
    title: "Salary Negotiation Tactics for Ex-Consultants",
    excerpt: "Leverage your consulting background to negotiate top-tier compensation packages. Includes benchmarks and scripts for common negotiation scenarios.",
    category: "Compensation",
    readTime: "6 min read",
    date: "Dec 3, 2025"
  },
  {
    slug: "startup-vs-corporate-ex-consultant",
    title: "Startup vs. Corporate: Which Path Is Right for You?",
    excerpt: "Analyze the pros and cons of joining a startup versus a large corporation after consulting, with insights from those who've done both.",
    category: "Career Decisions",
    readTime: "8 min read",
    date: "Nov 30, 2025"
  },
  {
    slug: "networking-strategies-career-change",
    title: "Networking Strategies That Actually Work for Career Changers",
    excerpt: "Effective networking techniques specifically designed for consultants looking to break into new industries without cold outreach fatigue.",
    category: "Networking",
    readTime: "5 min read",
    date: "Nov 28, 2025"
  },
  {
    slug: "bain-alumni-success-stories",
    title: "Where Are They Now? Inspiring Bain Alumni Career Journeys",
    excerpt: "Follow the career trajectories of Bain alumni who've successfully transitioned into diverse roles from venture capital to founding their own companies.",
    category: "Success Stories",
    readTime: "7 min read",
    date: "Nov 25, 2025"
  }
];

export const categories = [
  "All",
  "Career Transitions",
  "Tech Careers",
  "Interview Prep",
  "Private Equity",
  "Work-Life Balance",
  "Compensation",
  "Career Decisions",
  "Networking",
  "Success Stories"
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  publishDate?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bcg-alumni-career-paths",
    title: "BCG Alumni Career Paths: Where Are They Now?",
    excerpt: "Real career trajectories of BCG alumni who built successful paths in private equity, tech leadership, startups, and corporate roles — with lessons and advice from each.",
    category: "Success Stories",
    readTime: "8 min read",
    date: "Mar 30, 2026",
    publishDate: "2026-03-30",
    featured: true
  },
  {
    slug: "consulting-to-chief-of-staff",
    title: "Consulting to Chief of Staff: The Complete Career Guide",
    excerpt: "Why ex-consultants make strong Chiefs of Staff, what the role actually involves, where to find openings, how to position yourself in interviews, and what career paths open up from CoS.",
    category: "Career Transitions",
    readTime: "8 min read",
    date: "Mar 27, 2026",
    publishDate: "2026-03-27"
  },
  {
    slug: "ex-consultant-resume",
    title: "How to Write an Ex-Consultant Resume That Gets Interviews",
    excerpt: "A step-by-step guide to writing a resume that translates your consulting experience for PE, tech, corporate strategy, and startup roles — with bullet formulas, tailoring tips, and a pre-submit checklist.",
    category: "Career Transitions",
    readTime: "7 min read",
    date: "Mar 25, 2026",
    publishDate: "2026-03-25"
  },
  {
    slug: "consulting-survey-2025",
    title: "Consulting Survey 2025: Pay, Travel, and Retention in a Shifting Industry",
    excerpt: "Our comprehensive survey of 1,000+ consultants reveals insights on compensation, travel policies, work-life balance, and what's driving attrition in the consulting industry.",
    category: "Career Transitions",
    readTime: "15 min read",
    date: "Jan 5, 2026",
    publishDate: "2026-01-05",
    featured: true
  },
  {
    slug: "consulting-exit-opportunities-2026",
    title: "Top Exit Opportunities for Consultants in 2026: A Complete Guide",
    excerpt: "Explore the most lucrative and fulfilling career paths for ex-consultants, from private equity to tech startups. Learn which industries are actively recruiting consulting talent and how to position yourself for success.",
    category: "Career Transitions",
    readTime: "8 min read",
    date: "Dec 15, 2025",
    publishDate: "2025-12-15",
    featured: true
  },
  {
    slug: "mckinsey-to-tech-transition",
    title: "From McKinsey to Tech: How to Land a Product Manager Role",
    excerpt: "A step-by-step guide for transitioning from management consulting to product management in top tech companies like Google, Meta, and fast-growing startups.",
    category: "Tech Careers",
    readTime: "6 min read",
    date: "Dec 12, 2025",
    publishDate: "2025-12-12"
  },
  {
    slug: "consulting-interview-case-study-tips",
    title: "Mastering Case Interviews: Strategies from Ex-BCG Consultants",
    excerpt: "Insider tips on acing consulting case interviews from professionals who have conducted hundreds of interviews at top firms.",
    category: "Interview Prep",
    readTime: "10 min read",
    date: "Dec 10, 2025",
    publishDate: "2025-12-10"
  },
  {
    slug: "private-equity-consulting-background",
    title: "Breaking Into Private Equity with a Consulting Background",
    excerpt: "How your consulting experience positions you uniquely for PE roles, and what additional skills you need to make the transition successfully.",
    category: "Private Equity",
    readTime: "7 min read",
    date: "Dec 8, 2025",
    publishDate: "2025-12-08"
  },
  {
    slug: "work-life-balance-after-consulting",
    title: "Finding Work-Life Balance After Consulting: Real Stories",
    excerpt: "Ex-consultants share their experiences transitioning to roles with better work-life balance without sacrificing career growth or compensation.",
    category: "Work-Life Balance",
    readTime: "5 min read",
    date: "Dec 5, 2025",
    publishDate: "2025-12-05"
  },
  {
    slug: "salary-negotiation-ex-consultants",
    title: "Salary Negotiation Tactics for Ex-Consultants",
    excerpt: "Leverage your consulting background to negotiate top-tier compensation packages. Includes benchmarks and scripts for common negotiation scenarios.",
    category: "Compensation",
    readTime: "6 min read",
    date: "Dec 3, 2025",
    publishDate: "2025-12-03"
  },
  {
    slug: "startup-vs-corporate-ex-consultant",
    title: "Startup vs. Corporate: Which Path Is Right for You?",
    excerpt: "Analyze the pros and cons of joining a startup versus a large corporation after consulting, with insights from those who've done both.",
    category: "Career Decisions",
    readTime: "8 min read",
    date: "Nov 30, 2025",
    publishDate: "2025-11-30"
  },
  {
    slug: "networking-strategies-career-change",
    title: "Networking Strategies That Actually Work for Career Changers",
    excerpt: "Effective networking techniques specifically designed for consultants looking to break into new industries without cold outreach fatigue.",
    category: "Networking",
    readTime: "5 min read",
    date: "Nov 28, 2025",
    publishDate: "2025-11-28"
  },
  {
    slug: "bain-alumni-success-stories",
    title: "Where Are They Now? Inspiring Bain Alumni Career Journeys",
    excerpt: "Follow the career trajectories of Bain alumni who've successfully transitioned into diverse roles from venture capital to founding their own companies.",
    category: "Success Stories",
    readTime: "7 min read",
    date: "Nov 25, 2025",
    publishDate: "2025-11-25"
  },
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

/** Map category display names to URL-safe slugs */
export const categorySlugMap: Record<string, string> = {
  "Career Transitions": "career-transitions",
  "Tech Careers": "tech-careers",
  "Interview Prep": "interview-prep",
  "Private Equity": "private-equity",
  "Work-Life Balance": "work-life-balance",
  "Compensation": "compensation",
  "Career Decisions": "career-decisions",
  "Networking": "networking",
  "Success Stories": "success-stories",
};

/** Reverse lookup: slug → display name */
export const slugToCategoryMap: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([name, slug]) => [slug, name])
);

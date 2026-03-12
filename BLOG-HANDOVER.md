# NextStep Blog — Writing & Publishing Guide

## Quick Start

To add a new blog post, tell Claude Code:

> "Add a new blog post about [topic]. The slug should be [slug], category is [category]."

Claude will handle the rest — editing the right files, building, and deploying.

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/affinity-labs-dev/nextstep-blog-site.git nextstep-blog
cd nextstep-blog
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open http://localhost:5173 to preview.

### 3. Deploy

Just push to `main`. GitHub Actions builds and deploys to https://blog.getnextstep.com automatically.

```bash
git add .
git commit -m "Add new blog post: [title]"
git push
```

---

## How Blog Posts Work

Each post lives in **4 data files** (no new page files needed — routing is automatic):

| File | What it does |
|------|-------------|
| `src/data/blogPosts.ts` | Post metadata (title, slug, category, date) — shown on cards |
| `src/data/blogContent.ts` | Full post content + SEO meta (keywords, description) |
| `src/data/blogFAQs.ts` | Optional FAQ section (generates rich snippets in Google) |
| `src/data/blogImages.ts` | Maps post/category to featured images |

---

## Step-by-Step: Adding a New Post

### Step 1: Add metadata in `blogPosts.ts`

Add an entry to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title Here",
  excerpt: "1-2 sentence teaser shown on blog cards and social shares.",
  category: "Career Transitions",   // pick from list below
  readTime: "7 min read",
  date: "Mar 15, 2026",             // display format
  publishDate: "2026-03-15",        // ISO format (for structured data)
}
```

### Step 2: Add content in `blogContent.ts`

Add a new entry to the `blogContent` object:

```typescript
"your-post-slug": {
  slug: "your-post-slug",
  title: "Your Post Title Here",
  metaDescription: "150-160 character description for Google search results. Include primary keyword.",
  keywords: [
    "primary keyword",
    "secondary keyword",
    "long-tail keyword variation",
    // aim for 8-10 keywords
  ],
  author: "NextStep Team",
  authorTitle: "Career Transition Experts",
  publishDate: "2026-03-15",
  modifiedDate: "2026-03-15",
  category: "Career Transitions",
  readTime: "7 min read",
  content: `
## First Section

Your content in **Markdown** format. Paragraphs separated by blank lines.

### Subsection

- Bullet points work
- So do [internal links](/blog/consulting-exit-opportunities-2026)
- And [external links](https://example.com)

## Second Section

More content here. Aim for **3-4 internal links** to other blog posts.
  `
}
```

### Step 3 (optional): Add FAQs in `blogFAQs.ts`

```typescript
"your-post-slug": [
  {
    question: "What are the best exit opportunities for consultants?",
    answer: "The top paths include private equity, tech product management, corporate strategy, and entrepreneurship."
  },
  // 3-5 FAQs recommended
]
```

### Step 4: Images

**If using an existing category** — no changes needed. The post automatically uses the category image.

**If adding a new category**, you need:
1. A featured image in `src/assets/blog/` (JPG, 800px+ wide)
2. A small variant (`-sm.jpg`, 400px wide)
3. Run `npm run optimize-images` to generate WebP versions
4. Add imports + mapping in `blogImages.ts`
5. Add an OG image (1200x630px JPG) in `public/` and map it in `ogImages.ts`

### Step 5: Build and deploy

```bash
npm run build    # verify it works locally
git add .
git commit -m "Add new blog post: Your Post Title"
git push         # auto-deploys via GitHub Actions
```

---

## Available Categories

Use one of these exact strings:

- `Career Transitions`
- `Tech Careers`
- `Interview Prep`
- `Private Equity`
- `Work-Life Balance`
- `Compensation`
- `Career Decisions`
- `Networking`
- `Success Stories`

To add a new category, also update `categories` and `categorySlugMap` in `blogPosts.ts`.

---

## SEO Checklist for Every Post

- [ ] **Meta description**: 150-160 characters, includes primary keyword
- [ ] **Keywords**: 8-10 per post, mix of short-tail and long-tail
- [ ] **Internal links**: 3-4 links to other blog posts (contextually relevant)
- [ ] **External links**: 1-2 authoritative sources (adds credibility)
- [ ] **Headings**: Use H2 for sections, H3 for subsections (don't skip levels)
- [ ] **First 100 words**: Include the primary keyword naturally
- [ ] **Content length**: 800+ words for depth (top posts are 1000-1500)
- [ ] **FAQs**: Add 3-5 if the topic lends itself to questions

---

## Content Formatting Reference

The `content` field uses Markdown:

```markdown
## H2 Section Heading

Regular paragraph text with **bold** and *italic*.

### H3 Subsection

- Bullet list item
- Another item with [a link](/blog/some-post)

1. Numbered list
2. Second item

> Blockquote for testimonials or callouts

**Bold label:** Description text pattern used throughout the blog.
```

---

## Existing Posts (for internal linking)

| Slug | Title |
|------|-------|
| `consulting-exit-opportunities-2026` | Top Exit Opportunities for Consultants in 2026 |
| `mckinsey-to-tech-transition` | From McKinsey to Tech: How to Land a PM Role |
| `consulting-interview-case-study-tips` | Mastering Case Interviews: Strategies from Ex-BCG |
| `private-equity-consulting-background` | Breaking Into Private Equity with Consulting Background |
| `work-life-balance-after-consulting` | Finding Work-Life Balance After Consulting |
| `salary-negotiation-ex-consultants` | Salary Negotiation Tactics for Ex-Consultants |
| `startup-vs-corporate-ex-consultant` | Startup vs. Corporate: Which Path Is Right? |
| `networking-strategies-career-change` | Networking Strategies That Actually Work |
| `bain-alumni-success-stories` | Inspiring Bain Alumni Career Journeys |

Link format: `[anchor text](/blog/slug-here)`

---

## Architecture Notes

- **Framework**: Vite + React + TypeScript + Tailwind CSS
- **SEO**: Static HTML prerendered at build time (crawlers see full content without JS)
- **Routing**: Automatic — new slugs in `blogPosts.ts` get routes + prerendered pages
- **Sitemap**: Auto-generated at build time from blog data
- **Structured data**: BlogPosting + BreadcrumbList + FAQPage schemas per post
- **Fonts**: Self-hosted (Libre Baskerville + Plus Jakarta Sans), no external CDN
- **Deploy**: GitHub Pages via GitHub Actions on push to `main`

---

## Troubleshooting

**Build fails?**
- Check that the slug matches exactly across `blogPosts.ts`, `blogContent.ts`, and `blogFAQs.ts`
- Make sure category name matches one in the `categories` array
- Ensure content template literals (backticks) aren't broken by unescaped backticks in content

**Post not showing?**
- Routes are auto-discovered from `blogPosts.ts` — just add the entry and rebuild
- No need to edit `prerender.js` or routing files

**Images broken?**
- If reusing an existing category, images work automatically
- If new category, check imports in `blogImages.ts` match actual file names

**Want to update an existing post?**
- Edit the content in `blogContent.ts`, update `modifiedDate`, push to `main`

/**
 * Static prerender script for SEO.
 *
 * Renders each route to static HTML at build time so that crawlers
 * (Googlebot, Bingbot, social media bots) see full content in the
 * initial HTML response without executing JavaScript.
 *
 * Usage: node scripts/prerender.js
 * Expects: vite build && vite build --ssr already completed
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverDir = path.resolve(__dirname, "../dist/server");

// Static routes (blog + category routes are discovered dynamically from data)
const staticRoutes = ["/", "/about", "/unsubscribe"];

/**
 * Strip static SEO tags from the HTML template <head>.
 * Helmet will provide per-page versions of these tags.
 * We keep structural tags: charset, viewport, preload, preconnect, fonts, favicon.
 */
function stripStaticSeoTags(html) {
  return html
    // Remove <title> tag
    .replace(/<title>[^<]*<\/title>\s*/g, "")
    // Remove SEO meta tags (description, author, keywords, robots, og:*, twitter:*)
    .replace(/<meta\s+name="(?:description|author|keywords|robots)"[^>]*>\s*/g, "")
    .replace(/<meta\s+property="(?:og|article):[^"]*"[^>]*>\s*/g, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/g, "")
    // Remove canonical and hreflang links
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "")
    .replace(/<link\s+rel="alternate"\s+hreflang[^>]*>\s*/g, "");
}

/**
 * Generate sitemap.xml from blog post data at build time.
 * Replaces the static public/sitemap.xml to prevent content drift.
 */
function generateSitemap(blogPosts, blogContent, categorySlugMap) {
  const SITE = "https://blog.getnextstep.com";
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { loc: SITE, lastmod: today },
    { loc: `${SITE}/about`, lastmod: today },
    { loc: `${SITE}/llm.html`, lastmod: "2025-12-16" },
    { loc: `${SITE}/consulting-survey-2025.html`, lastmod: "2026-01-05" },
  ];

  const categoryPages = Object.entries(categorySlugMap).map(([categoryName, slug]) => {
    const postsInCategory = blogPosts.filter(
      (p) => p.category === categoryName && p.slug !== "consulting-survey-2025"
    );
    const latestDate = postsInCategory.reduce((max, p) => {
      const d = blogContent[p.slug]?.modifiedDate || p.publishDate || today;
      return d > max ? d : max;
    }, "2000-01-01");
    return {
      loc: `${SITE}/category/${slug}`,
      lastmod: latestDate > "2000-01-01" ? latestDate : today,
    };
  });

  const blogPages = blogPosts
    .filter((p) => p.slug !== "consulting-survey-2025")
    .map((p) => {
      const content = blogContent[p.slug];
      return {
        loc: `${SITE}/${p.slug}`,
        lastmod: content?.modifiedDate || today,
      };
    });

  const urls = [...staticPages, ...categoryPages, ...blogPages];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`
    ),
    "</urlset>",
    "",
  ].join("\n");

  return xml;
}

async function prerender() {
  // Load the SSR entry module
  const ssrModule = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
  const { render, blogPosts, blogContent, categorySlugMap } = ssrModule;

  // Auto-discover routes from blog data
  const blogRoutes = blogPosts.map((p) => `/${p.slug}`);
  const categoryRoutes = Object.values(categorySlugMap).map(
    (slug) => `/category/${slug}`
  );
  const allRoutes = [...staticRoutes, ...blogRoutes, ...categoryRoutes];

  // Read the client-built index.html as a template
  const rawTemplate = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  // Strip static SEO tags — Helmet provides per-page versions
  const template = stripStaticSeoTags(rawTemplate);

  let successCount = 0;

  for (const route of allRoutes) {
    try {
      const { html, helmet } = render(route);

      // Build the helmet head tags string
      const helmetHead = [
        helmet.title?.toString() || "",
        helmet.meta?.toString() || "",
        helmet.link?.toString() || "",
        helmet.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n    ");

      // Inject rendered HTML into the root div
      let page = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject helmet head tags before </head>
      if (helmetHead) {
        page = page.replace("</head>", `    ${helmetHead}\n  </head>`);
      }

      // Determine output path
      let outputPath;
      if (route === "/") {
        outputPath = path.join(distDir, "index.html");
      } else {
        // /slug → dist/slug/index.html (for clean URLs)
        outputPath = path.join(distDir, route.slice(1), "index.html");
      }

      // Ensure directory exists
      const dir = path.dirname(outputPath);
      fs.mkdirSync(dir, { recursive: true });

      // Write the prerendered HTML
      fs.writeFileSync(outputPath, page);
      successCount++;
      console.log(`  ✓ ${route} → ${path.relative(distDir, outputPath)}`);
    } catch (err) {
      console.error(`  ✗ ${route} → ERROR: ${err.message}`);
    }
  }

  // Render 404 page for GitHub Pages SPA fallback
  try {
    const { html: notFoundHtml, helmet: notFoundHelmet } = render("/this-page-does-not-exist");
    const notFoundHead = [
      notFoundHelmet.title?.toString() || "",
      notFoundHelmet.meta?.toString() || "",
      notFoundHelmet.link?.toString() || "",
      notFoundHelmet.script?.toString() || "",
    ]
      .filter(Boolean)
      .join("\n    ");

    let notFoundPage = template.replace(
      '<div id="root"></div>',
      `<div id="root">${notFoundHtml}</div>`
    );
    if (notFoundHead) {
      notFoundPage = notFoundPage.replace("</head>", `    ${notFoundHead}\n  </head>`);
    }
    fs.writeFileSync(path.join(distDir, "404.html"), notFoundPage);
    console.log("  ✓ 404.html → 404.html");
  } catch (err) {
    console.error(`  ✗ 404.html → ERROR: ${err.message}`);
  }

  console.log(
    `\nPrerendered ${successCount}/${allRoutes.length} routes successfully.`
  );

  // Generate sitemap.xml from blog post data
  const sitemap = generateSitemap(blogPosts, blogContent, categorySlugMap);
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
  console.log("Generated sitemap.xml from blog post data.");

  // Clean up server build (not needed in production)
  fs.rmSync(serverDir, { recursive: true, force: true });
  console.log("Cleaned up server build artifacts.");
}

console.log("Prerendering static HTML for SEO...\n");
prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

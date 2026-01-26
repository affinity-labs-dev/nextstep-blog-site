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
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverDir = path.resolve(__dirname, "../dist/server");

// All routes to prerender (excluding consulting-survey-2025 which redirects to static HTML)
const routes = [
  "/",
  "/blog/consulting-exit-opportunities-2026",
  "/blog/mckinsey-to-tech-transition",
  "/blog/consulting-interview-case-study-tips",
  "/blog/private-equity-consulting-background",
  "/blog/work-life-balance-after-consulting",
  "/blog/salary-negotiation-ex-consultants",
  "/blog/startup-vs-corporate-ex-consultant",
  "/blog/networking-strategies-career-change",
  "/blog/bain-alumni-success-stories",
  "/unsubscribe",
];

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

async function prerender() {
  // Load the SSR entry module
  const { render } = await import(path.join(serverDir, "entry-server.js"));

  // Read the client-built index.html as a template
  const rawTemplate = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  // Strip static SEO tags — Helmet provides per-page versions
  const template = stripStaticSeoTags(rawTemplate);

  let successCount = 0;

  for (const route of routes) {
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
        // /blog/slug → dist/blog/slug/index.html (for clean URLs)
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

  console.log(
    `\nPrerendered ${successCount}/${routes.length} routes successfully.`
  );

  // Clean up server build (not needed in production)
  fs.rmSync(serverDir, { recursive: true, force: true });
  console.log("Cleaned up server build artifacts.");
}

console.log("Prerendering static HTML for SEO...\n");
prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

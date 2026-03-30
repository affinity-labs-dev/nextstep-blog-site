import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached across all page navigations
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // UI primitives — large but rarely changes
          "vendor-ui": [
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
            "lucide-react",
          ],
          // Data fetching — separate from UI
          "vendor-query": ["@tanstack/react-query"],
          // Chart library — only needed on the survey page
          "vendor-charts": ["recharts"],
          // Date utilities
          "vendor-dates": ["date-fns"],
        },
      },
    },
  },
  // Bundle all dependencies into the SSR build to avoid CJS/ESM interop issues
  // during static prerendering (react-helmet-async, etc.)
  ssr: {
    noExternal: true,
  },
}));

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Unsubscribe from "./pages/Unsubscribe";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * AppRoutes contains all routes and providers except the router itself.
 * Shared between client (BrowserRouter) and server (StaticRouter) entry points.
 */
export const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/category/:slug" element={<CategoryPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;


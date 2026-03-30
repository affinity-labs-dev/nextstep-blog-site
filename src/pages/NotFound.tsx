import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | NextStep Blog</title>
        <meta name="description" content="This page doesn't exist. Return to NextStep Blog for expert career advice, consulting exit opportunities, and success stories from MBB alumni." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;

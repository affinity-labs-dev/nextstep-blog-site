import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
          NextStep Blog
        </span>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Career Insights for{" "}
          <span className="text-gradient">Consultants</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Expert advice on transitioning from consulting to industry roles. 
          Discover{" "}
          <Link to="/blog/consulting-interview-case-study-tips" className="text-primary hover:underline">
            case interview strategies
          </Link>
          ,{" "}
          <Link to="/blog/salary-negotiation-ex-consultants" className="text-primary hover:underline">
            salary negotiation tactics
          </Link>
          , and{" "}
          <Link to="/blog/bain-alumni-success-stories" className="text-primary hover:underline">
            success stories from top firm alumni
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default BlogHero;

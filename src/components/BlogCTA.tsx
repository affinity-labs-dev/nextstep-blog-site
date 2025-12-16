import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/50 rounded-3xl p-10 md:p-16 border border-border/50">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Make Your Next Move?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Join thousands of consultants who've found their dream roles through NextStep. 
          Get curated opportunities delivered to your inbox.
        </p>
        <Button size="lg" className="shadow-button" asChild>
          <a href="https://getnextstep.com/auth/candidate/sign-up" target="_blank" rel="noopener noreferrer">
            Get Started Free
            <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;

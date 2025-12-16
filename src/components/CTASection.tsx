import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to see roles that{" "}
              <span className="text-primary">actually fit?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Create your profile and start getting curated jobs.
            </p>
            <div className="mt-8">
              <Button variant="hero" size="xl">
                Sign up now
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://getnextstep.com/assets/manualtyping.png" 
              alt="Professional working on laptop"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
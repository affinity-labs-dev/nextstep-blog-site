import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        {/* Headline */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-3xl md:text-5xl text-muted-foreground font-light mb-2">
            Break out of
          </p>
          <h1 className="font-serif text-5xl md:text-8xl font-bold italic tracking-tight text-foreground">
            CONSULTING.
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Finding a role shouldn't feel like a full time job. Get curated set of roles that fit your experience, delivered to you.
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-foreground/80 italic max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          NextStep does the heavy lifting for you, from understanding your background to matching, screening, and surfacing the right opportunities.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl">
            Find my next role
          </Button>
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="mt-16 md:mt-24 relative">
        <div className="mx-auto max-w-4xl relative">
          <img 
            src="https://getnextstep.com/assets/hero.png" 
            alt="Professional looking through binoculars searching for opportunities"
            className="w-full h-auto animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Quote Card */}
          <div className="absolute right-0 md:right-4 bottom-4 md:bottom-16 bg-card rounded-xl p-4 md:p-6 shadow-card max-w-xs md:max-w-sm border border-border/50 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-sm md:text-base text-primary font-medium italic">
              "Even when you know what you're looking for, the right role isn't always easy to spot."
            </p>
          </div>
        </div>
      </div>

      {/* Value Prop */}
      <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <p className="text-muted-foreground text-base md:text-lg">
          We connect consultants with curated top-tier roles that match your experience, skills, and goals, so you apply less, interview more, and land your next job faster.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
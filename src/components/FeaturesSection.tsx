import { CheckCircle2, Brain, Filter, Eye } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Vetted companies, ready to hire",
    description: "We work with teams that value your experience and are actively hiring for business roles. Forget scrolling through endless portals. We'll give you opportunities that match what you're looking for."
  },
  {
    icon: Brain,
    title: "AI that understands your profile",
    description: "Share your background and preferences. We'll turn that into a structured profile and match you to roles where your goals, projects, outcomes, and stakeholder experience translate."
  },
  {
    icon: Filter,
    title: "Quality over quantity",
    description: "You won't see every job under the sun. Expect a short list of curated roles (not a feed of noise). We filter for relevance, timing, and fit, so what shows up deserves your attention."
  },
  {
    icon: Eye,
    title: "Let companies come to you",
    description: "Remain visible and relevant for the right roles. Don't just be the one who searches - be the one who gets found! Create your profile, let recruiters see you're available, and watch as the best opportunities come to you!"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://getnextstep.com/assets/accessbestsection.png" 
              alt="Access best-fit jobs illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Access the best-fit <span className="text-primary">JOBS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              From Startups to Scaleups and Fortune 500 to Finance and Private Equity, and many more.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
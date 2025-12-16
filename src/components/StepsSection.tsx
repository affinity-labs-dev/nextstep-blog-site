import { UserPlus, FileSearch, Calendar } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Create profile",
    description: "Upload your CV and tell us what you want next. We'll turn your preferences into relevant matches."
  },
  {
    number: "2",
    icon: FileSearch,
    title: "Review matches",
    description: "Get curated roles and jobs for ex-consultants that fit your experience and working style delivered straight to your inbox."
  },
  {
    number: "3",
    icon: Calendar,
    title: "Interview & Decide",
    description: "Get approached by companies, book interviews fast, and choose the offer that fits your goals. Less applying, more interviewing."
  }
];

const StepsSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Get Started In
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">3</span> simple steps
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            NextStep platform connects top consulting talent with premium opportunities through a streamlined process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border-2 border-primary/20 shadow-card mb-6 group-hover:border-primary/50 transition-colors">
                  <span className="text-4xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className="w-8 h-8 mx-auto text-primary/70" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
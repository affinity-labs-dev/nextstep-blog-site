import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Unsubscribe = () => {
  return (
    <>
      <Helmet>
        <title>Unsubscribed | NextStep</title>
        <meta name="description" content="You have been successfully unsubscribed from NextStep emails." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-lg">
            <div className="w-16 h-16 bg-[#C8E14B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#462299]" strokeWidth={2.5} />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              You've Been Unsubscribed
            </h1>
            
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              You have been successfully removed from our mailing list. We're sorry to see you go, but we respect your decision.
            </p>
            
            <Button asChild size="lg" className="bg-[#462299] hover:bg-[#5a2db8]">
              <a href="https://getnextstep.com">
                Visit NextStep
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <footer className="bg-[#462299] text-white py-10 px-6 text-center">
          <img 
            src="/assets/nextstep-logo-full.png" 
            alt="NextStep" 
            className="h-10 w-auto mx-auto mb-4"
          />
          <p className="text-sm opacity-85 max-w-md mx-auto">
            Helping consultants navigate their next career move with data, insight, and a sense of humor.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Unsubscribe;

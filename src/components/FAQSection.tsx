import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is NextStep for?",
    answer: "NextStep is designed for experienced consultants from top-tier firms who are looking to transition into industry roles, startups, private equity, or other exciting opportunities outside of traditional consulting."
  },
  {
    question: "Do you only match consultants to consulting roles?",
    answer: "No! While we specialize in understanding consulting backgrounds, we match you with a wide variety of roles including corporate strategy, operations, product management, venture capital, private equity, and leadership positions at startups and established companies."
  },
  {
    question: "Can I try NextStep for free?",
    answer: "Yes, creating a profile and receiving job matches is completely free for candidates. We're compensated by companies when they successfully hire through our platform."
  },
  {
    question: "How long does it take to set up and start using NextStep?",
    answer: "Setting up your profile takes about 10-15 minutes. Once complete, you'll start receiving curated job matches within 24-48 hours based on your preferences and background."
  },
  {
    question: "When will I see relevant opportunities?",
    answer: "Most candidates see their first matched opportunities within 1-2 days of completing their profile. The quality and frequency of matches depends on your experience level and preferences."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 text-center">
          FAQ
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-border/50"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
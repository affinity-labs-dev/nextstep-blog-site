const logos = [
  { name: "McKinsey", url: "https://getnextstep.com/assets/logos/Mckinsey.png" },
  { name: "BCG", url: "https://getnextstep.com/assets/logos/BCG.png" },
  { name: "Bain", url: "https://getnextstep.com/assets/logos/Bain.png" },
  { name: "Deloitte", url: "https://getnextstep.com/assets/logos/deloitte.png" },
  { name: "AlixPartners", url: "https://getnextstep.com/assets/logos/alixpartners.png" },
  { name: "Capgemini", url: "https://getnextstep.com/assets/logos/capgemini.png" },
  { name: "Oliver Wyman", url: "https://getnextstep.com/assets/logos/oliver.png" },
  { name: "Kearney", url: "https://getnextstep.com/assets/logos/kearney.png" },
  { name: "BearingPoint", url: "https://getnextstep.com/assets/logos/bearingpoint.png" },
  { name: "FTI Consulting", url: "https://getnextstep.com/assets/logos/fticonsulting.png" },
  { name: "KPMG", url: "https://getnextstep.com/assets/logos/kpmg.png" },
  { name: "Strategy&", url: "https://getnextstep.com/assets/logos/strategy.png" },
];

const LogoCarousel = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <h2 className="text-lg md:text-xl text-muted-foreground">
          We've helped consultants from these firms find their <span className="text-primary font-semibold">NextStep</span>
        </h2>
      </div>

      {/* Infinite Scroll Logos */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center h-12 md:h-16"
            >
              <img 
                src={logo.url} 
                alt={logo.name}
                className="h-8 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">and many more.</p>
    </section>
  );
};

export default LogoCarousel;
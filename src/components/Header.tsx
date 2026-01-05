import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nextstep-logo-updated.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4">
      <nav className="mx-auto max-w-6xl" aria-label="Main navigation">
        <div className="flex items-center justify-between rounded-full bg-card/80 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 shadow-soft border border-border/50">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={`${logo}?v=20260105`}
              alt="NextStep - Career platform for ex-consultants" 
              className="h-8 md:h-10 w-auto" 
              width={189} 
              height={40}
              decoding="async"
              fetchPriority="high"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="https://getnextstep.com/auth/choose-type" target="_blank" rel="noopener noreferrer">
                Sign in
              </a>
            </Button>
            
            <Button variant="outline" size="sm" asChild>
              <a href="https://getnextstep.com/auth/candidate/sign-up" target="_blank" rel="noopener noreferrer">
                I'm a Candidate
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a href="https://getnextstep.com/auth/company/sign-up" target="_blank" rel="noopener noreferrer">
                I'm Hiring
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-md p-4 shadow-soft border border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start h-12 text-base" asChild>
                <a href="https://getnextstep.com/auth/choose-type" target="_blank" rel="noopener noreferrer">Sign in</a>
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-base" asChild>
                <a href="https://getnextstep.com/auth/candidate/sign-up" target="_blank" rel="noopener noreferrer">I'm a Candidate</a>
              </Button>
              <Button variant="outline" className="h-12 text-base" asChild>
                <a href="https://getnextstep.com/auth/company/sign-up" target="_blank" rel="noopener noreferrer">I'm Hiring</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
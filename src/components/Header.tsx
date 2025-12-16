import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nextstep-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full bg-card/80 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 shadow-soft border border-border/50">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="NextStep" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign in
            </Button>
            
            <Button variant="outline" size="sm">
              I'm a Candidate
            </Button>

            <Button variant="outline" size="sm">
              I'm Hiring
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-md p-4 shadow-soft border border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-start">Sign in</Button>
              <Button variant="ghost" className="justify-start">I'm a Candidate</Button>
              <Button variant="outline">I'm Hiring</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
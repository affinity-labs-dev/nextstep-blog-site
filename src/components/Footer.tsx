import { Link } from "react-router-dom";
const LOGO_WEBP = "/assets/nextstep-logo.webp";
const LOGO_PNG = "/assets/nextstep-logo-updated.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <picture>
              <source srcSet={LOGO_WEBP} type="image/webp" />
              <img
                src={LOGO_PNG}
                alt="NextStep logo - Return to homepage"
                className="h-8 w-auto"
                width={151}
                height={32}
                decoding="async"
              />
            </picture>
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Link
              to="/about"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/mckinsey-to-tech-transition"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Consulting to Tech Guide
            </Link>
            <Link 
              to="/private-equity-consulting-background" 
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Private Equity Careers
            </Link>
            <a 
              href="https://getnextstep.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://getnextstep.com/terms/candidate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} NextStep. All rights reserved. · <a href="mailto:zero@mail.getnextstep.com" className="hover:text-foreground transition-colors">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
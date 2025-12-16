import { Link } from "react-router-dom";
import logo from "@/assets/nextstep-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NextStep" className="h-8 w-auto" width={151} height={32} />
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/blog/mckinsey-to-tech-transition" className="hover:text-foreground transition-colors">
              Consulting to Tech Guide
            </Link>
            <Link to="/blog/private-equity-consulting-background" className="hover:text-foreground transition-colors">
              Private Equity Careers
            </Link>
            <a href="https://getnextstep.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="https://getnextstep.com/terms/candidate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Service</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NextStep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
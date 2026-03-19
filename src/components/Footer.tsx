import { Link } from "react-router-dom";
import logo from "@/assets/nextstep-logo-updated.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <img 
              src={`${logo}?v=20260105`}
              alt="NextStep logo - Return to homepage" 
              className="h-8 w-auto" 
              width={151} 
              height={32}
              decoding="async"
            />
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Link
              to="/blog/consulting-exit-opportunities-2026"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Exit Opportunities
            </Link>
            <Link
              to="/blog/mckinsey-to-tech-transition"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Consulting to Tech
            </Link>
            <Link
              to="/blog/private-equity-consulting-background"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Private Equity Careers
            </Link>
            <Link
              to="/blog/salary-negotiation-ex-consultants"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Salary Negotiation
            </Link>
            <Link
              to="/blog/consulting-interview-case-study-tips"
              className="inline-link px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Interview Tips
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
            © {new Date().getFullYear()} NextStep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
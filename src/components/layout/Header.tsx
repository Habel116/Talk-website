import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Kezdőlap" },
  { href: "/esemenyek", label: "Események" },
  { href: "/galeria", label: "Galéria" },
  { href: "/csapat", label: "Csapatunk" },
  { href: "/kuldetesunk", label: "Küldetésünk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const showTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        showTransparent
          ? "bg-foreground/70 backdrop-blur-sm"
          : "bg-card/95 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl sm:text-2xl font-semibold transition-colors",
              showTransparent
                ? "text-primary-foreground hover:text-primary-foreground/80"
                : "text-foreground hover:text-primary"
            )}
          >
            Találkozások Konferencia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-base font-medium transition-colors relative",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:origin-right after:transition-transform after:duration-300",
                  "hover:after:scale-x-100 hover:after:origin-left",
                  location.pathname === link.href
                    ? showTransparent
                      ? "text-primary-foreground font-semibold after:scale-x-100 after:bg-primary-foreground"
                      : "text-primary after:scale-x-100 after:bg-primary"
                    : showTransparent
                      ? "text-primary-foreground/80 hover:text-primary-foreground after:scale-x-0 after:bg-primary-foreground"
                      : "text-muted-foreground hover:text-foreground after:scale-x-0 after:bg-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              showTransparent && "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : showTransparent
                      ? "text-primary-foreground hover:bg-primary-foreground/10"
                      : "text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3070B6] to-[#52ABBD] rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight">
                  Extreme Awards
                </span>
                <span className="text-xs text-gray-600 leading-tight">
                  & Personalization
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#3070B6] border-b-2 border-[#3070B6]"
                      : "text-gray-700 hover:text-[#3070B6]"
                  } pb-1`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-[#C43175] hover:bg-[#C43175]/90">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-[#3070B6] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="w-full bg-[#C43175] hover:bg-[#C43175]/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
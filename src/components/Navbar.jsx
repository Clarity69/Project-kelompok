import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ logo, navLinks, ctaButton }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070C1E]/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-blue-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-extrabold text-base tracking-wider shadow-lg shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
            {logo ? logo.charAt(0) : "Y"}
          </span>
          <span className="text-white font-extrabold text-lg tracking-widest group-hover:text-blue-400 transition-colors">
            {logo}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-xs font-bold tracking-widest transition-colors duration-200 relative group ${
                  activeLink === link.href
                    ? "text-white"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    activeLink === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 border border-blue-500/40"
        >
          {ctaButton}
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-blue-900/30 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#101935]/95 backdrop-blur-md border-t border-blue-900/30 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(link.href);
              }}
              className="text-[#94A3B8] hover:text-white text-sm font-semibold tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-widest px-6 py-3 rounded-full transition-all"
          >
            {ctaButton}
          </a>
        </div>
      </div>
    </nav>
  );
}

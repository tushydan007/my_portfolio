import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="container mx-auto px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-primary nav-logo">CSE</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link relative text-gray-700 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2 bg-white" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0 bg-white" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="nav-link text-white text-2xl font-medium hover:text-primary transition-colors py-2 px-4"
              style={{ color: "#ffffff" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

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

        {/* Mobile Menu - ShadCN Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="mobile-menu-btn md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent focus:outline-none active:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-700 mobile-menu-icon" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[80%] sm:max-w-md bg-black/70 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item) => (
                <SheetClose key={item} asChild>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="nav-link text-white text-2xl font-medium hover:text-primary transition-colors py-2 px-4 w-full text-center"
                  >
                    {item}
                  </a>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

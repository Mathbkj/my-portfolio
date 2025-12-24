import Logo from "@/assets/logo.svg?react";
import { useState } from "react";

interface Link {
  name: string;
  href: string;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: Array<Link> = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex justify-center items-center fixed top-0 m-5 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex max-w-1/2 backdrop-blur-[7.5px] border border-solid border-white items-center justify-center px-3 py-2 gap-5 rounded-[50px]">
        {links.map((link) => (
          <a
            key={link.name.toLowerCase()}
            href={link.href}
            className="font-urbanist text-black/40 hover:text-black transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full px-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="backdrop-blur-[7.5px] border border-solid border-white p-3 rounded-full ml-auto block transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 right-4 backdrop-blur-[7.5px] border border-solid border-white rounded-2xl py-4 px-6 shadow-lg transition-all duration-300 origin-top-right ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={link.name.toLowerCase()}
                href={link.href}
                onClick={closeMenu}
                className={`font-urbanist text-black/40 hover:text-black transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

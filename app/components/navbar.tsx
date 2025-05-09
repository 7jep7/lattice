import { Link } from "@remix-run/react";
import DarkModeToggle from "./dark-mode-toggle";
import { useState } from "react";
import React from "react";

type NavItem = { to: string; label: string };

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/vision", label: "Vision" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-builders", label: "For Builders" },
  { to: "/contact", label: "Contact" },
];

type MobileMenuProps = { navItems: NavItem[]; setMenuOpen: (open: boolean) => void; menuOpen: boolean };

const MobileMenu = React.memo(({ navItems, setMenuOpen, menuOpen }: MobileMenuProps) => (
  <div
    className={`transition-opacity duration-300 ${
      menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="md:hidden absolute top-full left-0 w-full z-40">
      <div className="bg-background/90 dark:bg-background-dark/90 shadow-lg ring-1 ring-black/10 rounded-none">
        <ul className="flex flex-col p-4 gap-3 text-sm font-medium">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-3 text-base text-left hover:text-secondary dark:hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <div className="w-full px-4 py-3">
              <DarkModeToggle />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background dark:bg-background-dark shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold tracking-tight text-primary hover:text-secondary dark:hover:text-primary transition-colors duration-150"
        >
          <img src="/lattic.png" alt="Lattice Logo" className="h-6 w-auto mr-2" />
          <span>Lattice</span>
        </Link>

        {/* Right: Hamburger + Desktop Nav */}
        <div className="flex items-center gap-6">
          {/* ☰ Hamburger — mobile only */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {/* Top Line */}
            <span
              className={`absolute w-8 h-[0.2rem] bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>

            {/* Middle Line */}
            <span
              className={`absolute w-8 h-[0.2rem] bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            {/* Bottom Line */}
            <span
              className={`absolute w-8 h-[0.2rem] bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-secondary dark:hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
            <li><DarkModeToggle /></li>
          </ul>
        </div>
      </nav>

      {/* Mobile dropdown nav */}
      {menuOpen && <MobileMenu navItems={navItems} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
    </header>
  );
}

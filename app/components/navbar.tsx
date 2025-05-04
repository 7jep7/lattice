import { Link } from "@remix-run/react";
import DarkModeToggle from "./dark-mode-toggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/vision", label: "Vision" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-builders", label: "For Builders" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background dark:bg-background-dark shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary hover:text-secondary dark:hover:text-primary transition-colors duration-150">
          Lattice
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="hover:text-secondary dark:hover:text-primary">
                {label}
              </Link>
            </li>
          ))}
          <li><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}

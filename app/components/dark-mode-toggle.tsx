// app/components/dark-mode-toggle.tsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.classList.toggle("dark", prefersDark);
    setIsDark(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    const newTheme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="ml-4 h-8 w-8 rounded appearance-none bg-transparent focus:outline-none"
      style={{ outline: "none", boxShadow: "none" }}
      tabIndex={0}
    >
      <span
        className="block h-4 w-4 rounded-full mx-auto my-auto transition-colors duration-150
        bg-neutral-900 dark:bg-white
        hover:bg-neutral-700 dark:hover:bg-neutral-300"
      />
    </button>
  );
}

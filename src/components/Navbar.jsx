import { useEffect, useState } from "react";
import Icon from "./ui/Icon";

export default function Navbar() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      let saved;
      try {
        saved = localStorage.getItem("portfolio-theme");
      } catch {
        /* Storage is optional. */
      }
      if (!saved) setTheme(media.matches ? "dark" : "light");
    };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Keep working without storage. */
    }
  }
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Gerald Adli, home">
          gerald adli<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <span className="location">Jakarta, ID</span>
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <Icon name={theme === "light" ? "moon" : "sun"} />
          </button>
        </div>
      </nav>
    </header>
  );
}

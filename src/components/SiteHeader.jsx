import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <nav className="navbar container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          aria-label="Pike-Pike portfolio home"
          onClick={closeMenu}
        >
          <span className="brand-mark">PP</span>
          <span>PIKE-PIKE</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {links.map(([label, href], index) => (
            <a
              className={index === 0 ? "active" : undefined}
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

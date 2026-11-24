import { useEffect, useRef, useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);
  const servicesToggleRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    if (!servicesOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!servicesMenuRef.current?.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesToggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [servicesOpen]);

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
          <div
            className={`nav-dropdown${servicesOpen ? " open" : ""}`}
            ref={servicesMenuRef}
          >
            <div className="nav-dropdown-trigger">
              <a
                className="nav-dropdown-link"
                href="#services"
                onClick={closeMenu}
              >
                Services
              </a>
              <button
                className="nav-dropdown-toggle"
                type="button"
                aria-label={
                  servicesOpen ? "Close Services menu" : "Open Services menu"
                }
                aria-expanded={servicesOpen}
                aria-controls="servicesMenu"
                ref={servicesToggleRef}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <svg
                  className="nav-dropdown-indicator"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                >
                  <path d="m2 4 4 4 4-4" />
                </svg>
              </button>
            </div>
            <div className="nav-dropdown-menu" id="servicesMenu">
              <a href="#services" onClick={closeMenu}>
                All Services
              </a>
              <a href="#service-web-development" onClick={closeMenu}>
                Web Development
              </a>
              <a href="#service-ui-ux" onClick={closeMenu}>
                UI / UX Design
              </a>
              <a href="#service-interactive-features" onClick={closeMenu}>
                Interactive Features
              </a>
            </div>
          </div>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

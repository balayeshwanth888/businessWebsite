import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png"; // adjust path to match where you save the file
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Add a shadow once the page scrolls past the top
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on outside click or Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="topbar">
        <span className="topbar-tag">Bulk &amp; wholesale rates available</span>
        <a href="tel:+910000000000" className="topbar-phone">
          📞 +91 78923 26888
        </a>
      </div>

      <nav className="navbar" ref={menuRef}>
        <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Sri Lakshmi Wholesale Vegetables"
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">
            Sri Lakshmi
            <small>Wholesale Vegetables</small>
          </span>
        </NavLink>

        <button
          className={`navbar-toggle ${isOpen ? "is-active" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${isOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link is-active" : "nav-link"
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="navbar-cta-wrap">
            <NavLink to="/contact" className="navbar-cta" onClick={() => setIsOpen(false)}>
              Get a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
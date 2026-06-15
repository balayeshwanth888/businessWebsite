import "./Navbar.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-icon"></div>
        <div>
          <div className="navbar-logo-text">Sri Lakshmi</div>
          <div className="navbar-logo-sub">Wholesale Vegetables</div>
        </div>
      </div>
      <ul className="navbar-links">
        <li><span onClick={() => scrollToSection("products")}>Products</span></li>
        <li><span onClick={() => scrollToSection("about")}>About Us</span></li>
        <li><span onClick={() => scrollToSection("contact")}>Contact</span></li>
      </ul>
    </nav>
  );
}
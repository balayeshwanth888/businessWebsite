import "./Hero.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Vijayawada's trusted wholesale supplier</p>
        <h1 className="hero-title">
          Farm-fresh <span>vegetables</span>, delivered to your door
        </h1>
        <p className="hero-desc">
          We supply the freshest vegetables directly from farms to hotels, restaurants,
          canteens, and retail shops across Vijayawada — at unbeatable wholesale prices.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollToSection("products")}>
            View Our Products
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero-visual">🥦</div>
    </section>
  );
}
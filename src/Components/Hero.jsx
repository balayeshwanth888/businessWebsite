import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

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
          <button
            className="btn-primary"
            onClick={() => navigate("/products")}
          >
            View Our Products
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-visual">🥦</div>
    </section>
  );
}
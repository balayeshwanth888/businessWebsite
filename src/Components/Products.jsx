import { useState } from "react";
import "./Products.css";

const products = [
  { emoji: "🍅", name: "Tomatoes", price: "From ₹20 / kg", badge: "Bestseller" },
  { emoji: "🥔", name: "Potatoes", price: "From ₹18 / kg", badge: "In Stock" },
  { emoji: "🧅", name: "Onions", price: "From ₹25 / kg", badge: "In Stock" },
  { emoji: "🥦", name: "Broccoli", price: "From ₹60 / kg", badge: "Seasonal" },
  { emoji: "🥕", name: "Carrots", price: "From ₹30 / kg", badge: "In Stock" },
  { emoji: "🌽", name: "Corn", price: "From ₹15 / piece", badge: "Seasonal" },
  { emoji: "🥬", name: "Leafy Greens", price: "From ₹10 / bunch", badge: "Bestseller" },
  { emoji: "🫑", name: "Capsicum", price: "From ₹40 / kg", badge: "In Stock" },
];

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="products" className="section products-section">
      <p className="section-label">What we supply</p>
      <h2 className="section-title">Our product catalogue</h2>
      <p className="section-desc">
        All vegetables are sourced fresh every morning from local farms and wholesale markets.
        Bulk orders welcome.
      </p>
      <div className="product-grid">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`product-card ${hoveredCard === i ? "product-card--hovered" : ""}`}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="product-emoji">{p.emoji}</span>
            <span className="product-badge">{p.badge}</span>
            <div className="product-name">{p.name}</div>
            <div className="product-price">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
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
  { emoji: "🍆", name: "Brinjal (Eggplant)", price: "From ₹22 / kg", badge: "In Stock" },
  { emoji: "🥒", name: "Cucumber", price: "From ₹16 / kg", badge: "Fresh" },
  { emoji: "🧄", name: "Garlic", price: "From ₹120 / kg", badge: "Premium" },
  { emoji: "🌶️", name: "Green Chilli", price: "From ₹35 / kg", badge: "Spicy" },
  // { emoji: "🥔", name: "Sweet Potato", price: "From ₹28 / kg", badge: "Seasonal" },
  // { emoji: "🥗", name: "Cabbage", price: "From ₹14 / kg", badge: "In Stock" },
];

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="section products-section">
      <div className="section-label">Our Products</div>
      <h1 className="section-title">Fresh Vegetables</h1>
      <p className="section-desc">
        All types of fresh vegetables available at wholesale prices.
      </p>

      <div className="product-grid">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`product-card ${hoveredCard === i ? "product-card--hovered" : ""}`}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="product-badge">{p.badge}</span>
            <span className="product-emoji">{p.emoji}</span>
            <div className="product-name">{p.name}</div>
            <div className="product-price">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
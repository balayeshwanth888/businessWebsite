import { useState } from "react";
import "./Products.css";

const products = [
  {
    image: "/images/vegetables/tomato.png",
    name: "Tomatoes",
    price: "From ₹20 / kg",
    badge: "Bestseller",
  },
  {
    image: "/images/vegetables/potato.png",
    name: "Potatoes",
    price: "From ₹18 / kg",
    badge: "In Stock",
  },
  {
    image: "/images/vegetables/onion.png",
    name: "Onions",
    price: "From ₹25 / kg",
    badge: "In Stock",
  },
  {
    image: "/images/vegetables/broccoli.png",
    name: "Broccoli",
    price: "From ₹60 / kg",
    badge: "Seasonal",
  },
  {
    image: "/images/vegetables/carrot.png",
    name: "Carrots",
    price: "From ₹30 / kg",
    badge: "In Stock",
  },
  {
    image: "/images/vegetables/corn.png",
    name: "Corn",
    price: "From ₹15 / piece",
    badge: "Seasonal",
  },
  {
    image: "/images/vegetables/leafy-greens.png",
    name: "Leafy Greens",
    price: "From ₹10 / bunch",
    badge: "Bestseller",
  },
  {
    image: "/images/vegetables/capsicum.png",
    name: "Capsicum",
    price: "From ₹40 / kg",
    badge: "In Stock",
  },
  {
    image: "/images/vegetables/brinjal.png",
    name: "Brinjal (Eggplant)",
    price: "From ₹22 / kg",
    badge: "In Stock",
  },
  {
    image: "/images/vegetables/cucumber.png",
    name: "Cucumber",
    price: "From ₹16 / kg",
    badge: "Fresh",
  },
  {
    image: "/images/vegetables/garlic.png",
    name: "Garlic",
    price: "From ₹120 / kg",
    badge: "Premium",
  },
  {
    image: "/images/vegetables/green-chilli.png",
    name: "Green Chilli",
    price: "From ₹35 / kg",
    badge: "Spicy",
  },
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
            className={`product-card ${
              hoveredCard === i ? "product-card--hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="product-badge">{p.badge}</span>

            <img
              src={p.image}
              alt={p.name}
              className="product-image"
            />

            <div className="product-name">{p.name}</div>
            <div className="product-price">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
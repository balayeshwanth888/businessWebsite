import "./About.css";

const features = [
  { icon: "🌱", title: "Farm-direct sourcing", desc: "We work directly with farmers in Telangana and Andhra Pradesh to bring you the freshest produce at the best rates." },
  { icon: "⚡", title: "Same-day delivery", desc: "Orders placed before 6 AM are delivered the same morning — so your kitchen never runs short." },
  { icon: "🤝", title: "Trusted by businesses", desc: "Hotels, restaurants, canteens, and kirana stores across Vijayawada rely on us daily for their vegetable needs." },
  { icon: "💰", title: "Wholesale pricing", desc: "Competitive bulk rates with flexible payment terms. Special monthly contracts available for large buyers." },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <p className="section-label">Our story</p>
      <h2 className="section-title">About Sri Lakshmi Vegetables</h2>
      <p className="section-desc">
        A family-run wholesale vegetable business serving Vijayawada with freshness, reliability,
        and the best prices for over two decades.
      </p>
      <div className="about-grid">
        <div className="about-features">
          {features.map((f) => (
            <div key={f.title} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <div>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-visual">🥗</div>
      </div>
    </section>
  );
}
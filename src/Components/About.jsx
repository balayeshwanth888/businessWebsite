import "./About.css";

const stats = [
  { number: "30+", label: "Years Experience" },
  { number: "5000", label: "Happy Clients" },
  { number: "20", label: "Vegetable Varieties" },
  // { number: "24/7", label: "Order Support" },
];

const values = [
  { icon: "🌱", title: "Farm Fresh", desc: "Sourced daily from local farms and trusted wholesale markets." },
  { icon: "🚚", title: "Reliable Delivery", desc: "On-time bulk delivery, every single order, no exceptions." },
  { icon: "✅", title: "Quality Checked", desc: "Every batch inspected for freshness before it leaves our warehouse." },
  { icon: "💰", title: "Wholesale Pricing", desc: "Fair, transparent pricing built for bulk buyers and resellers." },
];

export default function About() {
  return (
    <section className="section about-section">
      <div className="section-label">About Us</div>
      <h1 className="section-title">Who We Are</h1>
      <p className="section-desc">
        We supply fresh vegetables in bulk with a focus on quality, freshness,
        and reliable service for all our customers.
      </p>

      <div className="about-stats">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="about-values">
        {values.map((v) => (
          <div key={v.title} className="value-card">
            <span className="value-icon">{v.icon}</span>
            <h3 className="value-title">{v.title}</h3>
            <p className="value-desc">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
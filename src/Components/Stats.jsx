import "./StatsBar.css";

const stats = [
  { num: "5000", label: "Happy Clients" },
  { num: "35", label: "Years of Service" },
  { num: "20", label: "Varieties" },
  { num: "Daily", label: "Fresh Arrivals" },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div key={s.label} className="stat-item">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
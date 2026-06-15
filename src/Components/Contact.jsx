import "./Contact.css";

const contactDetails = [
  { icon: "📍", title: "Location", lines: ["Sri Lakshmi Vegetables", "Rajiv Gandhi Wholesale Market", "Vijayawada, Andhra Pradesh — 520001"] },
  { icon: "📞", title: "Phone / WhatsApp", lines: ["+91 98485 55345", "+91 99633 49466"] },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">Reach us</p>
      <h2 className="section-title">Contact & Location</h2>
      <p className="section-desc">
        We're open early, every day. Call us to place an order or visit our shop at the wholesale market.
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          {contactDetails.map((c) => (
            <div key={c.title} className="contact-item">
              <div className="contact-icon">{c.icon}</div>
              <div>
                <h4 className="contact-title">{c.title}</h4>
                <p className="contact-desc">
                  {c.lines.map((line, i) => (
                    <span key={i}>{line}{i < c.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="map-box">
          <div className="map-icon">🗺️</div>
          <p className="map-name">Rajiv Gandhi Wholesale Market</p>
          <small className="map-sub">Vijayawada, Andhra Pradesh</small>
          <button
            className="btn-primary map-btn"
            onClick={() => window.open("https://www.google.com/maps/place/Rajiv+Gandhi+Wholesale+flower+Market/@16.510478,80.6140763,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35f190117c64c5:0x768d8e95aa5aab3a!8m2!3d16.510478!4d80.6140763!16s%2Fg%2F11qt41mqsf?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D", "_blank")}
          >
            Open in Google Maps
          </button>
        </div>
      </div>
    </section>
  );
}
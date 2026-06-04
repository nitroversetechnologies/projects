import "./PrintingServices.css";

const services = [
  {
    title: "DTF Printing",
    description: "High-quality detailed prints with vibrant colors and excellent durability. Perfect for custom designs and artwork.",
    icon: "🎨",
  },
  {
    title: "Screen Printing",
    description: "Best for bulk orders with consistent quality. Ideal for corporate branding and large-scale production.",
    icon: "🖨️",
  },
  {
    title: "Vinyl Printing",
    description: "Premium finish with professional appearance. Great for logos and branded merchandise with lasting quality.",
    icon: "✨",
  },
  {
    title: "Embroidery",
    description: "Luxury branding option with premium feel. Perfect for high-end corporate gifts and exclusive collections.",
    icon: "🧵",
  },
];

function PrintingServices() {
  return (
    <section className="printing-services" id="services">
      <div className="services-container">
        <h2>Our Printing Services</h2>
        <p className="section-subtitle">Premium printing solutions for every need</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="learn-more">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrintingServices;

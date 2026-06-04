import "./BulkOrderCTA.css";

function BulkOrderCTA() {
  return (
    <section className="bulk-order-cta" id="bulk-order">
      <div className="cta-content">
        <h2>Need Bulk Custom T-Shirts?</h2>
        <p>Get special pricing for businesses, colleges, events and brands.</p>

        <div className="cta-highlights">
          <div className="highlight">
            <span className="number">1000+</span>
            <span className="label">Orders Fulfilled</span>
          </div>
          <div className="highlight">
            <span className="number">50+</span>
            <span className="label">Cities Served</span>
          </div>
          <div className="highlight">
            <span className="number">100%</span>
            <span className="label">Satisfaction</span>
          </div>
        </div>

        <a href="#contact" className="cta-button">
          Get Free Quote
        </a>
      </div>
    </section>
  );
}

export default BulkOrderCTA;

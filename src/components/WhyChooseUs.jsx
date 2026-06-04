import "./WhyChooseUs.css";
import premiumFabric from "../assets/premium-fabric.png";
import qualityGsm from "../assets/quality-gsm.png";
import fastProduction from "../assets/fast-production.png";
import bulkSupport from "../assets/bulk-support.png";
import customBranding from "../assets/custom-branding.png";

const benefits = [
  {
    title: "Premium Fabric",
    description: "100% Terry Cotton with superior quality and durability for lasting comfort",
    icon: premiumFabric,
  },
  {
    title: "220 GSM Quality",
    description: "Heavyweight fabric that maintains premium look and feel throughout the day",
    icon: qualityGsm,
  },
  {
    title: "Fast Production",
    description: "Quick turnaround times without compromising on quality or craftsmanship",
    icon: fastProduction,
  },
  {
    title: "Bulk Order Support",
    description: "Dedicated support for large orders with competitive pricing and flexible terms",
    icon: bulkSupport,
  },
  {
    title: "Custom Branding",
    description: "Personalized solutions to match your brand identity and unique requirements",
    icon: customBranding,
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-us">
      <div className="why-container">
        <h2>Why Choose VALIKINGS?</h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
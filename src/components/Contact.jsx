import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - could send to email service
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "", requirement: "" });
  };

  const handleWhatsApp = () => {
    const message = `Hi VALIKINGS! I'm interested in your services. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}. Requirement: ${formData.requirement}`;
    const whatsappLink = `https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <h2>Get Bulk Quote</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Tell us about your order"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          required
        />

        <div className="contact-buttons">
          <button type="submit" className="submit-btn">
            Send Inquiry
          </button>
          <button type="button" className="whatsapp-btn" onClick={handleWhatsApp}>
            💬 WhatsApp Us
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
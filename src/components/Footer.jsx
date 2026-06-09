import "./Footer.css";
import logo from "../assets/logo.jpeg";
import emailIcon from "../assets/email.png";
import callIcon from "../assets/call.png";
import locationIcon from "../assets/loc.png";
import whatsappIcon from "../assets/whatsapp.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+91 95379 91017";
  const emailAddress = "khushbarot22@gmail.com";
  const whatsappLink = "https://wa.me/919537991017";
  const mapsLink = "https://maps.app.goo.gl/3frVnbiMBGtMQwsw6";

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      window.alert("Phone number copied");
    } catch {
      window.alert("Unable to copy the phone number");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="VALIKINGS" />
          </div>
          <p>
            Premium custom t-shirt printing and bulk manufacturing solutions for
            brands, teams, events, and businesses.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <h / >

          <a
            className="contact-item"
            onClick={handleCopyPhone}
          >
            <img className="contact-icon" src={callIcon} alt="Phone" />
            <span>Phone: {phoneNumber}</span>
          </a>
          <a className="contact-item" href={`mailto:${emailAddress}`}>
            <img className="contact-icon" src={emailIcon} alt="Email" />
            <span>Email: {emailAddress}</span>
          </a>
          <a
            className="contact-item"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-icon" src={whatsappIcon} alt="WhatsApp" />
            <span>WhatsApp: {phoneNumber}</span>
          </a>
          <a
            className="contact-item"
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-icon" src={locationIcon} alt="Location" />
            <span>Location: India</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} VALIKINGS. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#return">Return Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

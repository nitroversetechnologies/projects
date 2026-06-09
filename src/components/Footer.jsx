import "./Footer.css";
import logo from "../assets/logo.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

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
          <p className="contact-item">📧 Email: khushbarot22@gmail.com</p>
          <p className="contact-item">📱 Phone: +91 95379 91017</p>
          <p className="contact-item">💬 WhatsApp: +91 95379 91017</p>
          <p className="contact-item">📍 Location: India</p>
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

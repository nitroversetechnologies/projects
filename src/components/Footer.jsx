import "./Footer.css";
import logo from "../assets/logo.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="VALIKINGS" />
          </div>
          <p>Premium custom t-shirt printing and bulk manufacturing solutions.</p>
          <div className="social-links">
            <a href="#" className="social-icon" title="Instagram">
              📸
            </a>
            <a href="#" className="social-icon" title="Facebook">
              👍
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              💼
            </a>
            <a href="#" className="social-icon" title="WhatsApp">
              💬
            </a>
          </div>
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
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#product">Oversized T-Shirts</a>
            </li>
            <li>
              <a href="#product">Custom Printing</a>
            </li>
            <li>
              <a href="#product">Corporate Orders</a>
            </li>
            <li>
              <a href="#product">Event Merchandise</a>
            </li>
            <li>
              <a href="#product">Sports Jerseys</a>
            </li>
            <li>
              <a href="#product">Hoodies</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p className="contact-item">📧 Email: info@valikings.com</p>
          <p className="contact-item">📱 Phone: +91 XXXXXXXXXX</p>
          <p className="contact-item">💬 WhatsApp: +91 XXXXXXXXXX</p>
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

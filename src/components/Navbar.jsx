import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/favicon.svg" alt="Valikings Favicon" className="favicon" />
        <img src={logo} alt="Valikings" className="logo" />
      </div>

      <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>
          Home
        </a>
        <a href="#product" onClick={() => setMobileMenuOpen(false)}>
          Product
        </a>
        <a href="#categories" onClick={() => setMobileMenuOpen(false)}>
          Categories
        </a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>
          Services
        </a>
        <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
          Gallery
        </a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </a>
      </div>

      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
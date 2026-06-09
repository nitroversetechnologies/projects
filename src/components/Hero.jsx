import hero from "../assets/hero-shirt.jpg.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay">
        <h1>
          WE DON'T JUST PRINT T-SHIRTS
          <br />
          WE BUILD BRANDS
        </h1>

        <p>
          Premium Oversized T-Shirts | Custom Printing | Corporate Orders | Bulk Manufacturing
        </p>

        <div className="cta-buttons">
          <a href="#gallery" className="primary-btn">Explore Collection</a>
          <a href="#contact" className="secondary-btn">Get Bulk Quote</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
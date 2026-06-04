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
          <button className="primary-btn">Explore Collection</button>
          <button className="secondary-btn">Get Bulk Quote</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
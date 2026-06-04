import "./FeaturedGallery.css";
import { useState } from "react";
import frontImage from "../assets/oversized-front.jpeg";
import backImage from "../assets/oversized-back.jpg.jpeg";
import premiumStreetware from "../assets/Premium Streetwear.png";
import oversizedClassic from "../assets/Oversized Classic.png";

const galleryImages = [
  {
    id: 1,
    title: "Front Print Design 1",
    category: "Front Designs",
    image: frontImage,
  },
  {
    id: 2,
    title: "Back Print Design 1",
    category: "Back Designs",
    image: backImage,
  },
  {
    id: 3,
    title: "Premium Streetwear",
    category: "Collection",
    image: premiumStreetware,
  },
  {
    id: 4,
    title: "Oversized Classic",
    category: "Collection",
    image: oversizedClassic,
  },
];

function FeaturedGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="featured-gallery" id="gallery">
      <div className="gallery-container">
        <h2>Featured Designs & Gallery</h2>
        <p className="section-subtitle">Premium collection of custom t-shirt designs</p>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedGallery;

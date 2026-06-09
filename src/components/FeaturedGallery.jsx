import "./FeaturedGallery.css";
import { useRef, useState } from "react";
import image1 from "../assets/1 (1).jpeg";
import image2 from "../assets/1 (2).jpeg";
import image3 from "../assets/1 (3).jpeg";
import image4 from "../assets/1 (4).jpeg";
import image5 from "../assets/1 (5).jpeg";
import image6 from "../assets/1 (6).jpeg";
import image7 from "../assets/1 (7).jpeg";
import image8 from "../assets/1 (8).jpeg";
import image9 from "../assets/1 (9).jpeg";
import oversizedClassic from "../assets/Oversized Classic.png";
import premiumStreetwear from "../assets/Premium Streetwear.png";
import premiumOversizedTshirt from "../assets/Premium Oversized T-Shirt.jpeg";
import oversizedBack from "../assets/oversized-back.jpg.jpeg";
import oversizedFront from "../assets/oversized-front.jpeg";

const galleryImages = [
  {
    id: 1,
    title: "Oversized Classic",
    category: "Collection",
    image: oversizedClassic,
  },
  {
    id: 2,
    title: "Premium Streetwear",
    category: "Collection",
    image: premiumStreetwear,
  },
  {
    id: 3,
    title: "Premium Oversized T-Shirt",
    category: "Collection",
    image: premiumOversizedTshirt,
  },
  {
    id: 4,
    title: "Oversized Back",
    category: "Collection",
    image: oversizedBack,
  },
  {
    id: 5,
    title: "Oversized Front",
    category: "Collection",
    image: oversizedFront,
  },
  { id: 6, title: "Gallery Image 1", category: "Collection", image: image1 },
  { id: 7, title: "Gallery Image 2", category: "Collection", image: image2 },
  { id: 8, title: "Gallery Image 3", category: "Collection", image: image3 },
  { id: 9, title: "Gallery Image 4", category: "Collection", image: image4 },
  { id: 10, title: "Gallery Image 5", category: "Collection", image: image5 },
  { id: 11, title: "Gallery Image 6", category: "Collection", image: image6 },
  { id: 12, title: "Gallery Image 7", category: "Collection", image: image7 },
  { id: 13, title: "Gallery Image 8", category: "Collection", image: image8 },
  { id: 14, title: "Gallery Image 9", category: "Collection", image: image9 },
];

function FeaturedGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollerRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!scrollerRef.current) return;

    const cardWidth = scrollerRef.current.querySelector(".gallery-card")?.offsetWidth ?? 320;
    const gap = 24;
    scrollerRef.current.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const handleWheel = (event) => {
    if (!scrollerRef.current) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      scrollerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <section className="featured-gallery" id="gallery">
      <div className="gallery-container">
        <h2>Featured Designs & Gallery</h2>
        <p className="section-subtitle">Premium collection of custom t-shirt designs</p>

        <div className="gallery-controls">
          <button
            type="button"
            className="gallery-nav gallery-nav-left"
            onClick={() => scrollGallery(-1)}
            aria-label="Scroll gallery left"
          >
            <span>‹</span>
          </button>

          <div
            className="gallery-scroll"
            ref={scrollerRef}
            onWheel={handleWheel}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="gallery-nav gallery-nav-right"
            onClick={() => scrollGallery(1)}
            aria-label="Scroll gallery right"
          >
            <span>›</span>
          </button>
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

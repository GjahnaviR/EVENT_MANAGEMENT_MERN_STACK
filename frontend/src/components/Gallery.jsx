import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      src: "/gallery/wedding-1.jpg",
      alt: "Wedding Celebration",
      category: "wedding"
    },
    {
      src: "/gallery/birthday-1.jpg",
      alt: "Birthday Party",
      category: "birthday"
    },
    {
      src: "/gallery/anniversary-1.jpg",
      alt: "Anniversary Event",
      category: "anniversary"
    },
    {
      src: "/gallery/camping-1.jpg",
      alt: "Camping Adventure",
      category: "camping"
    },
    {
      src: "/gallery/game-night-1.jpg",
      alt: "Game Night",
      category: "game-night"
    },
    {
      src: "/gallery/party-1.jpg",
      alt: "Party Celebration",
      category: "party"
    }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Event Gallery</h2>
        <p>Explore our collection of memorable moments</p>
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <div className="image-container">
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{image.alt}</h3>
                  <p>Click to view more</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery; 
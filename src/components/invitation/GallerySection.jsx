"use client";

import { useState } from "react";
import "./GallerySection.css";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images
  // const images = Array.from({ length: 6 }, (_, i) => ({
  //   id: i + 1,
  //   src: `/OIP.jpg?height=400&width=600`,
  //   alt: `Wedding Photo ${i + 1}`,
  // }));

  const images = [
    { id: 1, src: "/foto1.jpg", alt: "Wedding Photo 1" },
    { id: 2, src: "/foto2.jpg", alt: "Wedding Photo 2" },
    { id: 3, src: "/foto3.jpg", alt: "Wedding Photo 3" },
    { id: 4, src: "/foto4.jpg", alt: "Wedding Photo 4" },
    { id: 5, src: "/foto5.jpg", alt: "Wedding Photo 5" },
    { id: 6, src: "/foto3.jpg", alt: "Wedding Photo 6" },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="cursive section-title">Our Gallery</h2>
          <p className="section-subtitle">Moments we've shared together</p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close">
            <X size={24} />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

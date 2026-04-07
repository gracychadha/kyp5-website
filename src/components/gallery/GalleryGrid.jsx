import React, { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "gallery")
      .then((response) => {
        setGallery(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img
                src={item.image ? BASE_URL + item.image : "/assets/images/gallery/default.jpg"}
                alt={item.title || "gallery"}
              />

              <div className="gallery-overlay">
                <button
                  className="view-btn"
                  onClick={() => setSelectedImage(BASE_URL + item.image)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </section>
  );
}

export default Gallery;
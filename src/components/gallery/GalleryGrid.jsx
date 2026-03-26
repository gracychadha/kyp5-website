import React, { useState } from "react";

const galleryImages = [
  { id: 1, img: "/assets/images/course/01.jpg" },
  { id: 2, img: "/assets/images/course/02.jpg" },
  { id: 3, img: "/assets/images/course/03.jpg" },
  { id: 4, img: "/assets/images/course/04.jpg" },
  { id: 5, img: "/assets/images/course/05.jpg" },
  { id: 6, img: "/assets/images/course/06.jpg" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="section-title">
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">

          {galleryImages.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.img} alt="gallery" />

              <div className="gallery-overlay">
                <button
                  className="view-btn"
                  onClick={() => setSelectedImage(item.img)}
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
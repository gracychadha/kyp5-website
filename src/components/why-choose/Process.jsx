import React, { useEffect, useState } from "react";
import axios from "axios";

function Process() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "why-choose-cards")
      .then((response) => {
        setCards(response.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching why choose us cards:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <>
      <style>{`
        .assessment-card:hover .assessment-custom-icon {
          transform: rotateY(-180deg) scale(1.1);
        }
        .assessment-custom-icon {
          width: 38px;
          height: 38px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: 0.4s;
        }
      `}</style>
      <section className="assessment-section">
        <div className="container">
          <div className="section-heading text-center">
            <span>WHY OUR ASSESSMENTS</span>
            <h4>Our Assessment Design Draws From</h4>
            <p>
              Scientifically designed frameworks that ensure every assessment
              delivers accurate, meaningful and career-focused insights.
            </p>
          </div>
          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : cards.length > 0 ? (
              cards.map((card) => {
                const isUploadedIcon = card.icon && card.icon.startsWith("/uploads/");
                return (
                  <div className="col-lg-4 col-md-6" key={card.id}>
                    <div className="assessment-card">
                      <div className="assessment-icon">
                        {isUploadedIcon ? (
                          <img
                            src={BASE_URL + card.icon}
                            className="assessment-custom-icon"
                            alt={card.title}
                          />
                        ) : (
                          <i className={card.icon || "fa-solid fa-lightbulb"} />
                        )}
                      </div>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <p>No assessment design details available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;

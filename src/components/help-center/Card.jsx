import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "help-center")
      .then((response) => {
        setGuides(response.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching help center guides:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <>
      <section className="help-sop-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">HELP CENTER</span>
            <h4>Help Links &amp; SOP Guides</h4>
            <p>
              Everything you need to get started with KYP5. Browse our
              step-by-step guides and documentation.
            </p>
          </div>
          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : guides.length > 0 ? (
              guides.map((guide, index) => {
                const targetLink = guide.pdfPath ? BASE_URL + guide.pdfPath : (guide.link || "#");
                // Cycle through color classes: registration (purple), login (blue), pricing (green)
                const colors = ["registration", "login", "pricing"];
                const colorClass = colors[index % colors.length];
                
                // Style second card as active by default to match original design,
                // or just keep style consistent
                const cardClass = index === 1 ? "help-card active" : "help-card";

                return (
                  <div className="col-lg-4 col-md-6" key={guide.id}>
                    <div className={cardClass}>
                      <div className={`help-icon ${colorClass}`}>
                        <i className={guide.icon || "fa-regular fa-file-lines"} />
                      </div>
                      <h4>{guide.title}</h4>
                      <p>{guide.description}</p>
                      <a
                        href={targetLink}
                        target={guide.pdfPath || guide.link ? "_blank" : undefined}
                        rel="noreferrer"
                        className="help-btn"
                        download={guide.pdfPath ? true : undefined}
                      >
                        {guide.buttonText || "View Guide"}
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <p>No guides available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;

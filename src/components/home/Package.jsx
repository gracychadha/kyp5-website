import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Package() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "pricing-plans")
      .then((response) => {
        setPlans(response.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching pricing plans:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getBadgeClass = (badgeText) => {
    if (!badgeText) return "";
    const lower = badgeText.toLowerCase();
    if (lower.includes("starter") || lower.includes("basic") || lower.includes("one")) return "starter";
    if (lower.includes("popular") || lower.includes("recom") || lower.includes("ten")) return "popular";
    if (lower.includes("prem") || lower.includes("pro") || lower.includes("fifty")) return "premium";
    return "starter";
  };

  return (
    <section className="okyps-pricing-section">
      <div className="container">
        {/* Section Heading */}
        <div className="okyps-section-heading text-center">
          <div className="pricing-pill-badge">
            <i className="fas fa-tags me-2" /> Pricing Plans
          </div>
          <h2 className="title">Choose Your Perfect Package</h2>
          <p className="disc">
            Flexible pricing plans designed for every learner. Pick the package that suits your preparation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center align-items-stretch mt-4">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : plans.length > 0 ? (
            plans.map((plan) => {
              const badgeClass = getBadgeClass(plan.badgeText);
              return (
                <div className="col-lg-4 col-md-6 d-flex" key={plan.id}>
                  <div className={`okyps-pricing-card ${plan.isFeatured ? 'featured' : ''} flex-fill d-flex flex-column justify-content-between`}>
                    <div>
                      {plan.badgeText && (
                        <span className={`package-badge ${badgeClass}`}>{plan.badgeText}</span>
                      )}
                      <h3 className={`pack-title ${plan.isFeatured ? 'text-white' : ''}`}>{plan.title}</h3>
                      <div className={`price-box ${plan.isFeatured ? 'text-white' : ''}`}>
                        <span className="currency">₹</span>
                        <span className="amount">{Number(plan.price).toLocaleString("en-IN")}</span>
                        <span className={`unit ${plan.isFeatured ? 'text-white-75' : ''}`}>/Pack</span>
                      </div>
                      <hr className={`card-divider ${plan.isFeatured ? 'divider-white' : ''}`} />

                      <ul className={`card-features ${plan.isFeatured ? 'text-white' : ''}`}>
                        {(plan.features || []).map((feat, i) => (
                          <li key={i}>
                            <i className={`fas fa-check-circle check-icon ${plan.isFeatured ? 'text-white' : ''}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="btn-wrapper mt-4">
                      <a href={plan.buttonLink || "/login"} className={`okyps-pricing-btn ${plan.isFeatured ? 'btn-white-action' : ''}`}>
                        {plan.buttonText || "Buy Now"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <p>No pricing plans available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Package;

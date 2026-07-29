import React from 'react';

function Package() {
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
          {/* Card 1: Starter Pack */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="okyps-pricing-card flex-fill d-flex flex-column justify-content-between">
              <div>
                <span className="package-badge starter">Starter</span>
                <h3 className="pack-title">Pack of 1</h3>
                <div className="price-box">
                  <span className="currency">₹</span>
                  <span className="amount">1,769</span>
                  <span className="unit">/Pack</span>
                </div>
                <p className="validity-info">
                  <i className="far fa-calendar-alt me-2" />
                  Validity : 1 Month
                </p>

                <hr className="card-divider" />

                <ul className="card-features">
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>1 Test Included</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Instant Access</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Performance Report</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Junior Level</span>
                  </li>
                </ul>
              </div>

              <div className="btn-wrapper mt-4">
                <a href="/login" className="okyps-pricing-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Most Popular Pack (Featured) */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="okyps-pricing-card featured flex-fill d-flex flex-column justify-content-between">
              <div>
                <span className="package-badge popular">Most Popular</span>
                <h3 className="pack-title text-white">Pack of 10</h3>
                <div className="price-box text-white">
                  <span className="currency">₹</span>
                  <span className="amount">15,328</span>
                  <span className="unit text-white-75">/Pack</span>
                </div>
                <p className="validity-info text-white-85">
                  <i className="far fa-calendar-alt me-2" />
                  Validity : 3 Months
                </p>

                <hr className="card-divider divider-white" />

                <ul className="card-features text-white">
                  <li>
                    <i className="fas fa-check-circle check-icon text-white" />
                    <span>10 Tests Included</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon text-white" />
                    <span>Instant Access</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon text-white" />
                    <span>AI Performance Report</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon text-white" />
                    <span>Junior Level</span>
                  </li>
                </ul>
              </div>

              <div className="btn-wrapper mt-4">
                <a href="/login" className="okyps-pricing-btn btn-white-action">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Premium Pack */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="okyps-pricing-card flex-fill d-flex flex-column justify-content-between">
              <div>
                <span className="package-badge premium">Premium</span>
                <h3 className="pack-title">Pack of 50</h3>
                <div className="price-box">
                  <span className="currency">₹</span>
                  <span className="amount">58,941</span>
                  <span className="unit">/Pack</span>
                </div>
                <p className="validity-info">
                  <i className="far fa-calendar-alt me-2" />
                  Validity : 6 Months
                </p>

                <hr className="card-divider" />

                <ul className="card-features">
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>50 Tests Included</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Instant Access</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Rank Analysis</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle check-icon" />
                    <span>Junior Level</span>
                  </li>
                </ul>
              </div>

              <div className="btn-wrapper mt-4">
                <a href="/login" className="okyps-pricing-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;

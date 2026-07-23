import React from "react";

function Card() {
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
            {/* Card */}
            <div className="col-lg-4 col-md-6">
              <div className="help-card">
                <div className="help-icon registration">
                  <i className="fa-solid fa-user-plus" />
                </div>
                <h4>Registration SOP</h4>
                <p>
                  Learn how to create your account, verify your email, and
                  complete your profile successfully.
                </p>
                <a href="#" className="help-btn">
                  Start Registration
                  <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </div>
            {/* Card */}
            <div className="col-lg-4 col-md-6">
              <div className="help-card active">
                <div className="help-icon login">
                  <i className="fa-solid fa-right-to-bracket" />
                </div>
                <h4>Login SOP</h4>
                <p>
                  Understand login steps, password reset, dashboard access and
                  troubleshooting.
                </p>
                <a href="#" className="help-btn">
                  View Guide
                  <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </div>
            {/* Card */}
            <div className="col-lg-4 col-md-6">
              <div className="help-card">
                <div className="help-icon pricing">
                  <i className="fa-regular fa-file-lines" />
                </div>
                <h4>Pricing SOP</h4>
                <p>
                  Explore pricing plans, package features and choose the
                  solution that's best for you.
                </p>
                <a href="#" className="help-btn">
                  Explore Pricing
                  <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;

import React from 'react'

function Package() {
  return (
   <>
   <section className="okyps-pricing-section ">
  <div className="container">
    {/* Heading */}
    <div className="okyps-section-heading text-center">
      <span className="sub-title">
        <i className="far fa-gem" /> Pricing Plans
      </span>
      <h2>Choose Your Perfect Package</h2>
      <p>
        Flexible pricing plans designed for every learner.
        Pick the package that suits your preparation.
      </p>
    </div>
    {/* Top Pricing Tab */}
    <div className="okyps-pricing-tabs">
      <button className="active">
        <i className="fas fa-tags" />
        Pricing Plans
      </button>
    </div>
    {/* Pricing Cards */}
    <div className="row g-6 mt-5">
      {/* Card */}
      <div className="col-lg-4 col-md-6">
        <div className="okyps-pricing-card">
          <span className="package-badge">
            Starter
          </span>
          <h3>Pack of 1</h3>
          <div className="price">
            ₹1,769
            <span>/Pack</span>
          </div>
          <p className="validity">
            Validity : 1 Month
          </p>
          <ul>
            <li><i className="fas fa-check-circle" /> 1 Test Included</li>
            <li><i className="fas fa-check-circle" /> Instant Access</li>
            <li><i className="fas fa-check-circle" /> Performance Report</li>
            <li><i className="fas fa-check-circle" /> Junior Level</li>
          </ul>
          <a href="#" className="rts-btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
      {/* Featured */}
      <div className="col-lg-4 col-md-6">
        <div className="okyps-pricing-card featured">
          <span className="package-badge">
            Most Popular
          </span>
          <h3>Pack of 10</h3>
          <div className="price">
            ₹15,328
            <span className='text-white'>/Pack</span>
          </div>
          <p className="validity">
            Validity : 3 Months
          </p>
          <ul>
            <li><i className="fas fa-check-circle" /> 10 Tests Included</li>
            <li><i className="fas fa-check-circle" /> Instant Access</li>
            <li><i className="fas fa-check-circle" /> AI Performance Report</li>
            <li><i className="fas fa-check-circle" /> Junior Level</li>
          </ul>
          <a href="#" className="take-test highlight-text">
            Buy Now
          </a>
        </div>
      </div>
      {/* Card */}
      <div className="col-lg-4 col-md-6">
        <div className="okyps-pricing-card">
          <span className="package-badge">
            Premium
          </span>
          <h3>Pack of 50</h3>
          <div className="price">
            ₹58,941
            <span>/Pack</span>
          </div>
          <p className="validity">
            Validity : 6 Months
          </p>
          <ul>
            <li><i className="fas fa-check-circle" /> 50 Tests Included</li>
            <li><i className="fas fa-check-circle" /> Instant Access</li>
            <li><i className="fas fa-check-circle" /> Rank Analysis</li>
            <li><i className="fas fa-check-circle" /> Junior Level</li>
          </ul>
          <a href="#" className="rts-btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

   </>

  )
}

export default Package
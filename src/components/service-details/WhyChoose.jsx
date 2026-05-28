import React from "react";

function WhyChoose() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="why-choose-us-service ">
        <div className="container">
          <div className="title-area-center-style">
            <div className="pre-title">
              <img src="assets/images/banner/bulb.png" alt="icon" />
              <span>Why Choose</span>
            </div>
            <h2 className="title">Why Choose Us?</h2>
            <p className="post-title">
              You'll find something to spark your curiosity and enhance
            </p>
          </div>

          <div className="position-relative">
            {/* Dashed Curve */}
            <svg
              className="curve-line"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 C250,300 450,300 650,150 C850,0 1000,50 1200,200"
                fill="none"
                stroke="#d9e8e8"
                strokeWidth={4}
                strokeDasharray="12 12"
              />
            </svg>
            <div className="row justify-content-center g-4 why-choose-container">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="why-card">
                  <div className="icon-box">
                    <i class="fa-light fa-user-shield"></i>{" "}
                  </div>
                  <h4>EXPERT-LED LEARNING</h4>
                  <p>
                    Learn from experienced mentors and industry professionals
                    with practical guidance.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="why-card ">
                  <div className="icon-box">
                    <i class="fa-light fa-award"></i>{" "}
                  </div>
                  <h4>CAREER-FOCUSED PROGRAMS</h4>
                  <p>
                    Build real-world skills through job-oriented courses
                    designed for future success.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="why-card">
                  <div className="icon-box">
                    <i class="fa-light fa-clock"></i>{" "}
                  </div>
                  <h4>FLEXIBLE ONLINE EDUCATION</h4>
                  <p>
                    Study anytime, anywhere with easy access to interactive
                    online learning resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;

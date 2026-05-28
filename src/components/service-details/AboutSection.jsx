import React from "react";

function AboutSection() {
  return (
    <>
      {/* join our team area start */}
      <div className="join-our-team-area v-1 rts-section-gap shape-move">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-about-image">
                <img src="assets/images/about-service.jpg" alt="join" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area-left-style">
                <div className="pre-title">
                  <img src="assets/images/banner/bulb.png" alt="icon" />
                  <span>About Service</span>
                </div>
                <h2 className="title">What is Potential Prism?</h2>
                <p className="post-title" align="justify">
                  Potential Prism is our proprietary psychometric analysis based
                  assessment of your personality and aptitude. Small decisions
                  during your schooling influence your career throughout your
                  life. Designed by a panel of psychologists, it empowers you to
                  take informed career decisions. Potential Prism is our
                  proprietary psychometric analysis based assessment of your
                  personality and aptitude. Small decisions during your
                  schooling influence your career throughout your life. Designed
                  by a panel of psychologists, it empowers you to take informed
                  career decisions.
                </p>
                 <a href="/contact-us" className="rts-btn btn-primary">
                    Contact Us
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area shape-image">
          <img
            src="assets/images/instructor/shape/05.png"
            data-speed="0.04"
            alt="shape"
            className="shape"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;

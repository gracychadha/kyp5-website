import React from "react";

function TestComponent() {
  return (
    <>
      <div>
        <div className="login-registration-wrapper">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="login-page-form-area">
                  <h4 className="title">Sign Up to Start Your Test</h4>
                  <p className="sub-title">
                    Create your account in seconds and begin your assessment
                  </p>
                  <form action="">
                    <div className="half-input-wrapper">
                      <div className="single-input-wrapper">
                        <label htmlFor="username">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          id="username"
                          type="text"
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div className="single-input-wrapper">
                        <label htmlFor="email">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="half-input-wrapper">
                      <div className="single-input-wrapper">
                        <label htmlFor="phone">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          id="phone"
                          type="text"
                          placeholder="+91 96897 ***** "
                          required
                        />
                      </div>
                      <div className="single-input-wrapper">
                        <label htmlFor="date">
                          DOB <span className="text-danger">*</span>
                        </label>
                        <input id="date" type="date" required />
                      </div>
                    </div>
                    <div className="half-input-wrapper">
                      <div className="single-input-wrapper">
                        <label htmlFor="gender">
                          Gender <span className="text-danger">*</span>
                        </label>
                        <input
                          id="phone"
                          type="text"
                          placeholder="+91 96897 ***** "
                          required
                        />
                      </div>
                      <div className="single-input-wrapper">
                        <label htmlFor="date">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input
                          id="address"
                          type="text"
                          placeholder="Enter Your Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="single-checkbox-filter">
                      <div className="check-box">
                        <input type="checkbox" id="type-1" />
                        <label htmlFor="type-1">
                          Accept the Terms and Privacy Policy
                        </label>
                        <br />
                      </div>
                    </div>
                   <a href="/instruction" className="rts-btn btn-primary">Sign Up</a>
                    
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-thumbnail-login-p mt--100">
                  <img
                    src="assets/images/banner/login-bg.png"
                    width={600}
                    height={495}
                    alt="login-form"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p--100" />
      </div>
    </>
  );
}

export default TestComponent;

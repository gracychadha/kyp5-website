import React from "react";

function LoginComponent() {
  return (
    <>
      <div className="login-registration-wrapper">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="login-page-form-area">
                <h4 className="title">Login to Your Account👋</h4>
                <form action="#">
                  <div className="single-input-wrapper">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="single-input-wrapper">
                    <label htmlFor="password">Your Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="single-checkbox-filter">
                    <div className="check-box">
                      <input type="checkbox" id="type-1" />
                      <label htmlFor="type-1">Remember Me</label>
                      <br />
                    </div>
                  </div>
                  <button className="rts-btn btn-primary">Login</button>
                 
                  <p>
                    Don't Have an account?{" "}
                    <a href="registration.html">Registration</a>
                  </p>
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
    </>
  );
}

export default LoginComponent;

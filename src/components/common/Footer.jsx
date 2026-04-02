import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-callto-action-area bg-light-1">

        {/* CTA Section */}
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="call-to-sction bg_image shape-move">

                <h2 className="title">
                  Skills Certificate From <br /> the Studyhub
                </h2>

                <a href="#" className="rts-btn btn-primary-white with-arrow">
                  View All Course
                  <i className="fa-regular fa-arrow-right"></i>
                </a>

                <div className="cta-image">
                  <img src="/assets/images/cta/women.png" alt="cta" />
                </div>

                <div className="shape-image">

                  <div className="shape one" data-speed="0.04">
                    <img src="/assets/images/cta/03.svg" alt="shape" />
                  </div>

                  <div className="shape two" data-speed="0.04">
                    <img src="/assets/images/cta/04.svg" alt="shape" />
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div> */}

        {/* Footer Main */}
        <div className="container">
          <div className="row ptb--100">
            <div className="col-lg-12">

              <div className="footer-one-main-wrapper">

                {/* Logo & Contact */}
                <div className="footer-singl-wized left-logo">

                  <div className="head">
                    <a href="#">
                      <img src="assets/images/logo/main-logo.png" alt="logo" />
                    </a>
                  </div>

                  <div className="body">

                    <p className="dsic">
                      We are passionate about education dedicated to providing
                      high-quality resources for learners of all backgrounds.
                    </p>

                    <ul className="wrapper-list">
                      <li>
                        <i className="fa-regular fa-location-dot"></i>
                        Yarra Park, Melbourne, Australia
                      </li>

                      <li>
                        <i className="fa-regular fa-phone"></i>
                        <a href="tel:+61485826710">+(61) 485-826-710</a>
                      </li>
                    </ul>

                  </div>

                </div>

                {/* Quick Links */}
                <div className="footer-singl-wized">

                  <div className="head">
                    <h6 className="title">Quick Links</h6>
                  </div>

                  <div className="body">
                    <ul className="menu">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Team</a></li>
                      <li><a href="#">Gallery</a></li>
                      <li><a href="#">Our Blogs</a></li>
                    </ul>
                  </div>

                </div>

                {/* Explore */}
                <div className="footer-singl-wized">

                  <div className="head">
                    <h6 className="title">Explore</h6>
                  </div>

                  <div className="body">
                    <ul className="menu">
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                      <li><a href="/terms-conditions">Terms &amp; Conditions</a></li>
                    </ul>
                  </div>

                </div>

                {/* Newsletter */}
                <div className="footer-singl-wized input-area">

                  <div className="head">
                    <h6 className="title">Newsletter</h6>
                  </div>

                  <div className="body">

                    <p className="disc">
                      Subscribe to our newsletter and get updates on new courses
                    </p>

                    <form>

                      <div className="input-area-fill">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          required
                        />

                        <button type="submit">Subscribe</button>
                      </div>

                      <div className="d-flex align-items-center">

                        <input type="checkbox" id="exampleCheck1" />

                        <label htmlFor="exampleCheck1">
                          I agree to the terms of use and privacy policy.
                        </label>

                      </div>

                    </form>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area-one-border">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="copyright-area-one">

                  <p>&copy; {new Date().getFullYear()} <a href="https://kyp5.com">KYP5</a> | Developed by <a href="https://vibrantick.in/" target="_blank"> Vibrantick Infotech Solutions</a></p>

                  <div className="social-copyright">

                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;
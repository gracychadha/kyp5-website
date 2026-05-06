import React from "react";
import { useSite } from "../../context/SiteContext";
import logo from "../../../public/assets/images/logo/main-logo.png";
function Footer() {
  const { siteData } = useSite();
  return (
    <>
      <div className="footer-callto-action-area bg-light-1">
        {/* Footer Main */}
        <div className="container">
          <div className="row ptb--100">
            <div className="col-lg-12">
              <div className="footer-one-main-wrapper">
                {/* Logo & Contact */}
                <div className="footer-singl-wized left-logo">
                  <div className="head">
                    <a href="/">
                      <img
                        id="footer-logo"
                        src={
                          siteData?.data?.branding?.logoUrl
                            ? import.meta.env.VITE_BASE_URL.replace(
                                "/api/public/",
                                "",
                              ) + siteData.data.branding.logoUrl
                            : logo
                        }
                        alt="logo"
                      />
                    </a>
                  </div>

                  <div className="body">
                    <p className="dsic">
                      {siteData?.data?.footer?.about
                        ? siteData.data.footer.about
                        : " We are passionate about education dedicated to providing high-quality resources for learners of all backgrounds."}
                    </p>

                    <ul className="wrapper-list">
                      <li>
                        <i className="fa-regular fa-location-dot"></i>
                        {siteData?.data?.contact?.address
                          ? siteData.data.contact.address
                          : "Mohali , Punjab"}
                      </li>

                      <li>
                        <i className="fa-regular fa-phone"></i>
                        <a href="tel:{ siteData?.data?.contact?.phone ? siteData.data.contact.phone : '+91 83528 03233' }">
                          {siteData?.data?.contact?.phone
                            ? siteData.data.contact.phone
                            : "+91 83528 03233"}
                        </a>
                      </li>
                      <li>
                        <i className="fa-light fa-envelope" />
                        {siteData?.data?.contact?.email
                          ? siteData.data.contact.email
                          : "info@kyp5.com"}
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
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Our Blogs</a>
                      </li>
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
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/terms-conditions">Terms &amp; Conditions</a>
                      </li>
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
                  <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <a href="https://kyp5.com">
                      {siteData?.data?.branding?.siteName
                        ? siteData.data.branding.siteName
                        : "KYP5"}
                    </a>{" "}
                    | Developed by{" "}
                    <a href="https://vibrantick.in/" target="_blank">
                      {" "}
                      Vibrantick Infotech Solutions
                    </a>
                  </p>

                  <div className="social-copyright">
                    <ul>
                      {siteData?.data?.footer?.socialLinks?.facebook && (
                        <li>
                          <a
                            href={siteData.data.footer.socialLinks.facebook}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                      )}

                      {siteData?.data?.footer?.socialLinks?.instagram && (
                        <li>
                          <a
                            href={siteData.data.footer.socialLinks.instagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      )}

                      {siteData?.data?.footer?.socialLinks?.linkedin && (
                        <li>
                          <a
                            href={siteData.data.footer.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      )}

                      {siteData?.data?.footer?.socialLinks?.youtube && (
                        <li>
                          <a
                            href={siteData.data.footer.socialLinks.youtube}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </li>
                      )}
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

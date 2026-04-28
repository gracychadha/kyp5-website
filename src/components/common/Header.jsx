import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/logo/main-logo.png";
function Header() {
  return (
    <header className="header-one header--sticky">
      <div className="header-top-one-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top-one">
                <div className="left-information">
                  <a href="mailto:someone@example.com" className="email">
                    <i className="fa-light fa-envelope" />
                    info@kyp5.com
                  </a>
                  <a href="tel:+4733378901" className="email">
                    <i className="fa-light fa-phone" />
                    +91 987 885 3633
                  </a>
                  <a
                    href="https://kyp5.com/assets/upload/msme.pdf"
                    className="email"
                    target="_blank"
                  >
                    <i className="fa-light fa-handshake"></i>
                    MSME
                  </a>
                </div>
                <div className="right-information">
                  <ul className="rts-dropdown-menu switcher-language">
                    <li className="has-child-menu">
                      <a href="#">
                        <img
                          className="left-image"
                          src="assets/images/flag-01.svg"
                          alt="Language Images"
                        />
                        <span className="menu-item">English</span>
                        <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-03.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Deutsch</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-02.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Portuguese</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-04.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Russian</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="rts-dropdown-menu switcher-currency">
                    <li className="has-child-menu">
                      <a href="#">
                        <span className="menu-item">USD</span>
                        <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="menu-item">Euro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Real</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Ruble</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-one-wrapper">
              <div className="left-side-header">
                <a href="/" className="logo-area">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="main-nav-one">
                <nav>
                  <ul>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/about-us">
                        About us
                      </Link>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/our-team">
                        Our Team
                      </Link>
                    </li>

                    <li className="has-dropdown">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link className="submenu-link" to="">
                            Psychometric Test
                          </Link>
                          <Link className="submenu-link" to="">
                            Talent Hub Test
                          </Link>
                          <Link className="submenu-link" to="">
                            Join Now
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/our-blogs">
                        Our Blogs
                      </Link>
                    </li>
                    <div className="buttons-area">
                      <Link className="rts-btn btn-primary" to="/contact-us">
                        Contact Us
                      </Link>
                    </div>
                  </ul>
                </nav>
              </div>
             
              <div className="header-right-area-one d-lg-none">
               
                <div className="menu-btn" id="menu-btn">
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y={14} width={20} height={2} fill="#1F1F25" />
                    <rect y={7} width={20} height={2} fill="#1F1F25" />
                    <rect width={20} height={2} fill="#1F1F25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

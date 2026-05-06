import React from "react";
import { useSite } from "../../context/SiteContext";
function MenuHeader() {
  const { siteData } = useSite();
  return (
    <>
      {/* header style two */}
      <div id="side-bar" className="side-bar header-two">
        <button className="close-icon-menu">
          <i className="far fa-times" />
        </button>
        {/* inner menu area desktop start */}
        
        {/* mobile menu area start */}
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li className="">
                <a href="/" className="main">
                  Home
                </a>
              </li>
              <li className="">
                <a href="/about-us" className="main">
                  About Us
                </a>
              </li>
              <li className="">
                <a href="/our-team" className="main">
                  Our Team
                </a>
              </li>
              <li className="has-droupdown">
                <a href="#" className="main">
                  Services
                </a>
                <ul className="submenu mm-collapse">
                  <li>
                    <a href="#" className="tag">
                      Test
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="/our-blogs" className="main">
                  Our Blogs
                </a>
              </li>
              <li className="">
                <a href="/contact-us" className="main">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="buttons-area">
            <a href="#" className="rts-btn btn-border">
              Log In
            </a>
            <a href="#" className="rts-btn btn-primary">
              Sign Up
            </a>
          </div>
          <div className="rts-social-style-one pl--20 mt--50">
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
        {/* mobile menu area end */}
      </div>
      {/* header style two End */}
    </>
  );
}

export default MenuHeader;

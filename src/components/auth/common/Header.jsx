import React from "react";

function Header() {
  return (
    <>
      <div className="header-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-tranaparent-main-wrapper">
                <a href="" className="logo-area">
                  <img src="assets/images/logo/main-logo.png" alt="logo" />
                </a>
                <div className="right-area">
                 
                  <a href="#" className="rts-btn btn-primary-white">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

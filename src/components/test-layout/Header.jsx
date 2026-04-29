import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/logo/kyp5.png";
function Header() {
  return (
    <header className="header-one header--sticky">
      <div className="header-top-one-wrapper">
        <div className="test-container container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-one-wrapper">
                <div className="left-side-header">
                  <a href="/" className="logo-area">
                    <img src={logo} alt="logo" />
                  </a>
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

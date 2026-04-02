import React from "react";

function Banner() {
  return (
    <>
      <div className="rts-bread-crumbarea-1 rts-section-gap bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main-wrapper">
                <h1 className="title">Terms and Conditions</h1>
                {/* breadcrumb pagination area */}
                <div className="pagination-wrapper">
                  <a href="index.html">Home</a>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="active" href="">
                    Terms and Conditions
                  </a>
                </div>
                {/* breadcrumb pagination area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

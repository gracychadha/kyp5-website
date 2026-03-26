import React from "react";

export default function Banner() {
  return (
    <>
      <div className="rts-bread-crumbarea-1 rts-section-gap bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main-wrapper">
                <h1 className="title">Our Blogs </h1>
                {/* breadcrumb pagination area */}
                <div className="pagination-wrapper">
                  <a href="/">Home</a>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="active" href="instructor.html">
                    Our Blogs
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

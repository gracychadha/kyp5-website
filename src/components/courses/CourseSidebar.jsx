import React from "react";

function CourseSidebar() {
  return (
    <>
      <div className="col-lg-3">
        {/* course-filter-area start */}
        <div className="rts-course-filter-area">
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Search</h6>
            <div className="search-filter filter-body">
              <div className="input-wrapper">
                <input type="text" placeholder="Search Course..." />
                <i className="fa-light fa-magnifying-glass" />
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Type</h6>
            <div className="checkbox-filter filter-body">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="type-1" />
                    <label htmlFor="type-1">Course</label>
                    <br />
                  </div>
                  <span className="number">(20,000)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="type-2" />
                    <label htmlFor="type-2">Bundle</label>
                    <br />
                  </div>
                  <span className="number">(20,000)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Category</h6>
            <div className="checkbox-filter filter-body">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-1" />
                    <label htmlFor="category-1">Web Development</label>
                    <br />
                  </div>
                  <span className="number">(130)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-2" />
                    <label htmlFor="category-2">Film &amp; Video</label>
                    <br />
                  </div>
                  <span className="number">(85)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-3" />
                    <label htmlFor="category-3">Illustration</label>
                    <br />
                  </div>
                  <span className="number">(210)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-4" />
                    <label htmlFor="category-4">Music &amp; Art</label>
                    <br />
                  </div>
                  <span className="number">(45)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-5" />
                    <label htmlFor="category-5">Photography</label>
                    <br />
                  </div>
                  <span className="number">(35)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-6" />
                    <label htmlFor="category-6">Business &amp; Marketing</label>
                    <br />
                  </div>
                  <span className="number">(66)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-7" />
                    <label htmlFor="category-7">Design &amp; UI/UX</label>
                    <br />
                  </div>
                  <span className="number">(95)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="category-8" />
                    <label htmlFor="category-8">Web Design</label>
                    <br />
                  </div>
                  <span className="number">(150)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Level</h6>
            <div className="checkbox-filter filter-body">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="lavel-1" />
                    <label htmlFor="lavel-1">All Levels</label>
                    <br />
                  </div>
                  <span className="number">(130)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="lavel-2" />
                    <label htmlFor="lavel-2">Beginner</label>
                    <br />
                  </div>
                  <span className="number">(85)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="lavel-3" />
                    <label htmlFor="lavel-3">Intermediate</label>
                    <br />
                  </div>
                  <span className="number">(210)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="lavel-4" />
                    <label htmlFor="lavel-4">Expert</label>
                    <br />
                  </div>
                  <span className="number">(45)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Author</h6>
            <div className="checkbox-filter filter-body">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="author-1" />
                    <label htmlFor="author-1">Admin</label>
                    <br />
                  </div>
                  <span className="number">(130)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="author-2" />
                    <label htmlFor="author-2">Sean Kaye</label>
                    <br />
                  </div>
                  <span className="number">(85)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="author-3" />
                    <label htmlFor="author-3">David Travis</label>
                    <br />
                  </div>
                  <span className="number">(210)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="author-4" />
                    <label htmlFor="author-4">Dr. Angela Yu</label>
                    <br />
                  </div>
                  <span className="number">(45)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Tage</h6>
            <div className="checkbox-filter filter-body">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="Tage-1" />
                    <label htmlFor="Tage-1">Course</label>
                    <br />
                  </div>
                  <span className="number">(10)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="Tage-2" />
                    <label htmlFor="Tage-2">Education</label>
                    <br />
                  </div>
                  <span className="number">(85)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="Tage-3" />
                    <label htmlFor="Tage-3">LMS</label>
                    <br />
                  </div>
                  <span className="number">(21)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          {/* single filter wized */}
          <div className="single-filter-left-wrapper">
            <h6 className="title">Price</h6>
            <div className="checkbox-filter filter-body last">
              <div className="checkbox-wrapper">
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="price-1" />
                    <label htmlFor="price-1">Free</label>
                    <br />
                  </div>
                  <span className="number">(6)</span>
                </div>
                {/* single check box end */}
                {/* single check box */}
                <div className="single-checkbox-filter">
                  <div className="check-box">
                    <input type="checkbox" id="price-2" />
                    <label htmlFor="price-2">Paid</label>
                    <br />
                  </div>
                  <span className="number">(80)</span>
                </div>
                {/* single check box end */}
              </div>
            </div>
          </div>
          {/* single filter wized end */}
          <a href="#" className="rts-btn btn-border">
            <i className="fa-regular fa-x" /> Clear All Filters
          </a>
        </div>
        {/* course-filter-area end */}
      </div>
    </>
  );
}

export default CourseSidebar;

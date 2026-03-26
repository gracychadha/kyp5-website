import React from "react";

function BlogSection() {
  return (
    <>
      <div className="rts-section-gap rts-blog-area">
        <div className="container pb--130">

          <div className="row">
            <div className="col-lg-12">

              <div className="title-area-center-style">

                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>News & Article</span>
                </div>

                <h2 className="title">Read Our Latest News</h2>

                <p className="post-title">
                  Our mission is to provide you with valuable insights
                </p>

              </div>

            </div>
          </div>

          <div className="row g-5 mt--20">

            {/* Blog 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-style-one">

                <a href="#" className="thumbnail">
                  <img src="/assets/images/blog/01.jpg" alt="blog" />

                  <div className="tags-area">
                    <span>Marketing</span>
                  </div>
                </a>

                <div className="blog-top-area">

                  <div className="single">
                    <i className="fa-light fa-calendar-days"></i>
                    <p>October 26, 2023</p>
                  </div>

                  <div className="single">
                    <i className="fa-light fa-user"></i>
                    <p>Jon Adam</p>
                  </div>

                </div>

                <a href="#">
                  <h5 className="title">
                    Announcing the winners the 2023 Education.com Story Challenge!
                  </h5>
                </a>

                <div className="button-area">
                  <a href="#" className="rts-btn btn-primary readmore-btn">
                    Read More
                    <i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>

              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-style-one">

                <a href="#" className="thumbnail">
                  <img src="/assets/images/blog/02.jpg" alt="blog" />

                  <div className="tags-area">
                    <span>Business</span>
                  </div>
                </a>

                <div className="blog-top-area">

                  <div className="single">
                    <i className="fa-light fa-calendar-days"></i>
                    <p>October 26, 2023</p>
                  </div>

                  <div className="single">
                    <i className="fa-light fa-user"></i>
                    <p>Jon Adam</p>
                  </div>

                </div>

                <a href="#">
                  <h5 className="title">
                    Azure AI Fundamentals: How to Pass the AI-900 Exam
                  </h5>
                </a>

                <div className="button-area">
                  <a href="#" className="rts-btn btn-primary readmore-btn">
                    Read More
                    <i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>

              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-style-one">

                <a href="#" className="thumbnail">
                  <img src="/assets/images/blog/03.jpg" alt="blog" />

                  <div className="tags-area">
                    <span>Accounting</span>
                  </div>
                </a>

                <div className="blog-top-area">

                  <div className="single">
                    <i className="fa-light fa-calendar-days"></i>
                    <p>October 26, 2023</p>
                  </div>

                  <div className="single">
                    <i className="fa-light fa-user"></i>
                    <p>Jon Adam</p>
                  </div>

                </div>

                <a href="#">
                  <h5 className="title">
                    How to Become a Business Intelligence Analyst in 6 Simple Steps
                  </h5>
                </a>

                <div className="button-area">
                  <a href="#" className="rts-btn btn-primary readmore-btn">
                    Read More
                    <i className="fa-regular fa-arrow-right"></i>
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

export default BlogSection;
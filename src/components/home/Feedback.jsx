import React from "react";

function Feedback() {
  return (
    <>
      <div className="rts-feedback-area rts-section-gap bg-light-1 shape-move">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>Student Review</span>
                </div>

                <h2 className="title">Our Students Feedback</h2>

                <p className="post-title">
                  You'll find something to spark your curiosity and enhance
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="students-feedback-wrapper-1 bg_image">
                <div className="swiper mySwiper-testimonials-1">
                  <div className="swiper-wrapper">
                    {/* Testimonial 1 */}
                    <div className="swiper-slide">
                      <div className="single-students-feedback">
                        <div className="left-image">
                          <img
                            src="/assets/images/students-feedback/01.jpg"
                            alt="feedback"
                          />
                        </div>

                        <div className="right-content">
                          <img
                            src="/assets/images/students-feedback/01.png"
                            alt="quote"
                          />

                          <p className="disc">
                            I can't recommend The Gourmet Haven enough. It's a
                            place for special occasions, date nights, or
                            whenever you're in the mood for a culinary
                            adventure.
                          </p>

                          <div className="author-area">
                            <ul className="stars">
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-regular fa-star"></i>
                              </li>
                            </ul>

                            <h5 className="title">Emma Elizabeth</h5>
                            <span>Assistant Teacher</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="swiper-slide">
                      <div className="single-students-feedback">
                        <div className="left-image">
                          <img
                            src="/assets/images/students-feedback/02.jpg"
                            alt="feedback"
                          />
                        </div>

                        <div className="right-content">
                          <img
                            src="/assets/images/students-feedback/01.png"
                            alt="quote"
                          />

                          <p className="disc">
                            I can't recommend The Gourmet Haven enough. It's a
                            place for special occasions, date nights, or
                            whenever you're in the mood for a culinary
                            adventure.
                          </p>

                          <div className="author-area">
                            <ul className="stars">
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-regular fa-star"></i>
                              </li>
                            </ul>

                            <h5 className="title">Emma Elizabeth</h5>
                            <span>Assistant Teacher</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="swiper-slide">
                      <div className="single-students-feedback">
                        <div className="left-image">
                          <img
                            src="/assets/images/students-feedback/01.jpg"
                            alt="feedback"
                          />
                        </div>

                        <div className="right-content">
                          <img
                            src="/assets/images/students-feedback/01.png"
                            alt="quote"
                          />

                          <p className="disc">
                            I can't recommend The Gourmet Haven enough. It's a
                            place for special occasions, date nights, or
                            whenever you're in the mood for a culinary
                            adventure.
                          </p>

                          <div className="author-area">
                            <ul className="stars">
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-regular fa-star"></i>
                              </li>
                            </ul>

                            <h5 className="title">Emma Elizabeth</h5>
                            <span>Assistant Teacher</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-button-next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>

                  <div className="swiper-button-prev">
                    <i className="fa-solid fa-chevron-left"></i>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>

                <div className="shape-image">
                  <div
                    className="shape one"
                    data-speed="0.04"
                    data-revert="true"
                  >
                    <img src="/assets/images/banner/18.png" alt="shape" />
                  </div>

                  <div className="shape three" data-speed="0.04">
                    <img src="/assets/images/banner/17.png" alt="shape" />
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

export default Feedback;

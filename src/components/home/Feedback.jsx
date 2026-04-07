import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Feedback() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "testimonials")
      .then((response) => {
        setTestimonials(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="rts-feedback-area rts-section-gap bg-light-1 shape-move">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>Student's Reviews</span>
                </div>

                <h2 className="title">Our Student's Feedback</h2>

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
                    {testimonials.map((testimonial) => (
                      <div className="swiper-slide" key={testimonial.id}>
                        <div className="single-students-feedback">
                          <div className="left-image">
                            <img
                              src={testimonial.avatar
                                ? import.meta.env.VITE_BASE_URL.replace("/api/public/", "") +
                                  testimonial.avatar
                                : "/assets/images/students-feedback/01.png"}
                              alt="feedback"
                            />
                          </div>

                          <div className="right-content">
                            <img
                              src="/assets/images/students-feedback/01.png"
                              alt="quote"
                            />

                            <p className="disc">
                             {testimonial.content ? testimonial.content : "we have a good experience with KYP5. They are very helpful and supportive. I am very happy to join KYP5."}
                            </p>

                            <div className="author-area">
                              <ul className="stars">
                                {testimonial.rating ? (
                                  Array.from({ length: testimonial.rating }).map(
                                    (_, index) => (
                                      <li key={index}>
                                        <i className="fa-solid fa-star"></i>
                                      </li>
                                    )
                                  )
                                ) : (
                                  <>
                                    <li>
                                      <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-star"></i>
                                    </li>
                                  </>
                                )}

                              </ul>

                              <h5 className="title">{testimonial.name ? testimonial.name : "Admin"}</h5>
                              <span>{testimonial.designation ? testimonial.designation : "Student"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
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

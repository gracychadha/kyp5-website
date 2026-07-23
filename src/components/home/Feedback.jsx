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
      <div className="rts-students-feedback-area rts-section-gap">
        <div className="container pt--120">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-w-style-center">
                <h2 className="title">Our Students Feedback</h2>
                <p>
                  Discover what our students have to say about their learning
                  experience with us.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="swiper-feedback-wrapper-5">
                <div className="swiper swiper-data">
                  <div className="swiper-wrapper">
                    {testimonials && testimonials.length > 0 ? (
                      testimonials.map((testimonial) => (
                        <div className="swiper-slide" key={testimonial.id}>
                          <div className="single-students-feedback-5">
                            {/* Rating */}
                            <div className="stars">
                              {Array.from({
                                length: testimonial.rating || 5,
                              }).map((_, index) => (
                                <i key={index} className="fa-solid fa-star"></i>
                              ))}
                            </div>

                            {/* Review */}
                            <p className="disc">{testimonial.content}</p>

                            {/* Author */}
                            <div className="authore-area">
                              <img
                                src={
                                  testimonial.avatar
                                    ? import.meta.env.VITE_BASE_URL.replace(
                                        "/api/public/",
                                        "",
                                      ) + testimonial.avatar
                                    : "/assets/images/students-feedback/02.png"
                                }
                                alt={testimonial.name}
                              />

                              <div className="author">
                                <h6 className="title">{testimonial.name}</h6>

                                <span>
                                  {testimonial.designation || "Student"}
                                </span>
                              </div>
                            </div>

                            {/* Quote */}
                            <div className="quote">
                              <img
                                src="/assets/images/students-feedback/19.png"
                                alt="quote"
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="d-flex justify-content-center align-items-center">
                        <p>No feedback Found Yet</p>
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  {testimonials && testimonials.length > 0 && (
                    <div className="left-align-arrow-btn">
                      <div className="swiper-button-next">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>

                      <div className="swiper-button-prev">
                        <i className="fa-solid fa-chevron-left"></i>
                      </div>

                      <div className="swiper-pagination"></div>
                    </div>
                  )}
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
